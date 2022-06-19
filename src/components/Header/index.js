import {withRouter, Link} from 'react-router-dom'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import {
  Navbar,
  NavLogo,
  NavButtonsContainerSmallDevice,
  NavButton,
  NavButtonsContainerLargeDevice,
  LogoutButton,
  ProfileImage,
  NavItemsPopupContainer,
  LogoutPopupContainer,
  ConformButton,
  CancelButton,
  LogoutButtonsContainer,
  LogoutPopupText,
} from './styled'

import NavItems from '../NavItems'

const Header = props => {
  const {isDarkTheme, updateTheme, location} = props

  const {pathname} = location

  const logoUrl = isDarkTheme
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

  const changeTheme = () => {
    updateTheme()
  }

  const navItems = () => (
    <Popup
      trigger={
        <NavButton isDarkTheme={isDarkTheme} type="button">
          <GiHamburgerMenu size="27" />
        </NavButton>
      }
      modal
    >
      {close => (
        <NavItemsPopupContainer isDarkTheme={isDarkTheme}>
          <NavButton isDarkTheme={isDarkTheme} onClick={close}>
            <AiOutlineClose size="22" />
          </NavButton>
          <NavItems isDarkTheme={isDarkTheme} pathname={pathname} />
        </NavItemsPopupContainer>
      )}
    </Popup>
  )

  const logout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  const logoutPopup = close => (
    <LogoutPopupContainer isDarkTheme={isDarkTheme}>
      <LogoutPopupText isDarkTheme={isDarkTheme}>
        Are you sure, you want to logout?
      </LogoutPopupText>
      <LogoutButtonsContainer>
        <CancelButton isDarkTheme={isDarkTheme} onClick={close}>
          Cancel
        </CancelButton>
        <ConformButton onClick={logout}>Confirm</ConformButton>
      </LogoutButtonsContainer>
    </LogoutPopupContainer>
  )

  return (
    <Navbar>
      <Link to="/">
        <NavLogo src={logoUrl} alt="website logo" />
      </Link>
      <NavButtonsContainerSmallDevice>
        <NavButton data-testid="theme" onClick={changeTheme} type="button">
          {isDarkTheme ? (
            <FiSun size="27" color="#ffffff" />
          ) : (
            <FaMoon size="27" />
          )}
        </NavButton>
        {navItems()}

        <Popup
          trigger={
            <NavButton isDarkTheme={isDarkTheme} type="button">
              <FiLogOut size="27" />
            </NavButton>
          }
          modal
        >
          {close => logoutPopup(close)}
        </Popup>
      </NavButtonsContainerSmallDevice>
      <NavButtonsContainerLargeDevice>
        <NavButton data-testid="theme" onClick={changeTheme} type="button">
          {isDarkTheme ? (
            <FiSun size="33" color="#ffffff" />
          ) : (
            <FaMoon size="33" />
          )}
        </NavButton>
        <NavButton isDarkTheme={isDarkTheme} type="button">
          <ProfileImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />
        </NavButton>
        <Popup
          trigger={
            <LogoutButton isDarkTheme={isDarkTheme} type="button">
              Logout
            </LogoutButton>
          }
          modal
        >
          {close => logoutPopup(close)}
        </Popup>
      </NavButtonsContainerLargeDevice>
    </Navbar>
  )
}

export default withRouter(Header)
