import { useState } from 'react'

export const useModal = () => {
  const [modalValues, setModalValues] = useState()

  const openModal = (title, message, type) => {
    setModalValues({ title, message, type })
  }

  const closeModal = () => {
    setModalValues()
  }

  return { modalValues, openModal, closeModal }
}
