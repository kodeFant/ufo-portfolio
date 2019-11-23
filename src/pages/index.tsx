import React, { useRef, useEffect } from "react"
import Layout from "../components/Layout"
import MainMenu from "../components/MainMenu"
import styled from "@emotion/styled"
import { Heading1, Heading2 } from "../elements/Headers"
import { useSpring, animated } from "react-spring"
import { Container } from "../components/Containers"
import { graphql } from "gatsby"
import Modal from "../components/Modal"
import { FluidObject } from "gatsby-image"

const expandSound = require("../sounds/expand.mp3")

interface IndexPage {
  location: any
  data: {
    backgroundImg: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
}

export const query = graphql`
  query {
    backgroundImg: file(relativePath: { eq: "planet.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

function IndexPage({ location, data }: IndexPage) {
  const grow = useSpring({
    config: { duration: 600 },
    to: { height: "100%", width: "100%" },
    from: { height: "10%", width: "10%" },
  })
  const audio = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audio.current && location.state && location.state.muteSound !== true) {
      audio.current.volume = 0.1
      audio.current.play()
    }
  })

  return (
    <animated.div style={grow}>
      <Layout backgroundImg={data.backgroundImg.childImageSharp.fluid}>
        <Container>
          <Header>
            <Heading1>Lillo</Heading1>
            <Heading2>Utvikler og historieforteller</Heading2>
          </Header>
          <MainMenu />
        </Container>
        <Modal />
      </Layout>
      <audio ref={audio} id="audio">
        <source src={expandSound} type="audio/mpeg" />
      </audio>
      <form
        data-netlify="true"
        name="kontaktskjema"
        netlify-honeypot="bot-field"
        style={{ display: "none" }}
      >
        <input type="text" name="email" />
        <input type="text" name="message" />
      </form>
    </animated.div>
  )
}

export default IndexPage

const Header = styled.header`
  padding: 1rem;
  margin: 0 0 4rem 0;
`
