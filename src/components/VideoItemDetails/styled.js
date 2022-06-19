import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f ' : '#f9f9f9 ')};
  max-height: 100vh;
  display: flex;
  flex-direction: column;
`
export const BannerContainer = styled.div`
  display: flex;
  overflow: auto;
  height: 100vh;
`

export const SideNavbar = styled.nav`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 20%;
  }
`

export const HomeItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
  @media screen and (min-width: 768px) {
    min-width: 80%;
  }
`

export const VideoContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f ' : '#e2e8f0 ')};
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#1e293b')};
`

export const HomeVideoContainer = styled.div`
  width: 100vw;

  height: 40vh;
  @media screen and (min-width: 768px) {
    width: 100%;
    padding: 2%;
    height: 70vh;
  }
`

export const LoaderContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const VideosList = styled.ul`
  padding: 0px;
  display: flex;
  flex-direction: column;
  list-style-type: none;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`
export const VideoTextContainer = styled.div`
  display: flex;
  padding: 2%;
  flex-direction: column;
`

export const VideoTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 0px;
  margin-top: 12px;
`
export const VideoPublishedContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const VideoDetailsText = styled.p`
  font-size: 16px;
  color: #7e858e;
  margin-top: 0px;
  margin-bottom: 0px;
  font-weight: 500;
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
export const VideoButtonsContainer = styled.div`
  display: flex;
  align-items: center;

  margin-top: 16px;
`

export const VideoButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
`

export const VideoButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
`
export const Hr = styled.hr`
  border: 1px solid ${props => (props.isDarkTheme ? '#e2e8f0' : '#606060')};
  width: 100%;
  margin-top: 20px;
`

export const ChannelInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`
export const ChannelImage = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 30px;
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`
export const ChannelName = styled.p`
  margin-top: 0px;
  font-weight: 500;
  margin-bottom: 10px;
`
export const ChannelSubscriberCount = styled.p`
  margin: 0px;
`
export const VideoDescription = styled.p`
  font-size: 16px;
  font-weight: 500;
`
