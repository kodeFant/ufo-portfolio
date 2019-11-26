import React from "react"
import Layout from "../components/Layout"
import styled from "@emotion/styled"
import { ButtonLink } from "../elements/Button"
import ClickSound from "../components/ClickSound"
import SEO from "../components/SEO"
import { mq } from "../elements/MediaQuery"
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
              <AboutBtnLink to="/">{"<<"}</AboutBtnLink>
              <AboutBtnLink state={{ muteSound: true }} to="/">
                Ok
              </AboutBtnLink>
              <AboutBtnLink to="/">{">>"}</AboutBtnLink>
            </NavButtons>
            <NavInfo>
              <AboutEntry name="Team" value="Kantega" />
              <AboutEntry name="Rang" value="Frontendutvikler" />
            </NavInfo>
          </Nav>
          <ProjectStats>
            <AboutEntry name="Prosjekter" value="5" />
            <AboutEntry name="Oppdragsgivere" value="4" />
            <AboutEntry name="Erfaring" value="1 år" />
          </ProjectStats>
          <Links>{/* <AboutBtnLink to="/">Biografi</AboutBtnLink> */}</Links>
        </Menu>
        <Main>
          <div style={{ padding: "0.5rem" }}>Nøkkelerfaringer</div>
          <GraphEntry>
            <div className="name">JAVASCRIPT / TYPESCRIPT</div>
            <div>5</div>
            <div>Value</div>
          </GraphEntry>
          <GraphEntry>
            <div className="name">ELM</div> <div>5</div>
            <div>Value</div>
          </GraphEntry>
          <GraphEntry>
            <div className="name">PHP</div> <div>5</div>
            <div>Value</div>
          </GraphEntry>
          <GraphEntry>
            <div className="name">NODE</div> <div>5</div>
            <div>Value</div>
          </GraphEntry>
          <GraphEntry>
            <div className="name">CSS</div> <div>5</div>
            <div>Value</div>
          </GraphEntry>
          <GraphEntry>
            <div className="name">GRAPHQL</div> <div>5</div>
            <div>Value</div>
          </GraphEntry>
          <GraphEntry>
            <div className="name">GATSBY</div> <div>5</div>
            <div>Value</div>
          </GraphEntry>
          <GraphEntry>
            <div className="name">FIREBASE</div> <div>5</div>
            <div>Value</div>
          </GraphEntry>
          <GraphEntry>
            <div className="name">REACT</div> <div>5</div>
            <div>Value</div>
          </GraphEntry>
        </Main>
      </AboutContent>

      <ClickSound />
    </Layout>
  )
}

export default AboutPage

function AboutEntry({ name, value }) {
  return (
    <div style={{ margin: 0 }}>
      <AboutEntryName>{name} </AboutEntryName>
      {value}
    </div>
  )
}

const AboutEntryName = styled.span`
  text-transform: uppercase;
  color: #84b0dc;
  text-shadow: 2px 2px 0px #0c2c64, -2px -2px 0px #0c2c64, -2px 2px 0px #0c2c64,
    2px -2px 0px #0c2c64;
`

const AboutContent = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  text-align: left;
  grid-template:
    "header" 130px
    "menu" 2fr
    "main" 8fr;
  text-shadow: 2px 2px 0px #585858, -2px -2px 0px #585858, -2px 2px 0px #585858,
    2px -2px 0px #585858;
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
  text-shadow: 4px 4px 0px #00103c, -4px -4px 0px #00103c, -4px 4px 0px #00103c,
    4px -4px 0px #00103c;
`

// Menu

const Menu = styled.div`
  grid-area: menu;
  display: grid;
  grid-template: "nav projects links" 1fr / 3fr 3fr 1fr;
`

const Nav = styled.nav`
  grid-area: nav;
`

const NavButtons = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  align-items: start;
  justify-items: start;
`

const AboutBtnLink = styled(ButtonLink)`
  background-color: #643c87;
  color: #b494e8;
  outline: outset 2px #b595e9;
  border: outset 2px #b595e9;
  padding: 0 1rem;
  text-transform: uppercase;

  :active {
    outline: inset 2px #b595e9;
    border: inset 2px #b595e9;
  }

  ${mq[0]} {
    padding: 0 1.5rem;
  }
`

const NavInfo = styled.div`
  padding: 0.5rem 0;
`

const ProjectStats = styled.div`
  grid-area: projects;
`

const Links = styled.div`
  grid-area: links;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0.5rem 0;
`

// Main
const Main = styled.main`
  grid-area: main;

  display: grid;
  grid-template-rows: repeat(11, 1fr);
`
const GraphEntry = styled.div`
  display: grid;
  grid-template-columns: 5fr 100px 7fr;
  background: linear-gradient(
    90deg,
    rgba(0, 12, 32, 1) 0%,
    rgba(64, 36, 104, 1) 50%,
    rgba(0, 12, 32, 1) 100%
  );
  border: 4px solid #d8d9e8;
  padding: 0.5rem;
  border-bottom: 0;

  &:last-of-type {
    border-bottom: 4px solid #d8d9e8;
  }

  .name {
    color: #edc8c1;
    text-shadow: 2px 2px 0px #752850, -2px -2px 0px #752850,
      -2px 2px 0px #752850, 2px -2px 0px #752850;
  }
`
