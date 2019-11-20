import React from "react"
import Layout from "../components/Layout"
import { Container } from "../components/Containers"

import { css } from "@emotion/core"
import { ButtonLink } from "../elements/Button"

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
