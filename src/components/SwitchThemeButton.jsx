import { useContext } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { ThemeContext } from '../context/ThemeContext'

const SwitchThemeButton = () => {
  const { theme, dispatch } = useContext(ThemeContext)

  return (
    <button
      onClick={() => {
        dispatch({ type: 'THEME/switchTheme' })
      }}>
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  )
}

export default SwitchThemeButton
