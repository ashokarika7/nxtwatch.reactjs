import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNowStrict} from 'date-fns'

import LightThemeContext from '../../context/LightThemeContext'
import LoaderComponent from '../LoaderComponent'
import Failure from '../Failure'
import SideBar from '../SideBar'
import Header from '../Header'

import {
  VideoItemDetailsContainer,
  VideoItemDetailsSuccessContainer,
  VideoItemDetailsCardContainer,
  VideoItemDetailsImg,
  VideoItemDetailsTitle,
  ViewsLikesSaveContainer,
  ViewsTimeContainer,
  ViewsPara,
  DotPara,
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

      this.setState({
        videoDetails: updatedDetails,
        apiCallStatus: apiStatus.success,
      })
    }
  }

  renderSuccess = lightTheme => {
    const {videoDetails} = this.state
    console.log(videoDetails)
    const {thumbnailUrl, title, viewCount, publishedAt} = videoDetails
    const publishedTime = formatDistanceToNowStrict(new Date(publishedAt), {
      addSuffix: true,
    })
    return (
      <>
        <Header />
        <VideoItemDetailsSuccessContainer>
          <SideBar />
          <VideoItemDetailsCardContainer>
            <VideoItemDetailsImg src={thumbnailUrl} />
            <VideoItemDetailsTitle>{title}</VideoItemDetailsTitle>
            <ViewsLikesSaveContainer>
              <ViewsTimeContainer>
                <ViewsPara>{viewCount} views</ViewsPara>
                <DotPara>.</DotPara>
                <ViewsPara>{publishedTime}</ViewsPara>
              </ViewsTimeContainer>
            </ViewsLikesSaveContainer>
          </VideoItemDetailsCardContainer>
        </VideoItemDetailsSuccessContainer>
      </>
    )
  }

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
