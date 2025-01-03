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
import ProtectedRoute from './components/ProtectedRoute'

import LightThemeContext from './context/LightThemeContext'

// Replace your code here
class App extends Component {
  state = {lightTheme: false}

  toggleTheme = () => {
    this.setState(prevState => ({lightTheme: !prevState.lightTheme}))
  }

  render() {
    const {lightTheme} = this.state
    return (
      <LightThemeContext.Provider
        value={{
          lightTheme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Redirect component={NotFound} />
        </Switch>
      </LightThemeContext.Provider>
    )
  }
}

export default App
