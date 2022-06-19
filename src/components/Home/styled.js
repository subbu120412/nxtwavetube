import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9 ')};
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
export const BannerImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 5%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media screen and (min-width: 768px) {
    background-position: 40% 0%;
    padding: 2%;
  }
`
export const BannerImage = styled.img`
  height: 35px;
  width: 155px;
`
export const BannerText = styled.p`
  font-size: 22px;
  width: 80%;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const GetButton = styled.button`
  border: 2px solid #383838;
  height: 40px;
  align-self: flex-start;
  font-weight: 500;
  color: #383838;
  font-size: 16px;
  background-color: transparent;
  margin-top: 16px;
  cursor: pointer;
`
export const CloseBannerButton = styled.button`
  border: none;
  background-color: transparent;
  align-self: flex-end;
  cursor: pointer;
`
