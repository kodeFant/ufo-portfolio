import React from "react"
import Layout from "../components/Layout"

import { Container } from "../components/Containers"
import ClickSound from "../components/ClickSound"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { mq } from "../elements/MediaQuery"
const blueBorder = require("../images/border-blue.png")

export default function PortfolioPage() {
  return (
    <Layout customBorder={blueBorder && blueBorder} customBorderSize={28}>
      <StyledContainer>
        <PortfolioNav>
          <PortfolioNavLink to="/" state={{ muteSound: true }}>
            Ok
          </PortfolioNavLink>
          <PortfolioNavLink to="/" state={{ muteSound: true }}>
            {"<<"}
          </PortfolioNavLink>
          <PortfolioNavLink to="/" state={{ muteSound: true }}>
            {">>"}
          </PortfolioNavLink>
        </PortfolioNav>
        <PortFolioIcon href="https://tipzer.no">Icon</PortFolioIcon>

        <PortfolioData>
          <h1>Tipzer.no</h1>
          <div>
            Varighet på engasjemen<Dots>............................</Dots>
            <DataField>5 måneder</DataField>
          </div>
          <div>
            Teknologier<Dots>..........................</Dots>
            <DataField>React, Laravel, GraphQL</DataField>
          </div>
          <div>
            Oppdragsgiver<Dots>....................................</Dots>
            <DataField>Nextmark AS</DataField>
          </div>
        </PortfolioData>
        <PortFolioDescription>
          En digital salgsplattform for privatpersoner. Jeg utviklet frontend og
          fungerende backend. Jeg tilegnet meg kompetanse innen det å bygge
          GraphQL-apier og legge på ekstra funksjonalitet som automatiserte SMS
          og epost-tjenester.
        </PortFolioDescription>
      </StyledContainer>
      <ClickSound />
    </Layout>
  )
}

const DataField = styled.span`
  color: white;
  display: block;
  ${mq[2]} {
    display: inline;
  }
`

const Dots = styled.span`
  display: none;
  ${mq[2]} {
    display: inline;
  }
`

const StyledContainer = styled(Container)`
  background: rgb(64, 36, 104);
  background: radial-gradient(
    circle,
    rgba(64, 36, 104, 1) 0%,
    rgba(0, 12, 32, 1) 100%
  );

  width: 100%;
  overflowy: scroll;
  height: 100%;
  display: grid;
  justify-items: start;
  align-items: start;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto;
  grid-template-areas:
    "nav"
    "icon"
    "data"
    "desc";
  font-size: 2rem;
  ${mq[2]} {
    font-size: 2.5rem;
    grid-template-columns: 1fr 1fr 400px;
    grid-template-rows: 5fr 38fr 57fr;
    display: grid;
    grid-template-areas:
      "nav  nav  icon"
      "data data icon"
      "desc desc desc";
  }

  padding: 0;
  text-align: left;
`

const PortfolioNav = styled.nav`
  grid-area: nav;
  display: flex;
  padding: 0.5rem;
`

const PortfolioData = styled.aside`
  grid-area: data;
  padding: 0 2rem;
  color: #84b0dc;
  text-shadow: 4px 4px 0px #00103d, -4px -4px 0px #00103d, -4px 4px 0px #00103d,
    4px -4px 0px #00103d;
`

const PortFolioDescription = styled.div`
  grid-area: desc;
  padding: 2rem 2rem;
  color: #84b0dc;
  text-shadow: 4px 4px 0px #00103d, -4px -4px 0px #00103d, -4px 4px 0px #00103d,
    4px -4px 0px #00103d;
`

const PortFolioIcon = styled.a`
  grid-area: icon;
  ${mq[2]} {
    justify-self: end;
    align-self: start;
    height: 400px;
    width: 400px;
  }
  background-color: brown;
  border: 20px solid #65cdbd;
  border-image: url(${blueBorder}) 28;
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(92, 44, 15);
  background: radial-gradient(
    circle,
    rgba(92, 44, 15, 1) 0%,
    rgba(32, 5, 0, 1) 100%
  );
  color: white;
  text-decoration: none;
`

const PortfolioNavLink = styled(Link)`
  background-color: #b8b9d0;
  color: #c7c8dc;
  padding: 0.3rem;
  text-shadow: 2px 2px 0px #9c98b9, -2px -2px 0px #9c98b9, -2px 2px 0px #9c98b9,
    2px -2px 0px #9c98b9;
  text-decoration: none;
  max-width: 30vw;
  width: 150px;
  margin-right: 0.5rem;
  text-align: center;

  &:active {
    color: #9c98b9;
    text-shadow: 2px 2px 0px #c7c8dc, -2px -2px 0px #c7c8dc,
      -2px 2px 0px #c7c8dc, 2px -2px 0px #c7c8dc;
  }
`
