import React from "react"
import Layout from "../components/Layout"
import { ButtonLink } from "../components/MainMenu"
import { Container } from "../components/Containers"

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
