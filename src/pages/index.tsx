import React from "react"
import Layout from "../components/Layout"
import MainMenu from "../components/MainMenu"
import styled from "@emotion/styled"
import { Heading1, Heading2 } from "../elements/Headers"
const background = require("../images/planet.jpg")

const IndexPage = () => (
  <Layout backgroundImg={background}>
    <Container>
      <Header>
        <Heading1>Lillo</Heading1>
        <Heading2>Utvikler og historieforteller</Heading2>
      </Header>
      <MainMenu />
    </Container>
  </Layout>
)

export default IndexPage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Header = styled.header`
  padding: 1rem;
  margin: 0 0 4rem 0;
`
