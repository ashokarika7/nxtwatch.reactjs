import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import LightThemeContext from '../../context/LightThemeContext'

import {
  LoginFullContainer,
  LoginCardContainer,
  LoginImg,
  LoginInputContainer,
  Label,
  Input,
  CheckBoxInputContainer,
  CheckInput,
  CheckLabel,
  LoginButton,
  ErrorPara,
} from './styledComponents'

class Login extends Component {
  state = {username: '', password: '', errMsg: '', showPass: false}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickCheck = () => {
    this.setState(prevState => ({showPass: !prevState.showPass}))
  }

  onSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({errMsg: errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.onSuccess(data.jwt_token)
      this.onFailure('')
    } else {
      this.onFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, errMsg, showPass} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LightThemeContext.Consumer>
        {value => {
          const {lightTheme} = value
          const inputType = showPass ? 'text' : 'password'
          const loginImgUrl = lightTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginFullContainer lightTheme={lightTheme}>
              <LoginCardContainer
                onSubmit={this.onSubmitForm}
                lightTheme={lightTheme}
              >
                <LoginImg alt="website logo" src={loginImgUrl} />
                <LoginInputContainer>
                  <Label lightTheme={lightTheme} htmlFor="username">
                    USERNAME
                  </Label>
                  <Input
                    onChange={this.onChangeUsername}
                    value={username}
                    lightTheme={lightTheme}
                    id="username"
                    placeholder="Username"
                    type="search"
                  />
                </LoginInputContainer>
                <LoginInputContainer>
                  <Label lightTheme={lightTheme} htmlFor="password">
                    PASSWORD
                  </Label>
                  <Input
                    onChange={this.onChangePassword}
                    value={password}
                    lightTheme={lightTheme}
                    id="password"
                    placeholder="Password"
                    type={inputType}
                  />
                </LoginInputContainer>
                <CheckBoxInputContainer>
                  <CheckInput
                    onClick={this.onClickCheck}
                    id="checkbox"
                    type="checkbox"
                  />
                  <CheckLabel lightTheme={lightTheme} htmlFor="checkbox">
                    Show Password
                  </CheckLabel>
                </CheckBoxInputContainer>
                <LoginButton type="submit">Login</LoginButton>
                {errMsg.length !== 0 && <ErrorPara>{errMsg}</ErrorPara>}
              </LoginCardContainer>
            </LoginFullContainer>
          )
        }}
      </LightThemeContext.Consumer>
    )
  }
}

export default Login
