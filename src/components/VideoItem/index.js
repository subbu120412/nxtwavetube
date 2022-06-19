// import {formatDistanceToNow} from 'date-fns'
import {
  VideoImage,
  ChannelImage,
  VideoListItem,
  VideoLink,
  VideoDetailsContainer,
  VideoTextContainer,
  VideoTitle,
  VideoDetailsText,
  Seperator,
} from './styled'

const VideoItem = props => {
  const {videoDetails, isDarkTheme} = props

  const {
    id,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    channel,
  } = videoDetails
  const {name, profileImageUrl} = channel
  //   const videoPublishedAt = formatDistanceToNow(
  //     new Date(publishedAt),
  //     {
  //       addSuffix: true,
  //     },
  //     {addPrefix: false},
  //   )
  return (
    <VideoLink to={`/videos/${id}`}>
      <VideoListItem>
        <VideoImage src={thumbnailUrl} alt="video thumbnail" />
        <VideoDetailsContainer>
          <ChannelImage src={profileImageUrl} alt="channel logo" />
          <VideoTextContainer>
            <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
            <VideoDetailsContainer>
              <VideoDetailsText>{name}</VideoDetailsText>
              <Seperator>|</Seperator>
              <VideoDetailsText>{viewCount}</VideoDetailsText>
              <Seperator>|</Seperator>
              <VideoDetailsText>{publishedAt}</VideoDetailsText>
            </VideoDetailsContainer>
          </VideoTextContainer>
        </VideoDetailsContainer>
      </VideoListItem>
    </VideoLink>
  )
}

export default VideoItem
