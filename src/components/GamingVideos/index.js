import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {
  HomeVideosContainer,
  LoaderContainer,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailureDescription,
  RetryButton,
  VideosList,
  VideoImage,
  VideoListItem,
  VideoLink,
  VideoDetailsContainer,
  VideoTextContainer,
  VideoTitle,
  VideoDetailsText,
} from './styled'

import FailureView from '../FailureView'

const apiStatusComponent = {
  initial: 'INITIAL',
  pending: 'PENDING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class GamingVideos extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusComponent.initial,
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({apiStatus: apiStatusComponent.pending})

    const token = Cookies.get('jwt_token')
    const videoApiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(videoApiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data.videos)
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusComponent.success,
      })
    } else {
      this.setState({apiStatus: apiStatusComponent.failure})
    }
  }

  retry = () => {
    this.getVideosList()
  }

  renderLoader = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideos = () => {
    const {videosList} = this.state
    const {isDarkTheme} = this.props
    const showVideos = videosList.length > 0

    return showVideos ? (
      <VideosList>
        {videosList.map(eachVideo => (
          <VideoLink key={eachVideo.id} to={`/videos/${eachVideo.id}`}>
            <VideoListItem>
              <VideoImage src={eachVideo.thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer>
                <VideoTextContainer>
                  <VideoTitle isDarkTheme={isDarkTheme}>
                    {eachVideo.title}
                  </VideoTitle>
                  <VideoDetailsContainer>
                    <VideoDetailsText>
                      {eachVideo.viewCount} Watching Worldwide
                    </VideoDetailsText>
                  </VideoDetailsContainer>
                </VideoTextContainer>
              </VideoDetailsContainer>
            </VideoListItem>
          </VideoLink>
        ))}
      </VideosList>
    ) : (
      <FailureContainer isDarkTheme={isDarkTheme}>
        <FailureImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
          alt="no videos"
        />
        <FailureHeading>No Search results found</FailureHeading>
        <FailureDescription>
          Try different key words or remove search filter
        </FailureDescription>
        <RetryButton onClick={this.retry} type="button">
          Retry
        </RetryButton>
      </FailureContainer>
    )
  }

  renderAllVideos = () => {
    const {apiStatus} = this.state
    const {isDarkTheme} = this.props
    switch (apiStatus) {
      case apiStatusComponent.pending:
        return this.renderLoader()
      case apiStatusComponent.failure:
        return <FailureView isDarkTheme={isDarkTheme} retry={this.retry} />
      case apiStatusComponent.success:
        return this.renderVideos()
      default:
        return null
    }
  }

  render() {
    const {isDarkTheme} = this.props

    return (
      <HomeVideosContainer isDarkTheme={isDarkTheme}>
        {this.renderAllVideos()}
      </HomeVideosContainer>
    )
  }
}

export default GamingVideos
