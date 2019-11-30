import React from "react"
import styled from "@emotion/styled"
import { AboutHeader } from "../elements/Headers"

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

const AboutEntryName = styled(AboutHeader)`
  display: inline;
  font-size: 2rem;
`
