import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "./store"
import { incrementAttempts } from "./actions"
import useModal from "./useModal"
import "./AttemptsCounter.css"
import Modal from "./Modal"

const AttemptsCounter = () => {
  const dispatch = useDispatch()
  const attemptsCount = useSelector(
    (state: AppState) => state.attempts.attemptsCount
  )

  const { isModalOpen, openModal, closeModal, confirm, cancel } = useModal()

  const handleBuy = () => {
    openModal({
      onConfirm: () => {
        dispatch(incrementAttempts())
        console.log("Покупка подтверждена")
      },
      onCancel: () => {
        console.log("Операция отменена")
      },
    })
  }

  return (
    <div>
      <p>Количество попыток: {attemptsCount}</p>
      <button onClick={handleBuy}>Купить попытку</button>
      {isModalOpen && (
        <Modal onClose={closeModal} onConfirm={confirm} onCancel={cancel}>
          <h2>Подтвердите покупку</h2>
        </Modal>
      )}
    </div>
  )
}

export default AttemptsCounter
