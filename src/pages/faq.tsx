import React, { useEffect, useRef } from "react"
import Layout from "../components/Layout"
import { Container } from "../components/Containers"

import { css } from "@emotion/core"
import { ButtonLink } from "../elements/Button"
import ClickSound from "../components/ClickSound"
import SEO from "../components/SEO"

export default function FAQPage() {
  return (
    <Layout>
      <SEO title="Ofte stilte spørsmål" />
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
      <ClickSound />
    </Layout>
  )
}
