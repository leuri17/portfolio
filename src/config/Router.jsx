import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import Error from '../pages/Error'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import Skills from '../pages/Skills'
import Privacy from '../pages/Privacy'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'skills',
        element: <Skills />
      },
      {
        path: 'privacy',
        element: <Privacy />
      }
    ]
  }
])
