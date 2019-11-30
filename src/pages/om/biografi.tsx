import React from "react"
import AboutMeTemplate from "../../templates/aboutMeTemplate"
import { AboutHeader } from "../../elements/Headers"
import styled from "@emotion/styled"
import { babyBlue, darkestGreen, blackishGreen } from "../../utilities/Colors"

export default function AboutPage1() {
  const nextLink = "/om"
  const prevLink = "/om"
  return (
    <AboutMeTemplate nextLink={nextLink} prevLink={prevLink}>
      <BiographyContainer>
        <AboutHeader>Arbeidsbakgrunn</AboutHeader>
        <p>
          Jeg startet arbeidslivet som webjournalist og web-basert
          kommunikasjonsrådgiver, men skiftet beite da jeg innså hvor givende
          det er å utvikle apper og nettsider. Jeg jobber som konsulent for{" "}
          <a href="https://kantega.no">Kantega</a>. Jobben utfordrer meg
          konstant, og jeg opplever at jeg hele tiden vokser i rollen.
        </p>
        <AboutHeader>Foretrukne teknologier</AboutHeader>
        <p>
          Jeg syns det er spennende å lære nye språk og frontendrammeverk, men
          jeg har noen favoritter.
        </p>
        <p>
          Jeg foretrekker det funksjonelle språket Elm der det er rom for det.
          Hovedgrunnen er mer pålitelig kode som krever mindre vedlikehold. Det
          kommer også kunden til gode.
        </p>
        <p>
          Når det kommer til blogger og statiske sider syns jeg React/Gatsby med
          TypeScript er dynamitt.
        </p>
      </BiographyContainer>
    </AboutMeTemplate>
  )
}

const BiographyContainer = styled.div`
  padding: 1rem;
  font-size: 2rem;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 12, 32, 1) 100%
  );
  a {
    color: ${babyBlue};
    text-shadow: 1px 1px 0px #0c2c64, -1px -1px 0px #0c2c64,
      -1px 1px 0px #0c2c64, 1px -1px 0px #0c2c64;
    font-size: 2rem;
    text-decoration: none;
  }
`
