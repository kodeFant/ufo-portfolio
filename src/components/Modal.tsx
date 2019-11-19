import React from "react"
import styled from "@emotion/styled"
import ModalState from "../state/modal"
import { Modal } from "../types/Modal"
import { Button } from "./MainMenu"
import { useTransition, animated } from "react-spring"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Heading2 } from "../elements/Headers"

const borderImg = require("../images/border.png")

export default function UFOModal() {
  const { modal, closeModal } = ModalState.useContainer()
  switch (modal) {
    case Modal.NO_MODAL:
      return <></>
    case Modal.CONTACT_FORM:
      return (
        <BackDropContainer>
          <ModalContainer>Kontaktskjema</ModalContainer>
        </BackDropContainer>
      )
    case Modal.SOCIAL_MEDIA:
      return <SocialMediaModal />
    default:
      return <></>
  }
}

function SocialMediaModal() {
  const { modal, closeModal } = ModalState.useContainer()
  const transitions = useTransition(modal === Modal.SOCIAL_MEDIA, null, {
    from: { height: "50px" },
    enter: { height: "450px" },
    leave: { height: "50px" },
  })
  const socialMediaIcons = useStaticQuery(graphql`
    query {
      linkedin: file(relativePath: { eq: "linkedin64.png" }) {
        childImageSharp {
          fixed(width: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      twitter: file(relativePath: { eq: "twitter64.png" }) {
        childImageSharp {
          fixed(width: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      github: file(relativePath: { eq: "github64.png" }) {
        childImageSharp {
          fixed(width: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <BackDropContainer>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={{ ...props, width: "500px", maxWidth: "100%" }}
            >
              <ModalContainer
                css={css`
                  & {
                    background-color: #2b185c;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 3rem;
                    text-align: center;
                  }
                `}
              >
                <Heading2>Sosiale medier</Heading2>
                <div
                  css={css`
                    & {
                      display: grid;
                      grid-gap: 1rem;
                      grid-template-columns: repeat(3, 1fr);
                      margin: 2rem 0;
                      align-self: center;
                    }
                  `}
                >
                  <Img
                    fixed={socialMediaIcons.linkedin.childImageSharp.fixed}
                  />

                  <Img fixed={socialMediaIcons.twitter.childImageSharp.fixed} />
                  <Img fixed={socialMediaIcons.github.childImageSharp.fixed} />
                </div>
                <Button
                  onClick={() => {
                    closeModal()
                  }}
                  css={css`
                    & {
                      width: 100%;
                      padding: 0;
                    }
                  `}
                >
                  Lukk
                </Button>
              </ModalContainer>
            </animated.div>
          )
      )}
    </BackDropContainer>
  )
}

interface IBackdrop {
  children: React.ReactNode
}

function BackDropContainer({ children }: IBackdrop) {
  const { closeModal } = ModalState.useContainer()
  return (
    <Backdrop
      onClick={e => {
        e.stopPropagation()
        closeModal()
      }}
    >
      {children}
    </Backdrop>
  )
}

const Backdrop = styled.div`
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

const ModalContainer = styled.div`
  background-color: black;
  color: white;
  border: 20px solid #65cdbd;
  border-image: url(${borderImg}) 20;
  padding: 1rem;
  width: 100%;
  height: 100%;
`
