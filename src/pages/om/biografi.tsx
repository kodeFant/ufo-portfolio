import React from "react"
import AboutMeTemplate from "../../templates/aboutMeTemplate"
import { AboutHeader } from "../../elements/Headers"
import styled from "@emotion/styled"
import { babyBlue } from "../../utilities/Colors"
import { useImmer } from "use-immer"
import { mq } from "../../elements/MediaQuery"
const lilloPhoto = require("../../images/lillo-photo.png")
const lilloPixel = require("../../images/lillo-pixel.png")
const blueBorder = require("../../images/border-blue.png")

export default function AboutPage1() {
  const nextLink = "/om"
  const prevLink = "/om"
  const [lilloImg, setLilloImg] = useImmer(lilloPixel)
  return (
    <AboutMeTemplate nextLink={nextLink} prevLink={prevLink}>
      <BiographyContainer>
        <div className="text">
          <img
            src={lilloImg}
            className="image"
            onMouseEnter={() => setLilloImg(() => lilloPhoto)}
            onMouseLeave={() => setLilloImg(() => lilloPixel)}
            alt=""
          />
          <div style={{ height: "40px" }} />
          <AboutHeader>Arbeidsbakgrunn</AboutHeader>
          <p>
            Jeg startet arbeidslivet som webjournalist og web-basert
            kommunikasjonsrådgiver. Nå utvikler jeg apper og nettsider. Jeg
            jobber som konsulent for <a href="https://kantega.no">Kantega</a>.
          </p>
          <AboutHeader>Foretrukne teknologier</AboutHeader>
          <p>
            Det funksjonelle språket Elm gir pålitelig kode for webapper som
            krever mindre vedlikehold. Det kommer også kunden til gode.
          </p>
          <p>
            På blogger og statiske sider velger jeg ofte GatsbyJS med React og
            TypeScript.
          </p>
        </div>
      </BiographyContainer>
    </AboutMeTemplate>
  )
}

const BiographyContainer = styled.div`
  padding: 1rem;
  overflow-y: auto;
  font-size: 2rem;
  background: rgb(0, 0, 0);
  display: flex;
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

  .image {
    ${mq[1]} {
      float: right;
      padding: 3rem;
      padding-right: 0;
    }
    width: 100%;
    max-width: 500px;

    shape-outside: polygon(
      30.4% 115px,
      45.99% 8.82%,
      71.59% 9%,
      87.93% 20.42%,
      88.25% 49.84%,
      78.8% 71.4%,
      100.28% 90.32%,
      100.27% 99.86%,
      -1.2% 99.8%,
      -0.81% 94.89%,
      31.38% 78.87%,
      116px 48.4%,
      29.49% 37.04%
    );
  }
`
