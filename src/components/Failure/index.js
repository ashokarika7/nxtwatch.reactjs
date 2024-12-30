import LightThemeContext from '../../context/LightThemeContext'
import {
  FailureContainer,
  FailureImg,
  FailureHeader,
  Failurepara,
  FailureBtn,
} from './styledComponents'

const Failure = props => (
  <LightThemeContext.Consumer>
    {value => {
      const {lightTheme} = value
      const {loadAgain} = props

      const onClickRetry = () => {
        loadAgain()
      }

      const failureImgUrl = lightTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

      return (
        <FailureContainer>
          <FailureImg alt="failure view" src={failureImgUrl} />
          <FailureHeader lightTheme={lightTheme}>
            Oops! Something went wrong
          </FailureHeader>
          <Failurepara lightTheme={lightTheme}>
            We are having some trouble to complete your request
          </Failurepara>
          <Failurepara lightTheme={lightTheme}>Please try again</Failurepara>
          <FailureBtn onClick={onClickRetry} type="button">
            Retry
          </FailureBtn>
        </FailureContainer>
      )
    }}
  </LightThemeContext.Consumer>
)

export default Failure
