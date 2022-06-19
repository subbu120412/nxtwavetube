import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'

import ThemeContext from '../../context/ThemeContext'
import {
  HomeContainer,
  BannerContainer,
  SideNavbar,
  HomeItemsContainer,
  ActiveLogoContainer,
  ActiveTabHeading,
} from './styled'
import Header from '../Header'
import NavItems from '../NavItems'
import GamingVideos from '../GamingVideos'
import ContactUs from '../ContactUs'

class Gaming extends Component {
  render() {
    const token = Cookies.get('jwt_token')
    if (token === undefined) {
      return <Redirect to="/login" />
    }
    const {location} = this.props
    const {pathname} = location

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, updateTheme} = value

          return (
            <HomeContainer data-testid="gaming" isDarkTheme={isDarkTheme}>
              <Header isDarkTheme={isDarkTheme} updateTheme={updateTheme} />
              <BannerContainer>
                <SideNavbar>
                  <NavItems pathname={pathname} isDarkTheme={isDarkTheme} />
                  <ContactUs isDarkTheme={isDarkTheme} />
                </SideNavbar>
                <HomeItemsContainer>
                  <ActiveLogoContainer isDarkTheme={isDarkTheme}>
                    <SiYoutubegaming color="#ff0b37" size="30" />
                    <ActiveTabHeading>Gaming</ActiveTabHeading>
                  </ActiveLogoContainer>
                  <GamingVideos isDarkTheme={isDarkTheme} />
                </HomeItemsContainer>
              </BannerContainer>
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Gaming
