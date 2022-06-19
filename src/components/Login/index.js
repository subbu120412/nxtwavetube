import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import {
  LoginContainer,
  LoginForm,
  LoginImage,
  InputContainer,
  Input,
  Label,
  CheckBoxInput,
  CheckBoxLabel,
  ShowPasswordContainer,
  LoginButton,
  ErrorMsg,
} from './styled'

class Login extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    showPassword: false,
    loginError: false,
    errorMessage: '',
  }

  OnUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  OnPassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  submitForm = async event => {
    event.preventDefault()
    const {usernameInput, passwordInput} = this.state
    const userDetails = {username: usernameInput, password: passwordInput}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const loginUrl = 'https://apis.ccbp.in/login'
    const response = await fetch(loginUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({loginError: true, errorMessage: data.error_msg})
    }
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    const {
      usernameInput,
      passwordInput,
      showPassword,
      loginError,
      errorMessage,
    } = this.state
    const inputType = showPassword ? 'text' : 'password'
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const loginImage = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginContainer isDarkTheme={isDarkTheme}>
              <LoginForm isDarkTheme={isDarkTheme} onSubmit={this.submitForm}>
                <LoginImage src={loginImage} alt="website logo" />
                <InputContainer>
                  <Label isDarkTheme={isDarkTheme} htmlFor="username">
                    USERNAME
                  </Label>
                  <Input
                    isDarkTheme={isDarkTheme}
                    value={usernameInput}
                    onChange={this.OnUsername}
                    placeholder="Username"
                    id="username"
                    type="text"
                  />
                </InputContainer>
                <InputContainer>
                  <Label isDarkTheme={isDarkTheme} htmlFor="password">
                    PASSWORD
                  </Label>
                  <Input
                    isDarkTheme={isDarkTheme}
                    value={passwordInput}
                    onChange={this.OnPassword}
                    placeholder="Password"
                    id="password"
                    type={inputType}
                  />
                </InputContainer>
                <ShowPasswordContainer>
                  <CheckBoxInput
                    onChange={this.onShowPassword}
                    id="show-password"
                    type="checkbox"
                  />
                  <CheckBoxLabel
                    isDarkTheme={isDarkTheme}
                    htmlFor="show-password"
                  >
                    Show Password
                  </CheckBoxLabel>
                </ShowPasswordContainer>
                <LoginButton type="submit">Login</LoginButton>
                {loginError && <ErrorMsg>*{errorMessage}</ErrorMsg>}
              </LoginForm>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
