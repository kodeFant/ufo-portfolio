import React, { useEffect } from "react"
import Layout from "../components/Layout"
import styled from "@emotion/styled"
import { ButtonLink } from "../elements/Button"
import ClickSound from "../components/ClickSound"
import SEO from "../components/SEO"
import { mq } from "../elements/MediaQuery"
import { graphql, useStaticQuery, navigate } from "gatsby"
import AboutEntry from "../components/AboutEntry"
import { useImmer } from "use-immer"
const rankImg = require("../images/rookie.png")

interface IAboutPage {
  children: React.ReactNode
  nextLink: string
  prevLink: string
}

interface TechQueryData {
  allMarkdownRemark: {
    edges: PageNode[]
  }
}

export default function AboutMeTemplate({
  children,
  nextLink,
  prevLink,
}: IAboutPage) {
  const data = useStaticQuery<TechQueryData>(AboutMeTemplateQuery)
  const [listenToKeyPress, setKeyListenStatus] = useImmer(true)
  const { edges } = data.allMarkdownRemark
  const projects = edges.length
  const handleKeyPress = (e: KeyboardEvent) => {
    if (listenToKeyPress) {
      if (e.key === "ArrowLeft") {
        navigate(prevLink)
        setKeyListenStatus(() => false)
      }
      if (e.key === "ArrowRight") {
        navigate(nextLink)
        setKeyListenStatus(() => false)
      }
    }
  }
  useEffect(() => {
    window.addEventListener("keyup", handleKeyPress)
    return () => {
      window.removeEventListener("keyup", handleKeyPress)
    }
  })

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
              <AboutBtnLink to={prevLink}>{"<<"}</AboutBtnLink>
              <AboutBtnLink state={{ muteSound: true }} to="/">
                Ok
              </AboutBtnLink>
              <AboutBtnLink to={nextLink}>{">>"}</AboutBtnLink>
            </NavButtons>
            <NavInfo>
              <AboutEntry name="Team" value="Kantega" />
              <AboutEntry name="Rang" value="Utvikler" />
            </NavInfo>
          </Nav>
          <ProjectStats>
            <AboutEntry
              name="Fullførte prosjekter"
              value={projects.toString()}
            />
            <AboutEntry name="Oppdragsgivere" value="7" />
            <AboutEntry name="Erfaring" value="2 år" />
          </ProjectStats>
          <Links>{/* <AboutBtnLink to="/">Biografi</AboutBtnLink> */}</Links>
        </Menu>
        {children}
      </AboutContent>

      <ClickSound />
    </Layout>
  )
}

const AboutContent = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  text-align: left;
  grid-template:
    "header" auto
    "menu" 2fr
    "main" 8fr;
  text-shadow: 2px 2px 0px #585858, -2px -2px 0px #585858, -2px 2px 0px #585858,
    2px -2px 0px #585858;
`

// Header

const Header = styled.header`
  grid-area: header;
  display: grid;
  grid-template: "logo name" 100px / 100px auto;
  ${mq[1]} {
    grid-template: "logo name" 130px / 145px auto;
  }

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
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  font-size: 1.5rem;
  color: #84afdc;
  overflow: hidden;
  white-space: nowrap;
  text-shadow: 4px 4px 0px #00103c, -4px -4px 0px #00103c, -4px 4px 0px #00103c,
    4px -4px 0px #00103c;

  ${mq[0]} {
    justify-content: flex-start;
    font-size: 3rem;
    padding: 0 3rem;
  }

  ${mq[1]} {
    justify-content: flex-start;
    font-size: 4rem;
    padding: 0 3rem;
  }

  ${mq[2]} {
    justify-content: flex-start;
    font-size: 5rem;
    padding: 0 3rem;
  }
`

// Menu

const Menu = styled.div`
  grid-area: menu;
  display: grid;
  padding: 1rem;
  grid-template:
    "nav" 1fr
    "projects" 1fr
    "links" auto;
  grid-gap: 1.5rem;

  ${mq[1]} {
    grid-template: "nav projects links" 1fr / 3fr 3fr 1fr;
  }
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

export const AboutMeTemplateQuery = graphql`
  query TechDataQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            tech
          }
        }
      }
    }
  }
`

interface PageNode {
  node: {
    frontmatter: {
      tech: string[]
    }
  }
}
