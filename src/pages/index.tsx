import React, { useRef, useEffect } from "react"
import Layout from "../components/Layout"
import MainMenu from "../components/MainMenu"
import styled from "@emotion/styled"
import { Heading1, Heading2 } from "../elements/Headers"
import { useSpring, animated } from "react-spring"
import { Container } from "../components/Containers"

import Modal from "../components/Modal"

const background = require("../images/planet.jpg")
const expandSound = require("../sounds/expand.mp3")

interface IndexPage {
  location: any
}

function IndexPage({ location }: IndexPage) {
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
      <Layout backgroundImg={background}>
        <Container>
          <Header>
            <Heading1>Lillo</Heading1>
            <Heading2>Utvikler og historieforteller</Heading2>
          </Header>
          <MainMenu />
        </Container>
      </Layout>
      <audio ref={audio} id="audio">
        <source src={expandSound} type="audio/mpeg" />
      </audio>
      <Modal />
    </animated.div>
  )
}

export default IndexPage

const Header = styled.header`
  padding: 1rem;
  margin: 0 0 4rem 0;
`
