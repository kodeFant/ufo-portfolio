import React from "react"
import Layout from "../components/Layout"

import { Container } from "../components/Containers"
import { ButtonLink } from "../elements/Button"

const AboutPage = () => (
  <Layout>
    <Container>
      Om meg
      <ButtonLink to="/" state={{ muteSound: true }}>
        Tilbake
      </ButtonLink>
    </Container>
  </Layout>
)

export default AboutPage
