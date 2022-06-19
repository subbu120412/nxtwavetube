import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoLink = styled(Link)`
  text-decoration: none;
  @media screen and (min-width: 768px) {
    width: 32%;
    margin-right: 8px;
  }
`

export const VideoListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`

export const VideoImage = styled.img`
  width: 100%;
`

export const ChannelImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  margin-top: 12px;

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
  }
`
export const VideoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  width: 85%;
`
export const VideoTitle = styled.p`
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#1e293b')};
  font-size: 18px;
  font-weight: 500;
  margin: 0px;
`
export const VideoDetailsText = styled.p`
  font-size: 16px;
  color: #7e858e;
  margin-top: 0px;
  margin-bottom: 0px;
`
export const Seperator = styled.p`
  color: #7e858e;
  font-size: 16px;
  margin-right: 5px;
  margin-left: 5px;
  margin-top: 0px;
  margin-bottom: 0px;
  align-self: center;
`
