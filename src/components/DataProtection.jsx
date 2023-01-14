import '../styles/DataProtection.css'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowDropdown } from 'react-icons/io'

const DataProtection = () => {
  const dataProtection = useRef()

  const handleClick = (e) => {
    e.preventDefault()
    const maxHeight = dataProtection.current.style.maxHeight

    if (!maxHeight) {
      dataProtection.current.style.maxHeight = maxHeight === '' ? '1250px' : ''
      document.getElementById('dropdown-arrow').style.transform =
        'translateX(-5px) translateY(3px) rotate(-.5turn)'
    } else {
      dataProtection.current.style.maxHeight = ''
      document.getElementById('dropdown-arrow').style.transform = ''
    }
  }

  return (
    <div id="data-protection">
      <p>
        Before submitting your inquiry, please look at the basic information on data protection{' '}
        <Link onClick={handleClick}>
          here <IoMdArrowDropdown id="dropdown-arrow" />
        </Link>
      </p>
      <div id="data-protection-info" ref={dataProtection}>
        <p>
          <Link to="/">leurialonso.dev</Link> informs you that the personal data you provide by
          filling in this form will be processed by Leuri Alonso Saturria as the party responsible
          for this website.
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li>
            <p>
              <span className="bold">
                Purpose of the collection and processing of personal data:&nbsp;
              </span>
              to have information about you in order to contact you back.
            </p>
          </li>
          <li>
            <p>
              <span className="bold">Legitimation:</span> Consent of the interested party.
            </p>
          </li>
          <li>
            <p>
              <span className="bold">Recipients:</span> Leuri Alonso Saturria.
            </p>
          </li>
          <li>
            <p>
              <span className="bold">Rights:</span> You may exercise your rights of access,
              rectification, limitation and deletion of data at leuri77@gmail.com as well as the
              right to lodge a complaint with a supervisory authority.
            </p>
            <p>
              Failure to enter the personal data that appear on the form as compulsory may result in
              your request not being dealt with.
            </p>
          </li>
          <li>
            <p>
              <span className="bold">Additional information:</span> You can consult additional and
              detailed information on Data Protection on my website:&nbsp;
              <Link to="/">leurialonso.dev</Link>, as well as consult my&nbsp;
              <Link to="/privacy">privacy policy</Link>.
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DataProtection
