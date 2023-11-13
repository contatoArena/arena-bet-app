import React from 'react'

interface RegisterModalProps {
  isOpen: boolean
  onClose: () => void
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  return (
    <div>
      {isOpen ? (
        <>
          <div>Conteúdo do Modal</div>
          <button onClick={onClose}>Fechar Modal</button>
        </>
      ) : null}
    </div>
  )
}

export default RegisterModal
