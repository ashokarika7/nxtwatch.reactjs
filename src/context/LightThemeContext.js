import React from 'react'

const LightThemeContext = React.createContext({
  lightTheme: false,
  toggleTheme: () => {},
})

export default LightThemeContext
