import {
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailureDescription,
  HomeContainer,
} from './styled'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, updateTheme} = value
      const imgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png '
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <HomeContainer isDarkTheme={isDarkTheme}>
          <Header isDarkTheme={isDarkTheme} updateTheme={updateTheme} />
          <FailureContainer isDarkTheme={isDarkTheme}>
            <FailureImg src={imgUrl} alt="not found" />
            <FailureHeading>Page Not Found</FailureHeading>
            <FailureDescription>
              we are sorry, the page you requested could not be found.
            </FailureDescription>
          </FailureContainer>
        </HomeContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
