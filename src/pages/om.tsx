import React from "react"
import Layout from "../components/Layout"
import styled from "@emotion/styled"
import { ButtonLink } from "../elements/Button"
import ClickSound from "../components/ClickSound"
import SEO from "../components/SEO"
import { mq } from "../elements/MediaQuery"
const rankImg = require("../images/rookie.png")

function AboutPage() {
  const maxExperienceLength = 10
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
        <SkillChart>
          <div style={{ padding: "0.5rem" }}>Nøkkelerfaringer</div>
          {mockExpData.map((entry, index) => (
            <Bar
              key={index}
              name={entry.name}
              value={entry.value}
              background={barColors[index].background}
              border={barColors[index].border}
              max={maxExperienceLength}
            />
          ))}
        </SkillChart>
      </AboutContent>

      <ClickSound />
    </Layout>
  )
}

export default AboutPage

interface IAboutEntry {
  name: string
  value: string
}

function AboutEntry({ name, value }: IAboutEntry) {
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
  border: solid 0.5rem #c8c8dc;

  img {
    width: 100%;
    height: 100%;
  }
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
  border: solid 0.5rem #c8c8dc;
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
const SkillChart = styled.main`
  grid-area: main;

  display: grid;
  grid-template-rows: repeat(11, 1fr);
`

interface IBar {
  name: string
  value: number
  background: string
  border: string
  max: number
}

function Bar({ name, value, background, border, max }: IBar) {
  return (
    <GraphEntry max={max}>
      <div className="name">{name}</div>
      <div className="value">{value}</div>
      <div className="bar">
        <Line count={value} background={background} border={border} />
      </div>
    </GraphEntry>
  )
}

interface IGraphEntry {
  max: number
}

const GraphEntry = styled.div<IGraphEntry>`
  display: grid;
  grid-template-columns: 5fr 100px 7fr;
  background: linear-gradient(
    90deg,
    rgba(0, 12, 32, 1) 0%,
    rgba(64, 36, 104, 1) 33%,
    rgba(64, 36, 104, 1) 66%,
    rgba(0, 12, 32, 1) 100%
  );
  border: 4px solid #d8d9e8;

  border-bottom: 0;

  &:last-of-type {
    border-bottom: 4px solid #d8d9e8;
  }

  .name {
    padding: 0.5rem;
    color: #edc8c1;
    text-shadow: 2px 2px 0px #752850, -2px -2px 0px #752850,
      -2px 2px 0px #752850, 2px -2px 0px #752850;
    text-transform: uppercase;
  }

  .value {
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 4px solid #d8d9e8;
    border-right: 4px solid #d8d9e8;
    background-color: #402d48;
  }

  .bar {
    display: grid;
    grid-template-columns: repeat(${({ max }) => max}, 1fr);
    align-items: center;
  }
`

interface ILine {
  count: number
  background: string
  border: string
}

const Line = styled.div<ILine>`
  ${({ count, background = "#305ca0", border = "#a8cff0" }) =>
    `background-color: ${background};
    grid-column-start: 1;
    grid-column-end: ${count};
    height: 50%;
    border: 4px ${border} solid;
    border-left: 0;`}
`

interface BarColor {
  border: string
  background: string
}

const barColors: BarColor[] = [
  { border: "#d0e35f", background: "#386f14" },
  { border: "#fcfc78", background: "#a07020" },
  { border: "#fc7878", background: "#9c2121" },
  { border: "#ececf8", background: "#787094" },
  { border: "#fcd002", background: "#9c3800" },
  { border: "#a8cff0", background: "#305ca0" },
  { border: "#b9a059", background: "#5c2c11" },
  { border: "#ececf8", background: "#787094" },
  { border: "#f8f8f8", background: "#886f68" },
  { border: "#f8dcd4", background: "#985868" },
]

interface ExpData {
  name: string
  value: number
}

const mockExpData: ExpData[] = [
  { name: "JavaScript / TypeScript", value: 10 },
  { name: "Firebase", value: 8 },
  { name: "CSS", value: 6 },
  { name: "React", value: 5 },
  { name: "Html", value: 5 },
  { name: "Laravel", value: 5 },
  { name: "GraphQL", value: 4 },
  { name: "PHP", value: 4 },
  { name: "Gatsby", value: 3 },
  { name: "Elm", value: 2 },
]
