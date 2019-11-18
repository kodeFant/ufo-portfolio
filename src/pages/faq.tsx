import React from "react"
import Layout from "../components/Layout"
import { Container } from "../components/Containers"
import { ButtonLink } from "../components/MainMenu"

export default function FAQPage() {
  return (
    <Layout>
      <Container>
        Ofte stilte spørsmål
        <ButtonLink to="/" state={{ muteSound: false }}>
          Tilbake
        </ButtonLink>
      </Container>
    </Layout>
  )
}
