const Modal = ({
  onClose,
  onConfirm,
  onCancel,
  children,
}: {
  onClose: () => void
  onConfirm: () => void
  onCancel: () => void
  children: React.ReactNode
}) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-window">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
        <div className="modal-actions">
          <button className="modal-confirm" onClick={onConfirm}>
            Купить
          </button>
          <br />
          <button className="modal-cancel" onClick={onCancel}>
            Отменить операцию
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
