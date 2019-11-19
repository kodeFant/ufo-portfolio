import { createContainer } from "unstated-next"
import { Modal } from "../types/Modal"
import { useImmer } from "use-immer"

const ModalState = createContainer(useModal)

function useModal(initialState = Modal.NO_MODAL) {
  const [modal, setModal] = useImmer(initialState)
  const openModal = (modal: Modal) => {
    setModal(() => {
      return modal
    })
  }

  const closeModal = () => {
    setModal(() => {
      return Modal.NO_MODAL
    })
  }

  return { modal, openModal, closeModal }
}

export default ModalState
