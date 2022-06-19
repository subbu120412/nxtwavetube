import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomeVideosContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#f1f5f9')};
  padding: 12px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  @media screen and (min-width: 768px) {
    padding: 3%;
  }
`

export const LoaderContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  text-align: center;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
`
export const FailureImg = styled.img`
  height: 275px;
`

export const FailureHeading = styled.h1`
  font-size: 24px;
  font-weight: 500;
`
export const FailureDescription = styled.p`
  font-size: 16px;
  margin-top: 8px;
`
export const RetryButton = styled.button`
  color: #ffffff;
  border: none;
  background-color: #4f46e5;
  font-weight: 500;
  height: 35px;
  width: 85px;
  border-radius: 5px;
  margin-left: 12px;
  font-size: 16px;
  cursor: pointer;
`
export const VideosList = styled.ul`
  padding: 0px;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const VideoLink = styled(Link)`
  text-decoration: none;
  width: 48%;
  @media screen and (min-width: 768px) {
    width: 32%;
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
  font-weight: 500;
`
