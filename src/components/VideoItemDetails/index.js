import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

import ThemeContext from '../../context/ThemeContext'
import {
  HomeContainer,
  BannerContainer,
  SideNavbar,
  HomeItemsContainer,
  HomeVideoContainer,
  VideoContainer,
  LoaderContainer,
  VideoTitle,
  VideoDetailsText,
  Seperator,
  VideoTextContainer,
  VideoPublishedContainer,
  VideoButton,
  VideoButtonsContainer,
  VideoButtonContainer,
  Hr,
  ChannelInfoContainer,
  ChannelDetailsContainer,
  ChannelName,
  ChannelSubscriberCount,
  VideoDescription,
} from './styled'
import Header from '../Header'
import NavItems from '../NavItems'
import FailureView from '../FailureView'
import ContactUs from '../ContactUs'
import {ChannelImage} from '../VideoItem/styled'

const apiStatusComponent = {
  initial: 'INITIAL',
  pending: 'PENDING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusComponent.initial,
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({apiStatus: apiStatusComponent.pending})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const token = Cookies.get('jwt_token')
    const videoApiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(videoApiUrl, options)
    if (response.ok === true) {
      const data = await response.json()

      const updatedData = {
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        viewCount: data.video_details.view_count,
        description: data.video_details.description,
        videoUrl: data.video_details.video_url,
      }
      this.setState({
        videoDetails: updatedData,
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

  onLiked = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisLiked: false,
    }))
  }

  onDisLiked = () => {
    this.setState(prevState => ({
      isDisLiked: !prevState.isDisLiked,
      isLiked: false,
    }))
  }

  onSaved = () => {
    const {videoDetails} = this.state
    this.saveOrDeleteVideo(videoDetails)
  }

  getSavedStatus = () => {
    const {videoDetails} = this.state
    const savedItem = this.savedVideosList.find(
      eachVideo => eachVideo.id === videoDetails.id,
    )
    if (savedItem === undefined) {
      return false
    }
    return true
  }

  renderVideoDetails = isDarkTheme => {
    const {videoDetails, isLiked, isDisLiked} = this.state
    const {
      channel,
      publishedAt,
      title,
      viewCount,
      videoUrl,
      description,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel
    const savedStatus = this.getSavedStatus()
    const saveButtonText = savedStatus ? 'Saved' : 'Save'

    return (
      <VideoContainer isDarkTheme={isDarkTheme}>
        <HomeVideoContainer>
          <ReactPlayer height="100%" width="100%" controls url={videoUrl} />{' '}
        </HomeVideoContainer>
        <VideoTextContainer>
          <VideoTitle>{title}</VideoTitle>
          <VideoPublishedContainer>
            <VideoPublishedContainer>
              <VideoDetailsText>{viewCount} views</VideoDetailsText>
              <Seperator>|</Seperator>
              <VideoDetailsText>{publishedAt}</VideoDetailsText>
            </VideoPublishedContainer>
            <VideoButtonsContainer>
              <VideoButtonContainer isActive={isLiked}>
                <BiLike size="24" />
                <VideoButton
                  onClick={this.onLiked}
                  isActive={isLiked}
                  type="button"
                >
                  Like
                </VideoButton>
              </VideoButtonContainer>
              <VideoButtonContainer isActive={isDisLiked}>
                <BiDislike size="24" />
                <VideoButton
                  onClick={this.onDisLiked}
                  isActive={isDisLiked}
                  type="button"
                >
                  Dislike
                </VideoButton>
              </VideoButtonContainer>
              <VideoButtonContainer isActive={savedStatus}>
                <BiListPlus size="24" />
                <VideoButton
                  onClick={this.onSaved}
                  isActive={savedStatus}
                  type="button"
                >
                  {saveButtonText}
                </VideoButton>
              </VideoButtonContainer>
            </VideoButtonsContainer>
          </VideoPublishedContainer>
          <Hr isDarkTheme={isDarkTheme} />
          <ChannelInfoContainer>
            <ChannelImage src={profileImageUrl} alt="channel logo" />
            <ChannelDetailsContainer>
              <ChannelName>{name}</ChannelName>
              <ChannelSubscriberCount>{subscriberCount}</ChannelSubscriberCount>
            </ChannelDetailsContainer>
          </ChannelInfoContainer>
          <VideoDescription>{description}</VideoDescription>
        </VideoTextContainer>
      </VideoContainer>
    )
  }

  renderVideo = isDarkTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusComponent.pending:
        return this.renderLoader()
      case apiStatusComponent.failure:
        return <FailureView isDarkTheme={isDarkTheme} retry={this.retry} />
      case apiStatusComponent.success:
        return this.renderVideoDetails(isDarkTheme)
      default:
        return null
    }
  }

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
          const {
            isDarkTheme,
            updateTheme,
            saveOrDeleteVideo,
            savedVideosList,
          } = value
          this.saveOrDeleteVideo = saveOrDeleteVideo
          this.savedVideosList = savedVideosList

          return (
            <HomeContainer
              data-testid="videoItemDetails"
              isDarkTheme={isDarkTheme}
            >
              <Header isDarkTheme={isDarkTheme} updateTheme={updateTheme} />
              <BannerContainer>
                <SideNavbar>
                  <NavItems pathname={pathname} isDarkTheme={isDarkTheme} />
                  <ContactUs isDarkTheme={isDarkTheme} />
                </SideNavbar>
                <HomeItemsContainer>
                  {this.renderVideo(isDarkTheme)}
                </HomeItemsContainer>
              </BannerContainer>
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default VideoItemDetails
