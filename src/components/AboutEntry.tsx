import React from "react"
import styled from "@emotion/styled"

interface IAboutEntry {
  name: string
  value: string
}

export default function AboutEntry({ name, value }: IAboutEntry) {
  return (
    <div style={{ margin: 0 }}>
      <AboutEntryName>{name} </AboutEntryName>
      {value}
    </div>
  )
}

const AboutEntryName = styled.span`
  text-transform: uppercase;
  color: #84b0dc;
  text-shadow: 2px 2px 0px #0c2c64, -2px -2px 0px #0c2c64, -2px 2px 0px #0c2c64,
    2px -2px 0px #0c2c64;
`
