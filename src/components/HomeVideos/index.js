import {Component} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {
  HomeVideosContainer,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  LoaderContainer,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailureDescription,
  RetryButton,
  VideosList,
} from './styled'
import VideoItem from '../VideoItem'
import FailureView from '../FailureView'

const apiStatusComponent = {
  initial: 'INITIAL',
  pending: 'PENDING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class HomeVideos extends Component {
  state = {
    searchInput: '',
    videosList: [],
    apiStatus: apiStatusComponent.initial,
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({apiStatus: apiStatusComponent.pending})
    const {searchInput} = this.state
    const token = Cookies.get('jwt_token')
    const videoApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(videoApiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
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

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  retry = () => {
    this.getVideosList()
  }

  onSearch = () => {
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
          <VideoItem
            videoDetails={eachVideo}
            key={eachVideo.id}
            isDarkTheme={isDarkTheme}
          />
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
    const {searchInput} = this.state
    return (
      <HomeVideosContainer isDarkTheme={isDarkTheme}>
        <SearchInputContainer>
          <SearchInput
            onChange={this.onSearchInput}
            value={searchInput}
            isDarkTheme={isDarkTheme}
            type="search"
            placeholder="Search"
          />
          <SearchButton
            data-testid="searchButton"
            isDarkTheme={isDarkTheme}
            type="button"
            onClick={this.onSearch}
          >
            <AiOutlineSearch />
          </SearchButton>
        </SearchInputContainer>
        {this.renderAllVideos()}
      </HomeVideosContainer>
    )
  }
}

export default HomeVideos
