import React from "react"
import Layout from "../components/Layout"

import { Container } from "../components/Containers"
import { ButtonLink } from "../elements/Button"
import ClickSound from "../components/ClickSound"

const AboutPage = () => (
  <Layout>
    <Container>
      Om meg
      <ButtonLink to="/" state={{ muteSound: true }}>
        Tilbake
      </ButtonLink>
    </Container>
    <ClickSound />
  </Layout>
)

export default AboutPage
