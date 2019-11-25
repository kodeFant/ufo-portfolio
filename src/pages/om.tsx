import React from "react"
import Layout from "../components/Layout"
import styled from "@emotion/styled"
import { ButtonLink } from "../elements/Button"
import ClickSound from "../components/ClickSound"
import SEO from "../components/SEO"
const rankImg = require("../images/rookie.png")

function AboutPage() {
  return (
    <Layout border={false}>
      <SEO title="Om meg" />

      <AboutContent>
        <Header>
          <Logo>
            <img src={rankImg} />
          </Logo>
          <Name>Lars Lillo Ulvestad</Name>
        </Header>
        <Menu>
          <Nav>
            <NavButtons>
              <button>{"<<"}</button>
              <ButtonLink state={{ muteSound: true }} to="/">
                Ok
              </ButtonLink>
              <button>{">>"}</button>
            </NavButtons>
            <NavInfo>Arbeidsgiver: Kantega</NavInfo>
          </Nav>
          <ProjectStats>
            <div> Prosjekter: 5</div>
            <div>Oppdragsgivere: 4</div>
          </ProjectStats>
          <Links>
            <button>Biografi</button>
          </Links>
        </Menu>
        <Main>Statistikk</Main>
      </AboutContent>

      <ClickSound />
    </Layout>
  )
}

export default AboutPage

const AboutContent = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  text-align: left;
  grid-template:
    "header" 130px
    "menu" 2fr
    "main" 7fr;
`

// Header

const Header = styled.header`
  grid-area: header;
  display: grid;
  grid-template: "logo name" 130px / 145px auto;
  background-color: purple;
  grid-gap: -1rem;
`

const Logo = styled.div`
  grid-area: logo;
  background-color: #e3d85b;
  border: solid 1rem #c8c8dc;
`

const Name = styled.div`
  grid-area: name;
  background: rgb(0, 12, 32);
  background: linear-gradient(
    90deg,
    rgba(0, 12, 32, 1) 0%,
    rgba(64, 36, 104, 1) 50%,
    rgba(0, 12, 32, 1) 100%
  );
  border: solid 1rem #c8c8dc;
  border-left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 3rem;
  font-size: 5rem;
  color: #84afdc;
  overflow: hidden;
  white-space: nowrap;
`

// Menu

const Menu = styled.div`
  grid-area: menu;
  display: grid;
  grid-template: "nav projects links" 1fr / 3fr 3fr 1fr;
`

const Nav = styled.nav``

const NavButtons = styled.div`
  display: flex;
`

const NavInfo = styled.div``

const ProjectStats = styled.div``

const Links = styled.div``

// Main
const Main = styled.main`
  grid-area: main;
  background-color: darkviolet;
`
