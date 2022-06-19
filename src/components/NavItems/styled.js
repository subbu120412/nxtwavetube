import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavItemsList = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9 ')};
  justify-content: center;
  margin-top: 0px;
`
export const NavItem = styled.li`
  height: 40px;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
  background-color: ${props => {
    const {isDarkTheme, isActive} = props
    if (isDarkTheme) {
      return isActive ? '#606060' : '#181818'
    }
    return isActive ? '#cbd5e1' : '#f9f9f9'
  }};
`
export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;

  font-weight: ${props => (props.isActive ? 'bold' : '500')};
  margin: 0px;
`
export const NavIcon = styled.div`
  color: ${props => (props.isActive ? '#ff0b37' : '#909090')};
  margin-left: 16px;
  margin-right: 16px;
`
