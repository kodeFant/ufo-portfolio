import React from "react"
import styled from "@emotion/styled"
const borderImg = require("../images/border.png")

export default function Modal() {
  return (
    <>
      <Backdrop>
        <ModalContainer>Innhold</ModalContainer>
      </Backdrop>
    </>
  )
}

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalContainer = styled.div`
  background-color: black;
  color: white;
  border: 20px solid #65cdbd;
  border-image: url(${borderImg}) 20;
  padding: 1rem;
`
