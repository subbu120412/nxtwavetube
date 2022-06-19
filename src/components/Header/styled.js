import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  padding: 16px;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    padding: 1.5%;
  }
`

export const NavLogo = styled.img`
  height: 27px;
  @media screen and (min-width: 768px) {
    height: 35px;
  }
`

export const NavButtonsContainerSmallDevice = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => (props.isDarkTheme ? '#ffffff' : 'null')};
  margin-left: 8px;
  outline: none;
  cursor: pointer;
`
export const NavButtonsContainerLargeDevice = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`
export const LogoutButton = styled.button`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#4f46e5')};
  border: solid 2px ${props => (props.isDarkTheme ? '#ffffff' : '#4f46e5')};
  font-weight: 500;
  background-color: transparent;
  height: 35px;
  width: 85px;
  border-radius: 5px;
  margin-left: 12px;
  font-size: 16px;
  cursor: pointer;
`
export const ProfileImage = styled.img`
  height: 35px;
  margin-left: 12px;
`

export const NavItemsPopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9 ')};
  min-height: 100vh;
  width: 100vw;
  justify-content: center;
`

export const LogoutPopupContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff ')};
  height: 175px;
  width: 275px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
`

export const ConformButton = styled.button`
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
export const CancelButton = styled.button`
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#7e858e')};
  border: solid 2px ${props => (props.isDarkTheme ? '#e2e8f0' : '#7e858e')};
  font-weight: 500;
  background-color: transparent;
  height: 35px;
  width: 85px;
  border-radius: 5px;
  margin-left: 12px;
  font-size: 16px;
  cursor: pointer;
`
export const LogoutButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const LogoutPopupText = styled.p`
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#7e858e')};
  font-size: 16px;
`
