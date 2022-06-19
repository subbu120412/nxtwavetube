import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import {HiFire} from 'react-icons/hi'

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
import TrendingVideos from '../TrendingVideos'
import ContactUs from '../ContactUs'

class Trending extends Component {
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
            <HomeContainer data-testid="trending" isDarkTheme={isDarkTheme}>
              <Header isDarkTheme={isDarkTheme} updateTheme={updateTheme} />
              <BannerContainer>
                <SideNavbar>
                  <NavItems pathname={pathname} isDarkTheme={isDarkTheme} />
                  <ContactUs isDarkTheme={isDarkTheme} />
                </SideNavbar>
                <HomeItemsContainer>
                  <ActiveLogoContainer isDarkTheme={isDarkTheme}>
                    <HiFire color="#ff0b37" size="30" />
                    <ActiveTabHeading>Trending</ActiveTabHeading>
                  </ActiveLogoContainer>
                  <TrendingVideos isDarkTheme={isDarkTheme} />
                </HomeItemsContainer>
              </BannerContainer>
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Trending
