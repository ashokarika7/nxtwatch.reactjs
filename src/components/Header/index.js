import {HiOutlineLightBulb} from 'react-icons/hi'
import {CgDarkMode} from 'react-icons/cg'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import LightThemeContext from '../../context/LightThemeContext'
import {
  NavContainer,
  NavImg,
  NavOptionsContainer,
  NavIconsBtn,
  NavProfileImg,
  LogoutBtn,
  NavMobileOptionsContainer,
} from './styledComponents'

const Header = props => (
  <LightThemeContext.Consumer>
    {value => {
      const {lightTheme, toggleTheme} = value

      const onClickTheme = () => {
        toggleTheme()
      }

      const onClickNavImg = () => {
        const {history} = props
        history.replace('/')
      }

      const onClickLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      const darkmodeIcons = lightTheme ? <HiOutlineLightBulb /> : <CgDarkMode />
      const navImgUrl = lightTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      return (
        <NavContainer lightTheme={lightTheme}>
          <NavIconsBtn onClick={onClickNavImg}>
            <NavImg alt="website logo" src={navImgUrl} />
          </NavIconsBtn>
          <NavOptionsContainer>
            <NavIconsBtn
              data-testid="theme"
              onClick={onClickTheme}
              lightTheme={lightTheme}
            >
              {darkmodeIcons}
            </NavIconsBtn>
            <NavIconsBtn>
              <NavProfileImg
                alt="profile"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              />
            </NavIconsBtn>
            <LogoutBtn
              onClick={onClickLogout}
              lightTheme={lightTheme}
              type="button"
            >
              Logout
            </LogoutBtn>
          </NavOptionsContainer>
          <NavMobileOptionsContainer>
            <NavIconsBtn
              data-testid="theme"
              onClick={onClickTheme}
              lightTheme={lightTheme}
            >
              {darkmodeIcons}
            </NavIconsBtn>
            <NavIconsBtn lightTheme={lightTheme}>
              <GiHamburgerMenu size={30} />
            </NavIconsBtn>
            <NavIconsBtn onClick={onClickLogout} lightTheme={lightTheme}>
              <FiLogOut size={30} />
            </NavIconsBtn>
          </NavMobileOptionsContainer>
        </NavContainer>
      )
    }}
  </LightThemeContext.Consumer>
)

export default withRouter(Header)
