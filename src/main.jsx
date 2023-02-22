import React from 'react'
import './styles/main.css'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from './context/ThemeContext'
import { RouterProvider } from 'react-router-dom'
import { router } from './config/Router'
import './config/i18n'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
