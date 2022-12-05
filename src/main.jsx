import './styles/main.css'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <Layout />
  </ThemeProvider>
)
