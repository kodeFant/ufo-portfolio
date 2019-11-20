import React, { useEffect, useState } from "react"
import ModalState from "../../state/modal"
import { useTransition, animated } from "react-spring"
import { useStaticQuery, graphql } from "gatsby"
import { Modal } from "../../types/Modal"
import Backdrop from "./Backdrop"
import { ModalContainer } from "../../elements/Modal"
import { css } from "@emotion/core"
import { Button } from "../../elements/Button"
import styled from "@emotion/styled"
const skyLineBackground = require("../../images/skyline-background.png")

export default function SocialMediaModal() {
  const { modal, closeModal } = ModalState.useContainer()
  const [open, setModalState] = useState(true)
  useEffect(() => {
    if (open === false) {
      setTimeout(() => {
        closeModal()
      }, 300)
      //   closeModal()
    }
  }, [open])
  const transitions = useTransition(open, null, {
    from: { height: "1px" },
    enter: { height: "400px" },
    leave: { height: "1px" },
    config: { duration: 200 },
  })
  const socialMediaIcons = useStaticQuery(socialMediaIconsQuery)

  return (
    <Backdrop>
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
                    height: 100%;
                    background-color: #072407;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem;
                    text-align: center;
                    overflow: hidden;
                  }
                `}
                onClick={(e: React.SyntheticEvent) => {
                  e.stopPropagation()
                }}
              >
                <h2
                  css={css`
                    & {
                      color: #40b06d;
                      text-shadow: 2px 2px 0px #003420, -2px -2px 0px #003420,
                        -2px 2px 0px #003420, 2px -2px 0px #003420;
                      text-transform: uppercase;
                      font-size: 3rem;
                      font-weight: 500;
                      margin: 0;
                    }
                  `}
                >
                  Sosiale medier
                </h2>

                <div
                  css={css`
                    & {
                      text-align: left;
                      width: 100%;
                    }
                  `}
                >
                  <SocialMediaLink href="https://www.linkedin.com/in/larslilloulvestad/">
                    LinkedIn
                  </SocialMediaLink>
                  <SocialMediaLink href="https://twitter.com/larsparsfromage">
                    Twitter
                  </SocialMediaLink>
                  <SocialMediaLink href="https://github.com/kodeFant">
                    Github
                  </SocialMediaLink>
                </div>
                {/* <Img
                    fixed={socialMediaIcons.linkedin.childImageSharp.fixed}
                  />

                  <Img fixed={socialMediaIcons.twitter.childImageSharp.fixed} />
                  <Img fixed={socialMediaIcons.github.childImageSharp.fixed} /> */}

                <Button
                  onClick={() => {
                    setModalState(false)
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
    </Backdrop>
  )
}

const SocialMediaLink = styled.a`
  display: block;
  text-decoration: none;
  color: #40b06c;
  font-size: 1.8rem;
  text-transform: uppercase;
  text-shadow: 2px 2px 0px #003420, -2px -2px 0px #003420, -2px 2px 0px #003420,
    2px -2px 0px #003420;
  cursor: inherit;
  padding: 0 1rem;
  :hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`

const socialMediaIconsQuery = graphql`
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
`
