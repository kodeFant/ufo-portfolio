import React, { useRef } from "react"
import styled from "@emotion/styled"
const clickSound = require("../sounds/click.mp3")
import { mq } from "../elements/MediaQueries"
import { Link, navigate } from "gatsby"
import { css } from "@emotion/core"

const cursor = require("../images/cursor.png")

export default function MainMenu() {
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
        <Button
          gridArea="one"
          onClick={() => {
            playSound()
            setTimeout(() => {
              navigate("portfolio")
            }, 300)
          }}
        >
          Portefølje
        </Button>
        <Button
          gridArea="two"
          onClick={() => {
            playSound()
            setTimeout(() => {
              navigate("om")
            }, 300)
          }}
        >
          Om meg
        </Button>
        <Button
          gridArea="three"
          onClick={() => {
            playSound()
            setTimeout(() => {
              navigate("faq")
            }, 300)
          }}
        >
          Spørsmål
        </Button>
        <Button gridArea="four" onClick={playSound}>
          Sosiale medier
        </Button>
        <Button gridArea="five" onClick={playSound}>
          Kontakt
        </Button>
      </Selections>
      <audio ref={audio} id="audio">
        <source src={clickSound} type="audio/mpeg" />
      </audio>
    </MainMenuContainer>
  )
}

interface IButton {
  gridArea: string
}

const defaultButton = css`
  & {
    display: block;
    background-color: #1c8064;
    padding: 1rem;
    color: #78ccbf;
    font-size: 1.3rem;
    outline: 2px outset #64ccbc;
    border: 2px outset #3ca490;
    text-shadow: 2px 2px 0px #003420, -2px -2px 0px #003420,
      -2px 2px 0px #003420, 2px -2px 0px #003420;

    ${mq[0]} {
      padding: 1.5rem;
    }

    &:active {
      outline: 2px inset #64ccbc;
      border: 2px inset #3ca490;
      color: #003420;
      text-shadow: 2px 2px 0px #78ccbf, -2px -2px 0px #78ccbf,
        -2px 2px 0px #78ccbf, 2px -2px 0px #78ccbf;
    }
  }
`

const Button = styled.button<IButton>`
${defaultButton}
  grid-area: ${({ gridArea }) => gridArea};
  cursor: url(${cursor}) 0 0, auto;
`

export const ButtonLink = styled(Link)<IButton>`
  ${defaultButton}
  text-decoration: none;
  grid-area: ${({ gridArea }) => gridArea};
`

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
