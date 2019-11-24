import React from "react"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import emotionNormalize from "emotion-normalize"
import Providers from "../state/Providers"
import Img, { FluidObject } from "gatsby-image"
import { mq } from "../elements/MediaQuery"
const borderImg = require("../images/border.png")
const cursor = require("../images/cursor.png")

interface ILayout {
  children: React.ReactNode
  backgroundImg?: FluidObject | FluidObject[]
  customBorder?: string
  customBorderSize?: number
  radial?: boolean
  radialColors?: { dark: string; light: string }
  shadow?: boolean
}

export default function Layout({
  children,
  backgroundImg,
  customBorder,
  customBorderSize,
  radial,
  radialColors,
  shadow = false,
}: ILayout) {
  return (
    <Providers>
      <LayoutContainer
        customBorder={customBorder}
        customBorderSize={customBorderSize}
        radial={radial}
        radialColors={radialColors}
      >
        {backgroundImg && (
          <Img
            fluid={backgroundImg}
            css={css`
              & {
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                background-color: black;
                object-fit: cover;
              }
            `}
          />
        )}
        <div
          css={css`
            & {
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0;
              left: 0;
              background-color: ${shadow
                ? "rgba(12, 8, 8, 0.8)"
                : "transparent"};
            }
          `}
        >
          {children}
        </div>
      </LayoutContainer>
      <Global
        styles={css`
          ${emotionNormalize}
          html, body, #___gatsby, #gatsby-focus-wrapper {
            height: 100%;
            background-color: black;
          }
          *,
          html,
          body {
            cursor: url(${cursor}) 1 1, auto;
          }
          #gatsby-focus-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          body {
            font-family: "VT323", monospace;
            font-size: 2rem;
          }
          *,
          *::after,
          *::before {
            box-sizing: border-box;
          }
          ::selection {
            background: transparent;
          }
        `}
      />
    </Providers>
  )
}

interface ILayoutContainer {
  customBorder?: string
  customBorderSize?: number
  radial?: boolean
  radialColors?: { dark: string; light: string }
}

const LayoutContainer = styled.div<ILayoutContainer>`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${({
    radial,
    radialColors = {
      dark: "rgb(0, 12, 32)",
      light: "rgb(64, 36, 104)",
    },
  }) => {
    if (!radial) {
      return `black`
    } else if (radial) {
      return `
      background: ${radialColors.light};
      background: radial-gradient(
        circle at center center,
        ${radialColors.light} 0%,
        ${radialColors.dark} 100%
      );`
    }
  }};
  border: 20px solid #65cdbd;
  ${({ customBorder = borderImg, customBorderSize = 20 }) =>
    `border-image: url(${customBorder}) ${customBorderSize};`}
  color: white;
  text-align: center;
  overflow-x: hidden;
  overflow-y: auto;

  ${mq[3]} {
    overflow: hidden;
  }
`
