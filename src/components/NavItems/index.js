import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {AiFillHome} from 'react-icons/ai'

import {NavItemsList, NavItem, NavLink, NavIcon} from './styled'

const NavItems = props => {
  const {isDarkTheme, pathname} = props

  return (
    <NavItemsList isDarkTheme={isDarkTheme}>
      <NavItem isDarkTheme={isDarkTheme} isActive={pathname === '/'}>
        <NavIcon isActive={pathname === '/'}>
          <AiFillHome size="22" />
        </NavIcon>
        <NavLink
          style={{
            color: isDarkTheme ? 'white' : '#475569',
            fontWeight: pathname === '/' ? 'bold' : '500',
          }}
          to="/"
        >
          Home
        </NavLink>
      </NavItem>
      <NavItem isDarkTheme={isDarkTheme} isActive={pathname === '/trending'}>
        <NavIcon isActive={pathname === '/trending'}>
          <HiFire size="22" />
        </NavIcon>
        <NavLink
          style={{
            color: isDarkTheme ? 'white' : '#475569',
            fontWeight: pathname === '/trending' ? 'bold' : '500',
          }}
          to="/trending"
        >
          Trending
        </NavLink>
      </NavItem>
      <NavItem isDarkTheme={isDarkTheme} isActive={pathname === '/gaming'}>
        <NavIcon isActive={pathname === '/gaming'}>
          <SiYoutubegaming size="22" />
        </NavIcon>
        <NavLink
          style={{
            color: isDarkTheme ? 'white' : '#475569',
            fontWeight: pathname === '/gaming' ? 'bold' : '500',
          }}
          to="/gaming"
        >
          Gaming
        </NavLink>
      </NavItem>
      <NavItem
        isDarkTheme={isDarkTheme}
        isActive={pathname === '/saved-videos'}
      >
        <NavIcon isActive={pathname === '/saved-videos'}>
          <BiListPlus size="27" />
        </NavIcon>
        <NavLink
          style={{
            color: isDarkTheme ? 'white' : '#475569',
            fontWeight: pathname === '/saved-videos' ? 'bold' : '500',
          }}
          to="/saved-videos"
        >
          Saved videos
        </NavLink>
      </NavItem>
    </NavItemsList>
  )
}

export default NavItems
