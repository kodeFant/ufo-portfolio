import React from "react"
import styled from "@emotion/styled"
import ModalState from "../../state/modal"

interface IBackdrop {
  children: React.ReactNode
}

export default function Backdrop({ children }: IBackdrop) {
  const { closeModal } = ModalState.useContainer()
  return (
    <BackdropContainer
      onClick={() => {
        closeModal()
      }}
    >
      {children}
    </BackdropContainer>
  )
}

const BackdropContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
