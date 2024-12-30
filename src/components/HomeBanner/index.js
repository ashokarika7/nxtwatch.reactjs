import {IoIosClose} from 'react-icons/io'

import {
  HomeBannerContainer,
  HomeBannerImg,
  HomeBannerText,
  HomeBannerTextBtn,
  HomeBannerDetailsContainer,
  HomeBannerBtn,
} from './styledComponents'

const HomeBanner = props => {
  const {toggleHomeBanner} = props

  const onClickClose = () => {
    toggleHomeBanner()
  }

  return (
    <HomeBannerContainer>
      <HomeBannerDetailsContainer>
        <HomeBannerImg
          alt="nxt watch logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        />
        <HomeBannerText>
          Buy Nxt Watch Premium prepaid plans with UPI
        </HomeBannerText>
        <HomeBannerTextBtn type="button">GET IT NOW</HomeBannerTextBtn>
      </HomeBannerDetailsContainer>
      <HomeBannerBtn data-testid="close" onClick={onClickClose}>
        <IoIosClose />
      </HomeBannerBtn>
    </HomeBannerContainer>
  )
}

export default HomeBanner
