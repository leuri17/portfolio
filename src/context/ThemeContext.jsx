import { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const initialState = 'dark'

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'THEME/switchTheme':
      document.getElementById('root').dataset.theme = state === 'dark' ? 'light' : 'dark'

      return document.getElementById('root').dataset.theme
  }
}

const ThemeProvider = (props) => {
  const [theme, dispatch] = useReducer(themeReducer, initialState)

  return <ThemeContext.Provider value={{ theme, dispatch }}>{props.children}</ThemeContext.Provider>
}

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export { ThemeContext, ThemeProvider }
