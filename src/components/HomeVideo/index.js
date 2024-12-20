import {Component} from 'react'
import {IoIosSearch} from 'react-icons/io'

import LightThemeContext from '../../context/LightThemeContext'
import HomeBanner from '../HomeBanner'
import {
  HomeVideoTotalContainer,
  SearchBarContainer,
  SearchInpEl,
  SearchBtn,
} from './styledComponents'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  pending: 'PENDING',
}

class HomeVideo extends Component {
  state = {homeBanner: true, apiCallStatus: apiStatus.initial, searchInp: ''}

  onChangeSearchInp = event => {
    this.setState({searchInp: event.target.value})
  }

  getDisplayElements = () => {
    const {searchInp} = this.state
  }

  toggleHomeBanner = () => {
    this.setState({homeBanner: false})
  }

  renderSuccess = () => {}

  renderLoader = () => {}

  renderFailure = () => {}

  renderApiStatus = () => {
    const {apiCallStatus} = this.state

    switch (apiCallStatus) {
      case apiCallStatus.success:
        return this.renderSuccess()

      case apiCallStatus.pending:
        return this.renderLoader()

      case apiCallStatus.failure:
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
              <SearchBarContainer>
                <SearchInpEl
                  value={searchInp}
                  onChange={this.onChangeSearchInp}
                  placeholder="Search"
                  type="text"
                />
                <SearchBtn onclick={this.getDisplayElements}>
                  <IoIosSearch />
                </SearchBtn>
              </SearchBarContainer>
              {this.renderApiStatus()}
            </HomeVideoTotalContainer>
          )
        }}
      </LightThemeContext.Consumer>
    )
  }
}

export default HomeVideo
