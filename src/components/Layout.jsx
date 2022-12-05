import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

/** Future Layout component for react-router.
 * Now is for testing the theme and create the firsts
 * components
 */
const Layout = () => {
  const { theme, dispatch } = useContext(ThemeContext)

  return (
    <div>
      <button onClick={() => { dispatch({ type: 'THEME/switchTheme' }) }}>Switch to {theme === 'dark' ? 'light' : 'dark'}</button>
    </div>
  )
}

export default Layout
