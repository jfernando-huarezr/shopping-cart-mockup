import { PropTypes } from 'prop-types'

const Modal = ({ children }) => {
  return (
    <dialog
      className={`z-1000 fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black/60`}
    >
      {children}
    </dialog>
  )
}

Modal.propTypes = {
  children: PropTypes.element,
}

export default Modal
