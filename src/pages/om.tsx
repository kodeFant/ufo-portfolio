import React from "react"
import Layout from "../components/Layout"

import { Container } from "../components/Containers"
import { ButtonLink } from "../elements/Button"
import ClickSound from "../components/ClickSound"
import SEO from "../components/SEO"

const AboutPage = () => (
  <Layout>
    <SEO title="Om meg"/>
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
