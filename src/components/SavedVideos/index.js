import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import {BiListPlus} from 'react-icons/bi'

import ThemeContext from '../../context/ThemeContext'
import {
  HomeContainer,
  BannerContainer,
  SideNavbar,
  HomeItemsContainer,
  ActiveLogoContainer,
  ActiveTabHeading,
  SavedVideosList,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailureDescription,
} from './styled'
import Header from '../Header'
import NavItems from '../NavItems'
import VideoItem from '../VideoItem'
import ContactUs from '../ContactUs'

class SavedVideos extends Component {
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
          const {isDarkTheme, updateTheme, savedVideosList} = value

          return (
            <HomeContainer data-testid="savedVideos" isDarkTheme={isDarkTheme}>
              <Header isDarkTheme={isDarkTheme} updateTheme={updateTheme} />
              <BannerContainer>
                <SideNavbar>
                  <NavItems pathname={pathname} isDarkTheme={isDarkTheme} />
                  <ContactUs isDarkTheme={isDarkTheme} />
                </SideNavbar>
                <HomeItemsContainer>
                  <ActiveLogoContainer isDarkTheme={isDarkTheme}>
                    <BiListPlus color="#ff0b37" size="30" />
                    <ActiveTabHeading>Saved Videos</ActiveTabHeading>
                  </ActiveLogoContainer>
                  {savedVideosList.length > 0 ? (
                    <SavedVideosList>
                      {savedVideosList.map(eachVideo => (
                        <VideoItem
                          key={eachVideo.id}
                          videoDetails={eachVideo}
                          isDarkTheme={isDarkTheme}
                        />
                      ))}
                    </SavedVideosList>
                  ) : (
                    <FailureContainer isDarkTheme={isDarkTheme}>
                      <FailureImg
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png  "
                        alt="no saved videos"
                      />
                      <FailureHeading>No saved videos found</FailureHeading>
                      <FailureDescription>
                        You can save your videos while watching them
                      </FailureDescription>
                    </FailureContainer>
                  )}
                </HomeItemsContainer>
              </BannerContainer>
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default SavedVideos
