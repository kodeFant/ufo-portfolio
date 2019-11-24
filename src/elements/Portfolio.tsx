import styled from "@emotion/styled"
import { Container } from "../components/Containers"
import { Link } from "gatsby"
import { mq, fp } from "../elements/MediaQuery"
const blueBorder = require("../images/border-blue.png")

const responsivePortfolioContainer = fp({
  gridTemplateColumns: [`1fr`, `1fr 1fr 300px`, `1fr 1fr 350px`],
  gridTemplateRows: [`auto auto auto`, `auto auto auto`, `5fr 38fr 57fr`],
  fontSize: [`1.8rem`, `1.8rem`, `2rem`, `2.2rem`, `2.5rem`],
  gridTemplateAreas: [
    `
    "nav"
    "icon"
    "data"
    "desc"
    `,
    `
    "nav"
    "icon"
    "data"
    "desc"
    `,
    `
    "nav  nav  icon"
    "data data icon"
    "desc desc desc"
    `,
  ],
})

export const PortfolioContainer = styled(Container)`
  background: rgb(64, 36, 104);
  background: radial-gradient(
    circle,
    rgba(64, 36, 104, 1) 0%,
    rgba(0, 12, 32, 1) 100%
  );
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: start;
  align-items: start;
  grid-gap: 1rem;
  padding: 0;
  text-align: left;
  ${responsivePortfolioContainer}
`

export const PortfolioNav = styled.nav`
  grid-area: nav;
  display: flex;
  padding: 0.5rem;
  width: 100%;
  justify-content: center;

  ${mq[0]} {
    justify-content: flex-start;
  }
`

export const PortfolioNavLink = styled(Link)`
  background-color: #b8b9d0;
  color: #c7c8dc;
  padding: 0.3rem;
  text-shadow: 2px 2px 0px #9c98b9, -2px -2px 0px #9c98b9, -2px 2px 0px #9c98b9,
    2px -2px 0px #9c98b9;
  text-decoration: none;
  width: 90px;
  margin-right: 0.5rem;
  text-align: center;

  &:active {
    color: #9c98b9;
    text-shadow: 2px 2px 0px #c7c8dc, -2px -2px 0px #c7c8dc,
      -2px 2px 0px #c7c8dc, 2px -2px 0px #c7c8dc;
  }
`

export const PortfolioData = styled.aside`
  grid-area: data;
  padding: 0 2rem;
  color: #84b0dc;
  text-shadow: 4px 4px 0px #00103d, -4px -4px 0px #00103d, -4px 4px 0px #00103d,
    4px -4px 0px #00103d;
`

export const PortFolioDescription = styled.div`
  grid-area: desc;
  padding: 2rem 2rem;
  color: #84b0dc;
  text-shadow: 4px 4px 0px #00103d, -4px -4px 0px #00103d, -4px 4px 0px #00103d,
    4px -4px 0px #00103d;
`

export const PortFolioIcon = styled.a`
  grid-area: icon;
  justify-self: end;
  align-self: start;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 200px;
  width: 100%;

  background-color: brown;
  background: rgb(92, 44, 15);
  background: radial-gradient(
    circle,
    rgba(92, 44, 15, 1) 0%,
    rgba(32, 5, 0, 1) 100%
  );
  color: white;

  border: 28px solid #65cdbd;
  border-image: url(${blueBorder}) 28;
  border-radius: 22px;

  text-decoration: none;

  ${mq[1]} {
    height: 350px;
    width: 350px;
  }
`
