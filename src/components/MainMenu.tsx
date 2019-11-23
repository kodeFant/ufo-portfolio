import React, { useRef } from "react"
import styled from "@emotion/styled"
import { mq } from "../elements/MediaQuery"
import { navigate } from "gatsby"

import ModalState from "../state/modal"
import { Modal } from "../types/Modal"
import { Button, ButtonLink } from "../elements/Button"

const clickSound = require("../sounds/click.mp3")

export default function MainMenu() {
  const { openModal } = ModalState.useContainer()
  const audio = useRef<HTMLAudioElement>(null)
  const playSound = () => {
    if (audio.current) {
      audio.current.volume = 0.1
      audio.current.play()
    }
  }
  return (
    <MainMenuContainer>
      <Selections>
        <ButtonLink gridarea="one" to="/portfolio">
          Portefølje
        </ButtonLink>
        <ButtonLink gridarea="two" to="/om">
          Om meg
        </ButtonLink>
        <ButtonLink gridarea="three" to="/faq">
          Spørsmål
        </ButtonLink>
        <Button
          gridarea="four"
          onClick={() => {
            openModal(Modal.SOCIAL_MEDIA)
            playSound()
          }}
        >
          Sosiale medier
        </Button>
        <Button
          gridarea="five"
          onClick={() => {
            openModal(Modal.CONTACT_FORM)
            playSound()
          }}
        >
          Kontakt
        </Button>
      </Selections>
      <audio ref={audio} id="audio">
        <source src={clickSound} type="audio/mpeg" />
      </audio>
    </MainMenuContainer>
  )
}

const Selections = styled.div`
  display: grid;
  width: 100%;
  max-width: 900px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "one    two"
    "three  four"
    "five   five";
  grid-gap: 2rem;
  ${mq[0]} {
    grid-gap: 3rem;
  }
`

const MainMenuContainer = styled.div`
  padding: 1rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`
