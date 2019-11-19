import React from "react"
import Layout from "../components/Layout"
import { Container } from "../components/Containers"
import { ButtonLink } from "../components/MainMenu"
import { css } from "@emotion/core"

export default function FAQPage() {
  return (
    <Layout>
      <Container>
        Ofte stilte spørsmål
        <ButtonLink
          to="/"
          css={css`
            & {
              width: 100%;
              max-width: 300px;
            }
          `}
          state={{ muteSound: false }}
        >
          Tilbake
        </ButtonLink>
      </Container>
    </Layout>
  )
}
