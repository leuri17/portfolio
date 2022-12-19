import '../styles/ContactForm.css'
import FloatingLabelInput from './FloatingLabelInput'

const ContactForm = () => {
  console.log()
  return (
    <form
      id="contact-form"
      action={import.meta.env.VITE_CONTACT_FORM_ACTION}
      method="post"
      target="_blank">
      <h1>Contact</h1>
      <FloatingLabelInput id="nameInput" name="name" label="Name" />
      <FloatingLabelInput id="emailInput" name="email" type="email" label="Email" />
      <FloatingLabelInput id="subjectInput" name="subject" type="text" label="Name" />
      <FloatingLabelInput id="messageInput" name="message" type="area" label="Message" />
      <div className="form-group buttons">
        <button type="reset">Clear</button>
        <button type="submit">Send</button>
      </div>
    </form>
  )
}

export default ContactForm
