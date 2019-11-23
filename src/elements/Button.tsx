import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { mq } from "./MediaQuery"
import { Link } from "gatsby"
import {
  darkestGreen,
  darkerGreen,
  lighterGreen,
  lightestGreen,
} from "../utilities/Colors"
const cursor = require("../images/cursor.png")

const defaultButton = `
    display: block;
    background-color: ${darkerGreen};
    padding: 1rem;
    color: ${lightestGreen};
    font-size: 1.5rem;
    outline: outset 2px ${lighterGreen};
    border: outset 2px ${lighterGreen};
    text-shadow: 2px 2px 0px ${darkestGreen}, -2px -2px 0px ${darkestGreen},
      -2px 2px 0px ${darkestGreen}, 2px -2px 0px ${darkestGreen};

    ${mq[0]} {
      padding: 1.5rem;
    }

    &:active {
      outline: 2px inset ${lighterGreen};
      border: 2px inset ${lighterGreen};
      color: ${darkestGreen};
      text-shadow: 2px 2px 0px ${lightestGreen}, -2px -2px 0px ${lightestGreen},
        -2px 2px 0px ${lightestGreen}, 2px -2px 0px ${lightestGreen};
    }
`

interface IButton {
  gridarea?: string
}

export const Button = styled.button<IButton>`
  ${defaultButton}
  ${({ gridarea }) => gridarea && `grid-area: ${gridarea}`};
  cursor: url(${cursor}) 0 0, auto;
`

export const ButtonLink = styled(Link)<IButton>`
  ${defaultButton}
  text-decoration: none;
  ${({ gridarea }) => gridarea && `grid-area: ${gridarea}`};
  cursor: url(${cursor}) 0 0, auto;
`
