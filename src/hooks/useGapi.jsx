/* eslint-disable no-undef */
import axios from 'axios'
import { useModal } from '../hooks/useModal'

export const useGapi = () => {
  const { modalValues, openModal, closeModal } = useModal()

  const sendMail = (name, email, subject, message) => {
    const mail = {
      raw: window
        .btoa(
          'To: leuri77@gmail.com\n' +
            `Subject: ${subject}\n\n` +
            `New message from ${name} (${email}):\n\n${message}`
        )
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
    }

    tokenClient.callback = async (resp) => {
      axios
        .post('https://www.googleapis.com/gmail/v1/users/me/messages/send', mail, {
          headers: {
            Authorization: `Bearer ${resp.access_token}`
          }
        })
        .then((res) => {
          openModal(
            'Sent!',
            "The message have been sent successfully! I'll contact you as soon as possible.",
            'success'
          )
        })
        .catch(({ response }) => {
          if (response.data.error.code === 401) {
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
    }

    if (gapi.client.getToken() === null) {
      // Prompt the user to select a Google Account and ask for consent to share their data
      // when establishing a new session.
      tokenClient.requestAccessToken({ prompt: 'consent' })
    } else {
      // Skip display of account chooser and consent dialog for an existing session.
      tokenClient.requestAccessToken({ prompt: '' })
    }
  }

  return { sendMail, modalValues, closeModal }
}
