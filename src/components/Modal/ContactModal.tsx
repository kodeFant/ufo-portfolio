import React, { useState, useEffect } from "react"
import Backdrop from "./Backdrop"
import { ModalContainer } from "../../elements/Modal"
import ModalState from "../../state/modal"
import { useTransition, animated } from "react-spring"
import { Modal } from "../../types/Modal"
import { Button } from "../../elements/Button"
import { css } from "@emotion/core"

export default function ContactModal() {
  const { modal, closeModal } = ModalState.useContainer()
  const [open, setModalState] = useState(true)
  const transitions = useTransition(open, null, {
    from: { height: "50px" },
    enter: { height: "300px" },
    leave: { height: "50px" },
    config: { duration: 200 },
  })

  useEffect(() => {
    if (open === false) {
      setTimeout(() => {
        closeModal()
      }, 300)
    }
  }, [open])

  return (
    <Backdrop>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={{ ...props, width: "700px", maxWidth: "100%" }}
            >
              <ModalContainer
                css={css`
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  overflow: hidden;
                `}
                onClick={(e: React.SyntheticEvent) => {
                  e.stopPropagation()
                }}
              >
                Kontakt
                <h2>Fyll inn ditt navn</h2>
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
                  Avbryt
                </Button>
              </ModalContainer>
            </animated.div>
          )
      )}
    </Backdrop>
  )
}
