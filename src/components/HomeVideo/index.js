import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoIosSearch} from 'react-icons/io'
import LightThemeContext from '../../context/LightThemeContext'
import HomeBanner from '../HomeBanner'
import LoaderComponent from '../LoaderComponent'
import Failure from '../Failure'
import VideoDisplayItem from '../VideoDisplayItem'
import {
  HomeVideoTotalContainer,
  HomeVideSearchApiConstantsContainer,
  SearchBarContainer,
  SearchInpEl,
  SearchBtn,
  NoSearchResultsContainer,
  NoSearchResultsImg,
  NoSearchResultsHeader,
  NoSearchResultsPara,
  NoSearchResultsBtn,
  HomeVideoSuccessContainer,
} from './styledComponents'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  pending: 'PENDING',
}

class HomeVideo extends Component {
  state = {
    homeBanner: true,
    apiCallStatus: apiStatus.initial,
    searchInp: '',
    allVideosList: [],
  }

  componentDidMount() {
    this.getAllVideos()
  }

  getChannelDetails = data => {
    const updatedData = {
      name: data.name,
      profileImageUrl: data.profile_image_url,
    }
    return updatedData
  }

  getAllVideos = async () => {
    const {searchInp} = this.state
    const jwtToken = Cookies.get('jwt_token')
    this.setState({apiCallStatus: apiStatus.pending})
    const url = `https://apis.ccbp.in/videos/all?search=${searchInp}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const updatedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
        channel: this.getChannelDetails(eachItem.channel),
      }))
      this.setState({
        apiCallStatus: apiStatus.success,
        allVideosList: updatedData,
      })
    } else {
      this.setState({apiCallStatus: apiStatus.failure})
    }
  }

  onChangeSearchInp = event => {
    this.setState({searchInp: event.target.value})
  }

  toggleHomeBanner = () => {
    this.setState({homeBanner: false})
  }

  renderNoSearchedResults = lightTheme => (
    <NoSearchResultsContainer>
      <NoSearchResultsImg
        alt="no videos"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
      />
      <NoSearchResultsHeader lightTheme={lightTheme}>
        No Search results found
      </NoSearchResultsHeader>
      <NoSearchResultsPara lightTheme={lightTheme}>
        Try different keywords or remove search filter
      </NoSearchResultsPara>
      <NoSearchResultsBtn onClick={this.getAllVideos} type="button">
        Retry
      </NoSearchResultsBtn>
    </NoSearchResultsContainer>
  )

  renderSuccess = lightTheme => {
    const {allVideosList} = this.state
    if (allVideosList.length === 0) {
      return this.renderNoSearchedResults(lightTheme)
    }
    return (
      <HomeVideoSuccessContainer>
        {allVideosList.map(eachItem => (
          <VideoDisplayItem key={eachItem.id} videoDetails={eachItem} />
        ))}
      </HomeVideoSuccessContainer>
    )
  }

  renderLoader = () => <LoaderComponent />

  renderFailure = () => <Failure loadAgain={this.getAllVideos} />

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
    const {homeBanner, searchInp} = this.state
    return (
      <LightThemeContext.Consumer>
        {value => {
          const {lightTheme} = value

          return (
            <HomeVideoTotalContainer lightTheme={lightTheme}>
              {homeBanner && (
                <HomeBanner toggleHomeBanner={this.toggleHomeBanner} />
              )}
              <HomeVideSearchApiConstantsContainer>
                <SearchBarContainer>
                  <SearchInpEl
                    lightTheme={lightTheme}
                    value={searchInp}
                    onChange={this.onChangeSearchInp}
                    placeholder="Search"
                    type="text"
                  />
                  <SearchBtn
                    lightTheme={lightTheme}
                    onClick={this.getAllVideos}
                  >
                    <IoIosSearch />
                  </SearchBtn>
                </SearchBarContainer>
                {this.renderApiStatus(lightTheme)}
              </HomeVideSearchApiConstantsContainer>
            </HomeVideoTotalContainer>
          )
        }}
      </LightThemeContext.Consumer>
    )
  }
}

export default HomeVideo
