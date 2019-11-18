import React from "react"
import Layout from "../components/Layout"
import { ButtonLink } from "../components/MainMenu"
import { Container } from "../components/Containers"

const AboutPage = () => (
  <Layout>
    <Container>
      Om meg
      <ButtonLink to="/" gridArea="" state={{ sound: false }}>
        Tilbake
      </ButtonLink>
    </Container>
  </Layout>
)

export default AboutPage
