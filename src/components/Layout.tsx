import React from "react"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import emotionNormalize from "emotion-normalize"
import Providers from "../state/Providers"
import Img, { FluidObject } from "gatsby-image"
const borderImg = require("../images/border.png")
const cursor = require("../images/cursor.png")

interface ILayout {
  children: React.ReactNode
  backgroundImg?: FluidObject | FluidObject[]
  customBorder?: string
  customBorderSize?: number
}

export default function Layout({
  children,
  backgroundImg,
  customBorder,
  customBorderSize,
}: ILayout) {
  return (
    <Providers>
      <LayoutContainer
        customBorder={customBorder}
        customBorderSize={customBorderSize}
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
              background-color: rgba(12, 8, 8, 0.8);
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
          * {
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
}

const LayoutContainer = styled.div<ILayoutContainer>`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: rgba(32, 20, 20, 1);
  border: 20px solid #65cdbd;
  ${({ customBorder = borderImg, customBorderSize = 20 }) =>
    `border-image: url(${customBorder}) ${customBorderSize};`}
  color: white;
  text-align: center;
  overflow: hidden;
`
