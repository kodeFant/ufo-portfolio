import React, { useEffect } from "react"
import { graphql, navigate } from "gatsby"
import Layout from "../components/Layout"
import Img, { FixedObject } from "gatsby-image"

import ClickSound from "../components/ClickSound"

import DottedField from "../components/DottedField"
import {
  PortfolioContainer,
  PortfolioNav,
  PortfolioNavLink,
  PortFolioIcon,
  PortfolioData,
  PortFolioDescription,
  TechList,
} from "../elements/Portfolio"
import SEO from "../components/SEO"
import { useImmer } from "use-immer"
const blueBorder = require("../images/border-blue.png")

interface IPortfolioTemplate {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        contractor: string
        description: string
        url: string
        tech: string[]
        darkColor?: string
        lightColor?: string
        started: string
      }
    }
    logo: {
      childImageSharp: {
        fixed: FixedObject
      }
    }
  }
  pageContext: {
    duration: string
    next: string
    prev: string
  }
}

export default function PortfolioTemplate({
  data,
  pageContext,
}: IPortfolioTemplate) {
  const {
    title,
    contractor,
    description,
    url,
    tech,
    darkColor,
    lightColor,
    started,
  } = data.markdownRemark.frontmatter
  const { duration, next, prev } = pageContext
  const [listenToKeyPress, setKeyListenStatus] = useImmer(true)
  const navLink = (path: string) => `/portfolio/${path}`
  const handleKeyPress = (e: KeyboardEvent) => {
    if (listenToKeyPress) {
      if (e.key === "ArrowLeft") {
        navigate(navLink(prev))
        setKeyListenStatus(() => false)
      }
      if (e.key === "ArrowRight") {
        navigate(navLink(next))
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
    <Layout
      customBorder={blueBorder && blueBorder}
      customBorderSize={28}
      radial={true}
    >
      <SEO title={title} />
      <PortfolioContainer>
        <PortfolioNav>
          <PortfolioNavLink to="/" state={{ muteSound: true }}>
            Ok
          </PortfolioNavLink>
          <PortfolioNavLink to={navLink(prev)}>{"<<"}</PortfolioNavLink>
          <PortfolioNavLink to={navLink(next)}>{">>"}</PortfolioNavLink>
        </PortfolioNav>
        <PortFolioIcon
          href={url}
          target="_blank"
          radialColors={
            darkColor && lightColor
              ? { dark: darkColor, light: lightColor }
              : undefined
          }
        >
          <Img
            fadeIn={true}
            fixed={data.logo.childImageSharp.fixed}
            imgStyle={{ objectFit: "contain" }}
          />
        </PortFolioIcon>

        <PortfolioData>
          <h1 style={{ margin: "0.5rem 0" }}>{title}</h1>
          <DottedField entry="Påbegynt" value={started} />
          <DottedField entry="Varighet" value={duration} />
          <DottedField entry="Oppdragsgiver" value={contractor} />
        </PortfolioData>
        <PortFolioDescription>
          {description}
          <TechList>
            <span className="header">Nøkkelteknologi: </span>
            <span className="list">
              {tech
                .sort()
                .map(
                  (technology, index, arr) =>
                    `${technology}${arr.length - 1 !== index ? ", " : ""}`
                )}
            </span>
          </TechList>
        </PortFolioDescription>
      </PortfolioContainer>

      <ClickSound />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!, $logo: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      frontmatter {
        title
        description
        started(formatString: "MMMM YYYY", locale: "nb-NO")
        finished
        contractor
        url
        tech
        darkColor
        lightColor
      }
    }
    logo: file(relativePath: { eq: $logo }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(height: 80) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
  }
`
