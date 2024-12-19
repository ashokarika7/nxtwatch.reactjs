import Header from '../Header'
import SideBar from '../SideBar'
import HomeVideo from '../HomeVideo'
import {HomeTotalContainer} from './styledComponents'

const Home = () => (
  <>
    <Header />
    <HomeTotalContainer>
      <SideBar />
      <HomeVideo />
    </HomeTotalContainer>
  </>
)

export default Home
