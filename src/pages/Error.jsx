import '../styles/ErrorPage.css'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const nav = useNavigate()

  return (
    <div id="error-page-container">
      <div id="error-page-card" data-theme="light">
        <h1>Oops, something is missing</h1>
        <p>Sorry, the page you are looking for cannot be found.</p>
        <div>
          <button onClick={() => { nav(-1) }}>Go back</button>
        </div>
      </div>
    </div>
  )
}

export default Error
