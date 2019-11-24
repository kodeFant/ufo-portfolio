import React from "react"
import Layout from "../components/Layout"

import ClickSound from "../components/ClickSound"

import DottedField from "../components/DottedField"
import {
  PortfolioContainer,
  PortfolioNav,
  PortfolioNavLink,
  PortFolioIcon,
  PortfolioData,
  PortFolioDescription,
} from "../elements/Portfolio"
const blueBorder = require("../images/border-blue.png")

export default function PortfolioPage() {
  return (
    <Layout customBorder={blueBorder && blueBorder} customBorderSize={28}>
      <PortfolioContainer>
        <PortfolioNav>
          <PortfolioNavLink to="/" state={{ muteSound: true }}>
            Ok
          </PortfolioNavLink>
          <PortfolioNavLink to="/">{"<<"}</PortfolioNavLink>
          <PortfolioNavLink to="/">{">>"}</PortfolioNavLink>
        </PortfolioNav>
        <PortFolioIcon href="https://tipzer.no">Icon</PortFolioIcon>

        <PortfolioData>
          <h1 style={{ margin: "0.5rem 0" }}>Tipzer.no</h1>
          <DottedField entry="Varighet" value="5 måneder" />
          <DottedField entry="Oppdragsgiver" value="Nextmark AS" />
          <DottedField entry="Teknologier" value="React, Laravel, GraphQL" />
        </PortfolioData>
        <PortFolioDescription>
          En digital salgsplattform for privatpersoner. Jeg utviklet frontend og
          fungerende backend. Jeg tilegnet meg kompetanse innen det å bygge
          GraphQL-apier og legge på ekstra funksjonalitet som automatiserte SMS
          og epost-tjenester.
        </PortFolioDescription>
      </PortfolioContainer>
      <ClickSound />
    </Layout>
  )
}
