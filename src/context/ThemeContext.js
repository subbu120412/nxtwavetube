import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  updateTheme: () => {},
  savedVideosList: [],
  saveOrDeleteVideo: () => {},
})

export default ThemeContext
