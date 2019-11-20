import React from "react"
import Layout from "../components/Layout"

import { Container } from "../components/Containers"
import { ButtonLink } from "../elements/Button"

export default function PortfolioPage() {
  return (
    <Layout>
      <Container>
        Portefølje
        <ButtonLink to="/" state={{ muteSound: true }}>
          Tilbake
        </ButtonLink>
      </Container>
    </Layout>
  )
}
