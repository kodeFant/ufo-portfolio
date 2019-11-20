import React from "react"
import ModalState from "../../state/modal"
import { Modal } from "../../types/Modal"
import SocialMediaModal from "./SocialMediaModal"
import ContactModal from "./ContactModal"

export default function UFOModal() {
  const { modal } = ModalState.useContainer()
  switch (modal) {
    case Modal.NO_MODAL:
      return <></>
    case Modal.CONTACT_FORM:
      return <ContactModal />
    case Modal.SOCIAL_MEDIA:
      return <SocialMediaModal />
    default:
      return <></>
  }
}
