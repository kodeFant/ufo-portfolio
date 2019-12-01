import React from "react"
import Layout from "../components/Layout"

import { css } from "@emotion/core"
import { ButtonLink } from "../elements/Button"
import ClickSound from "../components/ClickSound"
import SEO from "../components/SEO"
import styled from "@emotion/styled"
import { Heading2, AboutHeader } from "../elements/Headers"
import { useImmer } from "use-immer"
import {
  babyBlue,
  lightestGreen,
  darkGreen,
  darkerGreen,
  darkestGreen,
} from "../utilities/Colors"

export default function FAQPage() {
  const [selectedQuestion, setSelectedQuestion] = useImmer<number | null>(null)
  return (
    <Layout>
      <SEO title="Ofte stilte spørsmål" />
      <StyledContainer>
        <Content>
          <Heading2>Spørsmål og svar</Heading2>
          <QnA
            question="Tar du oppdrag?"
            answer={
              <>
                <p>
                  Jeg jobber hovedsakelig for Kantega og prioriterer det. Ta
                  gjerne kontakt med dem for forespørsler om større oppdrag.
                </p>
                <p>
                  Jeg kan i noen tilfeller vurdere avgrensede oppdrag av mindre
                  omfang.
                </p>
                <p>
                  Det vil normalt være en blogg, landingsside eller en liten
                  applikasjon.
                </p>
              </>
            }
            selectedQuestion={selectedQuestion}
            setSelectedQuestion={setSelectedQuestion}
            id={1}
          />
          <QnA
            question="Hva kan du bidra med?"
            answer={
              <p>
                Jeg spesialiserer meg innen frontend, men er veldig glad i å
                lære nye teknologier og måter å jobbe på.
              </p>
            }
            selectedQuestion={selectedQuestion}
            setSelectedQuestion={setSelectedQuestion}
            id={2}
          />
          <QnA
            question="Hva slags teknologi har du brukt på denne siden?"
            answer={
              <>
                <p>GatsbyJS, React, TypeScript, CSS (Styled Components).</p>
                <p>
                  Siden det kun er jeg som endrer i innholdet, bruker jeg ikke
                  en CMS, men har en rekke markdown-filer som jeg dytter ut til
                  prosjektet i Github.
                </p>
                <p>
                  Se koden på min{" "}
                  <a href="https://github.com/kodeFant/ufo-portfolio">Github</a>
                </p>
              </>
            }
            selectedQuestion={selectedQuestion}
            setSelectedQuestion={setSelectedQuestion}
            id={3}
          />
          <QnA
            question="Hvem har laget designet?"
            answer={
              <p>
                Designet er en hyllest til mitt favoritt-strategispill, XCOM:
                Enemy Unknown fra 1994. Jeg har tatt elementer fra menyer og
                grensesnitt i spillet og kodet det opp med CSS.
              </p>
            }
            selectedQuestion={selectedQuestion}
            setSelectedQuestion={setSelectedQuestion}
            id={4}
          />
          <QnA
            question="Er du designer?"
            answer={
              <p>
                Nei, jeg ser ikke på meg selv som designer. Men jeg forstår at
                det er lett å forveksle, da frontend-utvikling er tett knyttet
                opp mot design.
              </p>
            }
            selectedQuestion={selectedQuestion}
            setSelectedQuestion={setSelectedQuestion}
            id={5}
          />
        </Content>
        <Nav>
          <ButtonLink
            to="/"
            css={css`
              & {
                padding: 1rem;
                width: 100%;
                max-width: 300px;
              }
            `}
            style={{ color: lightestGreen }}
            state={{ muteSound: false }}
          >
            Tilbake
          </ButtonLink>
        </Nav>
      </StyledContainer>
      <ClickSound />
    </Layout>
  )
}

interface IQnA {
  question: string
  answer: React.ReactNode
  id: number
  selectedQuestion: number | null
  setSelectedQuestion: (
    f: (draft: number | null) => number | void | null
  ) => void
}

function QnA({
  question,
  answer,
  selectedQuestion,
  setSelectedQuestion,
  id,
}: IQnA) {
  return (
    <div style={{ width: "100%" }}>
      <AboutHeader
        onClick={() => {
          if (id !== selectedQuestion) {
            setSelectedQuestion(() => id)
          } else if (id === selectedQuestion) {
            console.log("close")
            setSelectedQuestion(() => {
              return null
            })
          }
        }}
      >
        {question}
      </AboutHeader>

      {selectedQuestion === id && (
        <div
          style={{
            backgroundColor: darkestGreen,
            padding: "1rem",
            width: "100%",
          }}
        >
          {answer}
        </div>
      )}
    </div>
  )
}

const StyledContainer = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  justify-content: start;
  justify-items: start;
  align-items: start;
  text-align: left;
  padding: 1rem;
  grid-template:
    "content" 1fr
    "nav" auto / 1fr;
  p {
    text-shadow: 2px 2px 0px #585858, -2px -2px 0px #585858,
      -2px 2px 0px #585858, 2px -2px 0px #585858;
  }

  a {
    color: ${babyBlue};
    text-shadow: 1px 1px 0px #0c2c64, -1px -1px 0px #0c2c64,
      -1px 1px 0px #0c2c64, 1px -1px 0px #0c2c64;
    font-size: 2rem;
    text-decoration: none;
  }
`

const Content = styled.div`
  grid-area: content;
  width: 100%;
`

const Nav = styled.nav`
  grid-area: nav;
  width: 100%;
  justify-self: end;
`
