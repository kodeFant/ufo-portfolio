import React from "react"
import Layout from "../components/Layout"

import { ButtonLink } from "../elements/Button"
import ClickSound from "../components/ClickSound"
import SEO from "../components/SEO"
import styled from "@emotion/styled"
import { Heading2 } from "../elements/Headers"
import { useImmer } from "use-immer"
import {
  babyBlue,
  darkestGreen,
  mainGreen,
  blackishGreen,
} from "../utilities/Colors"
import { useTransition, animated } from "react-spring"

export default function FAQPage() {
  const [selectedQuestion, setSelectedQuestion] = useImmer<number | null>(null)
  return (
    <Layout
      radial={true}
      radialColors={{ dark: "rgba(0, 0, 0, 1)", light: "rgba(7, 36, 7, 1)" }}
    >
      <SEO title="Ofte stilte spørsmål" />
      <StyledContainer>
        <Content>
          <Heading2>Spørsmål og svar</Heading2>
          <QnA
            question="Tar du oppdrag?"
            answer={
              <>
                <p>Jeg jobber hovedsakelig for Kantega og prioriterer det.</p>
                <p>
                  Ta gjerne kontakt med dem for forespørsler om større oppdrag.
                </p>
                <p>
                  Jeg kan i noen tilfeller vurdere avgrensede oppdrag av mindre
                  omfang som frilanser. Det vil normalt være en blogg,
                  landingsside eller en liten applikasjon.
                </p>
                <p>
                  Det forutsetter fleksible tidsfrister siden dagarbeidet kommer
                  i første rekke.
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
                Jeg spesialiserer meg innen frontend og har med min bakgrunn
                innen webkommunikasjon og webjournalistikk innsikt og interesse
                for en god brukeropplevelse.
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
                Designet er en hyllest til mitt favoritt-strategispill,{" "}
                <a href="https://en.wikipedia.org/wiki/UFO:_Enemy_Unknown">
                  XCOM: Enemy Unknown
                </a>{" "}
                fra 1994. Jeg har tatt elementer fra menyer og grensesnitt i
                spillet og kodet det opp med CSS.
              </p>
            }
            selectedQuestion={selectedQuestion}
            setSelectedQuestion={setSelectedQuestion}
            id={4}
          />
        </Content>
        <Nav>
          <ButtonLink
            style={{ maxWidth: "230px" }}
            to="/"
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
  const transitions = useTransition(selectedQuestion === id, null, {
    from: {
      maxHeight: "0vh",
      opacity: 0,
      overflow: "hidden",
      padding: 0,
      margin: 0,
    },
    enter: { maxHeight: "200vh", opacity: 1 },
    leave: { maxHeight: "0vh", opacity: 0 },
  })

  return (
    <div style={{ width: "100%" }}>
      <QnAHeading
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
      </QnAHeading>

      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              <div
                style={{
                  backgroundColor: `rgba(0, 0, 0, 0.4)`,
                  padding: "1rem",
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                {answer}
              </div>
            </animated.div>
          )
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

    a {
      color: ${babyBlue};
      text-shadow: 1px 1px 0px #0c2c64, -1px -1px 0px #0c2c64,
        -1px 1px 0px #0c2c64, 1px -1px 0px #0c2c64;
      font-size: 2rem;
      text-decoration: none;
    }
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

const QnAHeading = styled.h2`
  color: ${mainGreen};
  font-size: 1.8rem;

  text-shadow: 2px 2px 0px ${darkestGreen}, -2px -2px 0px ${darkestGreen},
    -2px 2px 0px ${darkestGreen}, 2px -2px 0px ${darkestGreen};
  cursor: inherit;
  :hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`
