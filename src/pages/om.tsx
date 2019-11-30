import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import AboutMeTemplate from "../templates/aboutMeTemplate"
import { mq } from "../elements/MediaQuery"

interface IAboutPage {
  data: {
    allMarkdownRemark: {
      edges: PageNode[]
    }
  }
}

type TechObject = {
  [key: string]: number
}

function AboutPage({ data }: IAboutPage) {
  const nextLink = "/om/biografi"
  const prevLink = "/om/biografi"
  const { edges } = data.allMarkdownRemark
  const techData = edges.map(edge => edge.node.frontmatter.tech)
  const techObject = techData.reduce<TechObject>((acc, cur) => {
    let data = { ...acc }
    cur.forEach(tech => {
      if (data[tech] >= 1) {
        data[tech] = data[tech] + 1
      } else if (!data[tech]) {
        data[tech] = 1
      }
    })
    return data
  }, {})
  const maxExperienceLength = Math.max(...Object.values(techObject))
  return (
    <AboutMeTemplate nextLink={nextLink} prevLink={prevLink}>
      <Main>
        <div style={{ padding: "0.5rem" }}>
          Mest brukte teknologier (antall ganger benyttet)
        </div>
        <SkillChart>
          {Object.keys(techObject)
            .sort((a, b) => {
              const aValue = techObject[a]
              const bValue = techObject[b]
              return bValue - aValue
            })
            .map((entry, index) => {
              if (index <= 9) {
                return (
                  <Bar
                    key={index}
                    name={entry}
                    value={techObject[entry]}
                    background={barColors[index].background}
                    border={barColors[index].border}
                    max={maxExperienceLength}
                    isLast={index === 9}
                  />
                )
              }
            })}
        </SkillChart>
      </Main>
    </AboutMeTemplate>
  )
}

export default AboutPage

// Main
const Main = styled.main`
  grid-area: main;
`

const SkillChart = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  border-top: 4px solid #d8d9e8;
  border-bottom: 4px solid #d8d9e8;
`

interface IBar {
  name: string
  value: number
  background: string
  border: string
  max: number
  isLast: boolean
}

function Bar({ name, value, background, border, max, isLast }: IBar) {
  return (
    <GraphEntry max={max} isLast={isLast}>
      <div className="name">{name}</div>
      <div className="value">{value}</div>
      <div className="bar">
        <Line count={value} background={background} border={border} />
      </div>
    </GraphEntry>
  )
}

interface IGraphEntry {
  max: number
  isLast: boolean
}

const GraphEntry = styled.div<IGraphEntry>`
  display: grid;
  grid-template-columns: 5fr 2fr 5fr;
  background: linear-gradient(
    90deg,
    rgba(0, 12, 32, 1) 0%,
    rgba(64, 36, 104, 1) 33%,
    rgba(64, 36, 104, 1) 66%,
    rgba(0, 12, 32, 1) 100%
  );

  ${mq[1]} {
    grid-template-columns: 5fr 100px 7fr;
  }

  .name {
    padding: 0.5rem;
    color: #edc8c1;
    text-shadow: 2px 2px 0px #752850, -2px -2px 0px #752850,
      -2px 2px 0px #752850, 2px -2px 0px #752850;
    text-transform: uppercase;
    border: 4px solid #d8d9e8;
    border-top: 0;
    font-size: 1.3rem;
    border-bottom: ${({ isLast }) => (isLast ? "0" : "4px solid #d8d9e8")};

    ${mq[0]} {
      font-size: 1.5rem;
      grid-template-columns: 5fr 100px 7fr;
    }

    ${mq[1]} {
      font-size: 2rem;
      grid-template-columns: 5fr 100px 7fr;
    }
  }

  .value {
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 4px solid #d8d9e8;
    border-right: 4px solid #d8d9e8;
    background-color: #402d48;
    border: 4px solid #d8d9e8;
    border-top: 0;
    border-left: 0;
    border-bottom: ${({ isLast }) => (isLast ? "0" : "4px solid #d8d9e8")};
  }

  .bar {
    display: grid;
    grid-template-columns: repeat(${({ max }) => max}, 1fr);
    align-items: center;
    border-right: 4px solid #d8d9e8;
  }
`

interface ILine {
  count: number
  background: string
  border: string
}

const Line = styled.div<ILine>`
  ${({ count, background = "#305ca0", border = "#a8cff0" }) =>
    `background-color: ${background};
    grid-column-start: 1;
    grid-column-end: ${count};
    height: 50%;
    border: 4px ${border} solid;
    border-left: 0;`}
`

interface BarColor {
  border: string
  background: string
}

const barColors: BarColor[] = [
  { border: "#d0e35f", background: "#386f14" },
  { border: "#fcfc78", background: "#a07020" },
  { border: "#fc7878", background: "#9c2121" },
  { border: "#ececf8", background: "#787094" },
  { border: "#fcd002", background: "#9c3800" },
  { border: "#a8cff0", background: "#305ca0" },
  { border: "#b9a059", background: "#5c2c11" },
  { border: "#ececf8", background: "#787094" },
  { border: "#f8f8f8", background: "#886f68" },
  { border: "#f8dcd4", background: "#985868" },
]

export const pageQuery = graphql`
  query TechQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            tech
          }
        }
      }
    }
  }
`

interface PageNode {
  node: {
    frontmatter: {
      tech: string[]
    }
  }
}
