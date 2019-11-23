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
import { darkestGreen, mainGreen } from "../../utilities/Colors"

export default function SocialMediaModal() {
  const { closeModal } = ModalState.useContainer()
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

  return (
    <Backdrop>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={{ ...props, width: "500px", maxWidth: "100%" }}
            >
              <StyledModalContainer
                onClick={(e: React.SyntheticEvent) => {
                  e.stopPropagation()
                }}
              >
                <ModalHeader>Sosiale medier</ModalHeader>

                <SocialMediaLinkList>
                  <SocialMediaLink href="https://www.linkedin.com/in/larslilloulvestad/">
                    LinkedIn
                  </SocialMediaLink>
                  <SocialMediaLink href="https://twitter.com/larsparsfromage">
                    Twitter
                  </SocialMediaLink>
                  <SocialMediaLink href="https://github.com/kodeFant">
                    Github
                  </SocialMediaLink>
                </SocialMediaLinkList>

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
              </StyledModalContainer>
            </animated.div>
          )
      )}
    </Backdrop>
  )
}

const ModalHeader = styled.h2`
  color: ${mainGreen};
  text-shadow: 2px 2px 0px ${darkestGreen}, -2px -2px 0px ${darkestGreen},
    -2px 2px 0px ${darkestGreen}, 2px -2px 0px ${darkestGreen};
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 500;
  margin: 0;
`

const StyledModalContainer = styled(ModalContainer)`
  height: 100%;
  background-color: ${darkestGreen};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  text-align: center;
  overflow: hidden;
`

const SocialMediaLinkList = styled.div`
  text-align: left;
  width: 100%;
`

const SocialMediaLink = styled.a`
  display: block;
  text-decoration: none;
  color: ${mainGreen};
  font-size: 1.8rem;
  text-transform: uppercase;
  text-shadow: 2px 2px 0px ${darkestGreen}, -2px -2px 0px ${darkestGreen},
    -2px 2px 0px ${darkestGreen}, 2px -2px 0px ${darkestGreen};
  cursor: inherit;
  padding: 0 1rem;
  :hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`
