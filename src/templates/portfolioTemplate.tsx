import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Img, { FluidObject, FixedObject } from "gatsby-image"

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

interface IPortfolioTemplate {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        contractor: string
        description: string
        url: string
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
  } = data.markdownRemark.frontmatter
  const { duration, next, prev } = pageContext
  console.log("pageContext", pageContext)
  return (
    <Layout customBorder={blueBorder && blueBorder} customBorderSize={28}>
      <PortfolioContainer>
        <PortfolioNav>
          <PortfolioNavLink to="/" state={{ muteSound: true }}>
            Ok
          </PortfolioNavLink>
          <PortfolioNavLink to={`portfolio/${prev}`}>{"<<"}</PortfolioNavLink>
          <PortfolioNavLink to={`portfolio/${next}`}>{">>"}</PortfolioNavLink>
        </PortfolioNav>
        <PortFolioIcon href={url}>
          <Img
            fadeIn={true}
            fixed={data.logo.childImageSharp.fixed}
            imgStyle={{ objectFit: "contain" }}
          />
        </PortFolioIcon>

        <PortfolioData>
          <h1 style={{ margin: "0.5rem 0" }}>{title}</h1>
          <DottedField entry="Varighet" value={duration} />
          <DottedField entry="Oppdragsgiver" value={contractor} />
          <DottedField entry="Teknologier" value="React, Laravel, GraphQL" />
        </PortfolioData>
        <PortFolioDescription>{description}</PortFolioDescription>
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
        started
        finished
        contractor
        url
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
