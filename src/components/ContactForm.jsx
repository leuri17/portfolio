import '../styles/ContactForm.css'
import FloatingLabelInput from './FloatingLabelInput'
import Modal from './Modal'
import { useNavigate } from 'react-router-dom'
import { useField } from '../hooks/useField'
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useModal } from '../hooks/useModal'

const ContactForm = () => {
  const navigate = useNavigate()

  const name = useField({ type: 'text' })
  const subject = useField({ type: 'text' })
  const email = useField({ type: 'email' })
  const message = useField({ type: 'area' })

  const { modalValues, openModal, closeModal } = useModal()

  const onModalClose = () => {
    closeModal()
    if (modalValues.type === 'success') {
      navigate('/')
    }
  }

  const firebaseConfig = {
    apiKey: 'AIzaSyC5u1Rb0L0szYgNjb1Mys_bAB7VaSABp6o',
    authDomain: 'portfolio-853f5.firebaseapp.com',
    projectId: 'portfolio-853f5',
    storageBucket: 'portfolio-853f5.appspot.com',
    messagingSenderId: '170227952982',
    appId: '1:170227952982:web:1b465ce50b8e4fb909faf7',
    measurementId: 'G-RP7KE96NSS'
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Initialize Firebase
    const app = initializeApp(firebaseConfig, 'Portfolio')

    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app)

    // Create a Google Provider instance
    const provider = new GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/gmail.send')
    provider.setCustomParameters({
      login_hint: email
    })

    // Pop-up for login and obtain the token
    signInWithPopup(auth, provider)
      .then((res) => {
        const token = res._tokenResponse.oauthAccessToken

        const mail = {
          raw: window
            .btoa(
              'To: leuri77@gmail.com\n' +
                `Subject: ${subject.value}\n\n` +
                `New message from ${name.value} (${email.value}):\n\n${message.value}`
            )
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
        }

        fetch('https://www.googleapis.com/gmail/v1/users/me/messages/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(mail)
        }).then((res) => {
          if (res.status === 200) {
            openModal(
              'Sent!',
              "The message have been sent successfully! I'll contact you as soon as possible.",
              'success'
            )
          } else if (res.status === 401) {
            openModal(
              'Error!',
              'There is no access to the google account, try to login again',
              'error'
            )
          } else {
            openModal(
              'Error!',
              'An error occured while trying to send the email. Try again later.',
              'error'
            )
          }
        })
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <h1>Contact</h1>
      <FloatingLabelInput id="nameInput" name="name" label="Name" required {...name} />
      <FloatingLabelInput id="emailInput" name="email" label="Email" required {...email} />
      <FloatingLabelInput id="subjectInput" name="subject" label="Subject" required {...subject} />
      <FloatingLabelInput id="messageInput" name="message" label="Message" required {...message} />
      {modalValues && <Modal {...modalValues} onClose={onModalClose} />}
      <div className="form-group buttons">
        <button type="submit">Send</button>
      </div>
    </form>
  )
}

export default ContactForm
