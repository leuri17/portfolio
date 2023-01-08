import { useState } from 'react'

export const useModal = () => {
  const [modalValues, setModalValues] = useState()

  const openModal = (title, message, type) => {
    setModalValues({ title, message, type })
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalValues()
    document.body.style.overflow = 'auto'
  }

  return { modalValues, openModal, closeModal }
}
