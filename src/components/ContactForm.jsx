/* eslint-disable no-undef */
import '../styles/ContactForm.css'
import FloatingLabelInput from './FloatingLabelInput'
import { useNavigate } from 'react-router-dom'
import Modal from './Modal'
import { useField } from '../hooks/useField'
import { useGapi } from '../hooks/useGapi'

const ContactForm = () => {
  const navigate = useNavigate()

  const name = useField({ type: 'text' })
  const subject = useField({ type: 'text' })
  const email = useField({ type: 'email' })
  const message = useField({ type: 'area' })

  const { sendMail, modalValues, closeModal } = useGapi()

  const onModalClose = () => {
    closeModal()
    if (modalValues.type === 'success') {
      navigate('/')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    sendMail(name.value, email.value, subject.value, message.value)
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <h1>Contact</h1>
      <FloatingLabelInput id="nameInput" name="name" label="Name" {...name} />
      <FloatingLabelInput id="emailInput" name="email" label="Email" {...email} />
      <FloatingLabelInput id="subjectInput" name="subject" label="Subject" {...subject} />
      <FloatingLabelInput id="messageInput" name="message" label="Message" {...message} />
      {modalValues && <Modal {...modalValues} onClose={onModalClose} />}
      <div className="form-group buttons">
        <button type="submit">Send</button>
      </div>
    </form>
  )
}

export default ContactForm
