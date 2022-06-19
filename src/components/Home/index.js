import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import {AiOutlineClose} from 'react-icons/ai'

import ThemeContext from '../../context/ThemeContext'
import {
  HomeContainer,
  BannerContainer,
  SideNavbar,
  HomeItemsContainer,
  BannerImageContainer,
  BannerImage,
  BannerText,
  GetButton,
  CloseBannerButton,
} from './styled'
import Header from '../Header'
import NavItems from '../NavItems'
import HomeVideos from '../HomeVideos'
import ContactUs from '../ContactUs'

class Home extends Component {
  state = {isBannerActive: true}

  onShowBanner = () => {
    this.setState({isBannerActive: false})
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token === undefined) {
      return <Redirect to="/login" />
    }
    const {location} = this.props
    const {pathname} = location
    const {isBannerActive} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, updateTheme} = value

          return (
            <HomeContainer data-testid="home" isDarkTheme={isDarkTheme}>
              <Header isDarkTheme={isDarkTheme} updateTheme={updateTheme} />
              <BannerContainer>
                <SideNavbar>
                  <NavItems pathname={pathname} isDarkTheme={isDarkTheme} />
                  <ContactUs isDarkTheme={isDarkTheme} />
                </SideNavbar>
                <HomeItemsContainer>
                  {isBannerActive && (
                    <BannerImageContainer data-testid="banner">
                      <CloseBannerButton
                        onClick={this.onShowBanner}
                        type="button"
                        data-testid="close"
                      >
                        <AiOutlineClose size="24" />
                      </CloseBannerButton>
                      <BannerImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerText>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerText>
                      <GetButton type="button">GET IT NOW</GetButton>
                    </BannerImageContainer>
                  )}
                  <HomeVideos isDarkTheme={isDarkTheme} />
                </HomeItemsContainer>
              </BannerContainer>
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Home
