import {Component} from 'react'
import Cookies from 'js-cookie'

import LightThemeContext from '../../context/LightThemeContext'
import LoaderComponent from '../LoaderComponent'
import Failure from '../Failure'

import {
  VideoItemDetailsContainer,
  VideoItemDetailsImg,
} from './styledComponents'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  pending: 'PENDING',
}

class VideoItemDetails extends Component {
  state = {videoDetails: {}, apiCallStatus: apiStatus.initial}

  componentDidMount() {
    this.getVideoDetails()
  }

  getChannelDetails = data => {
    const updatedData = {
      name: data.name,
      profileImageUrl: data.profile_image_url,
    }
    return updatedData
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({apiCallStatus: apiStatus.pending})
    const url = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedDetails = {
        channel: this.getChannelDetails(data.video_details.channel),
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }
      console.log(data.video_details)
    }
  }

  renderSuccess = lightTheme => {}

  renderLoader = () => <LoaderComponent />

  renderFailure = () => <Failure loadAgain={this.getVideoDetails} />

  renderApiStatus = lightTheme => {
    const {apiCallStatus} = this.state

    switch (apiCallStatus) {
      case apiStatus.success:
        return this.renderSuccess(lightTheme)

      case apiStatus.pending:
        return this.renderLoader()

      case apiStatus.failure:
        return this.renderFailure()

      default:
        return null
    }
  }

  render() {
    return (
      <LightThemeContext.Consumer>
        {value => {
          const {lightTheme} = value

          return (
            <VideoItemDetailsContainer>
              {this.renderApiStatus(lightTheme)}
            </VideoItemDetailsContainer>
          )
        }}
      </LightThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
