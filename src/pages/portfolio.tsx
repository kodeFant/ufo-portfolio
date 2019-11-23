import React from "react"
import Layout from "../components/Layout"

import { Container } from "../components/Containers"
import ClickSound from "../components/ClickSound"
import styled from "@emotion/styled"
import { Link } from "gatsby"
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
        <PortFolioIcon>Icon</PortFolioIcon>

        <PortfolioData>
          <PortfolioHeader>Tipzer.no</PortfolioHeader>
          <div>
            Varighet på engasjement............................
            <span>5 måneder</span>
          </div>
          <div>
            Teknologier..........................
            <span>React, Laravel, GraphQL</span>
          </div>
          <div>
            Oppdragsgiver....................................
            <span>Nextmark AS</span>
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

const PortfolioData = styled.aside`
  grid-area: data;
  padding: 0 2rem;
  color: #84b0dc;
  text-shadow: 4px 4px 0px #00103d, -4px -4px 0px #00103d, -4px 4px 0px #00103d,
    4px -4px 0px #00103d;
  font-size: 2.5rem;

  span {
    color: white;
  }
`
const PortFolioDescription = styled.div`
  grid-area: desc;
  padding: 2rem 2rem;
  color: #84b0dc;
  text-shadow: 4px 4px 0px #00103d, -4px -4px 0px #00103d, -4px 4px 0px #00103d,
    4px -4px 0px #00103d;
  font-size: 2.5rem;
`

const PortfolioNav = styled.nav`
  grid-area: nav;
  display: flex;
  padding: 0.5rem;
`

const PortFolioIcon = styled.aside`
  grid-area: icon;
  justify-self: end;
  align-self: start;
  height: 400px;
  width: 400px;
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
`

const PortfolioHeader = styled.h1`
  color: #84b0dc;
  text-shadow: 4px 4px 0px #00103d, -4px -4px 0px #00103d, -4px 4px 0px #00103d,
    4px -4px 0px #00103d;
  text-align: left;
`

const StyledContainer = styled(Container)`
  background: rgb(64, 36, 104);
  background: radial-gradient(
    circle,
    rgba(64, 36, 104, 1) 0%,
    rgba(0, 12, 32, 1) 100%
  );
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr 400px;
  justify-items: start;
  align-items: start;
  grid-grap: 1rem;
  grid-template-rows: 5fr 38fr 57fr;
  grid-template-areas:
    "nav  nav  icon"
    "data data icon"
    "desc desc desc";
  padding: 0;
  text-align: left;
`

const PortfolioNavLink = styled(Link)`
  background-color: #b8b9d0;
  color: #c7c8dc;
  padding: 0.3rem;
  text-shadow: 2px 2px 0px #9c98b9, -2px -2px 0px #9c98b9, -2px 2px 0px #9c98b9,
    2px -2px 0px #9c98b9;
  text-decoration: none;
  width: 150px;
  margin-right: 0.5rem;
  text-align: center;

  &:active {
    color: #9c98b9;
    text-shadow: 2px 2px 0px #c7c8dc, -2px -2px 0px #c7c8dc,
      -2px 2px 0px #c7c8dc, 2px -2px 0px #c7c8dc;
  }
`
