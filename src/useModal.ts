import { useState } from "react"

type ModalOptions = {
  onConfirm?: () => void
  onCancel?: () => void
}

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [options, setOptions] = useState<ModalOptions>({})

  const openModal = (modalOptions: ModalOptions = {}) => {
    setOptions(modalOptions)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setOptions({})
  }

  const confirm = () => {
    options.onConfirm?.()
    closeModal()
  }

  const cancel = () => {
    options.onCancel?.()
    closeModal()
  }

  return {
    isModalOpen,
    openModal,
    closeModal,
    confirm,
    cancel,
  }
}

export default useModal
