import React from "react"
import Layout from "../components/Layout"
import { ButtonLink } from "../components/MainMenu"
import { Container } from "../components/Containers"

export default function PortfolioPage() {
  return (
    <Layout>
      <Container>
        Portefølje
        <ButtonLink to="/" gridArea="" state={{ sound: false }}>
          Tilbake
        </ButtonLink>
      </Container>
    </Layout>
  )
}
