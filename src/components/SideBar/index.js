import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import {Link, withRouter} from 'react-router-dom'

import LightThemeContext from '../../context/LightThemeContext'
import {
  SideBarTotalContainer,
  SideBarIconRoutesContainer,
  SideBarLiContainer,
  SideBarRouteName,
  SideBarIconContainer,
  SideBarContactUsContainer,
  SideBarContactUsTitle,
  SideBarContactImgContainer,
  SideBarContactImg,
  SideBarLastPara,
} from './styledComponents'

const routesList = [
  {
    name: 'Home',
    path: '/',
    img: <IoMdHome />,
  },
  {
    name: 'Trending',
    path: '/trending',
    img: <FaFire />,
  },
  {
    name: 'Gaming',
    path: '/gaming',
    img: <SiYoutubegaming />,
  },
  {
    name: 'Saved videos',
    path: '/saved-videos',
    img: <BiListPlus />,
  },
]

const SideBar = props => (
  <LightThemeContext.Consumer>
    {value => {
      const {lightTheme} = value
      const {match} = props
      const {path} = match
      console.log(path)

      return (
        <SideBarTotalContainer lightTheme={lightTheme}>
          <SideBarIconRoutesContainer>
            {routesList.map(eachItem => (
              <Link
                style={{textDecoration: 'none', color: 'inherit'}}
                to={eachItem.path}
              >
                <SideBarLiContainer
                  lightTheme={lightTheme}
                  checkPath={path === eachItem.path}
                >
                  <SideBarIconContainer
                    checkPath={path === eachItem.path}
                    lightTheme={lightTheme}
                  >
                    {eachItem.img}
                  </SideBarIconContainer>
                  <SideBarRouteName
                    checkPath={path === eachItem.path}
                    lightTheme={lightTheme}
                  >
                    {eachItem.name}
                  </SideBarRouteName>
                </SideBarLiContainer>
              </Link>
            ))}
          </SideBarIconRoutesContainer>

          {/* CONTACT US CONTAINER.... */}
          <SideBarContactUsContainer>
            <SideBarContactUsTitle lightTheme={lightTheme}>
              CONTACT US
            </SideBarContactUsTitle>
            <SideBarContactImgContainer>
              <SideBarContactImg
                alt="facebook logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              />
              <SideBarContactImg
                alt="twitter logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              />
              <SideBarContactImg
                alt="linked in logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              />
            </SideBarContactImgContainer>
            <SideBarLastPara lightTheme={lightTheme}>
              Enjoy! Now to see your channels and recommendations!
            </SideBarLastPara>
          </SideBarContactUsContainer>
        </SideBarTotalContainer>
      )
    }}
  </LightThemeContext.Consumer>
)

export default withRouter(SideBar)
