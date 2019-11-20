import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { mq } from "./MediaQuery"
import { Link } from "gatsby"
const cursor = require("../images/cursor.png")

const defaultButton = css`
  & {
    display: block;
    background-color: #1c8064;
    padding: 1rem;
    color: #78ccbf;
    font-size: 1.5rem;
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

interface IButton {
  gridArea?: string
}

export const Button = styled.button<IButton>`
  ${defaultButton}
  ${({ gridArea }) => gridArea && `grid-area: ${gridArea}`};
  cursor: url(${cursor}) 0 0, auto;
`

export const ButtonLink = styled(Link)<IButton>`
  ${defaultButton}
  text-decoration: none;
  ${({ gridArea }) => gridArea && `grid-area: ${gridArea}`};
  cursor: url(${cursor}) 0 0, auto;
`
