import React from "react"
import Layout from "../components/Layout"
import { Container } from "../components/Containers"
import { ButtonLink } from "../components/MainMenu"

export default function FAQPage() {
  return (
    <Layout>
      <Container>
        Ofte stilte spørsmål
        <ButtonLink to="/" gridArea="" state={{ sound: false }}>
          Tilbake
        </ButtonLink>
      </Container>
    </Layout>
  )
}
