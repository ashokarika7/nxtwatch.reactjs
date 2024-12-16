import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'

import Home from './components/Home'
import Login from './components/Login'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import Trending from './components/Trending'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'

import LightThemeContext from './context/LightThemeContext'

// Replace your code here
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/trending" component={Trending} />
        <Route exact path="/gaming" component={Gaming} />
        <Route exact path="/saved-videos" component={SavedVideos} />
        <Route exact path="/videos/:id" component={VideoItemDetails} />
        <Redirect component={NotFound} />
      </Switch>
    )
  }
}

export default App
