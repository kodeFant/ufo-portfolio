import React from "react"
import styled from "@emotion/styled"
import { fp } from "../elements/MediaQuery"

interface IDottedField {
  entry: string
  value: string
}

export default function DottedField({ entry, value }: IDottedField) {
  const totalChars: number = 46
  const entriesLength: number = entry.length + value.length
  const dots: number[] = Array.from(Array(totalChars - entriesLength).keys())
  return (
    <div>
      {entry}
      <Dots>{dots.map(() => ".")}</Dots>
      <DataField>{value}</DataField>
    </div>
  )
}

const dataFieldResponsive = fp({
  display: ["block", "block", "block", "inline-block"],
})

const DataField = styled.span`
  color: white;
  display: block;
  &::first-letter {
    text-transform: uppercase;
  }
  ${dataFieldResponsive}
`

const dotsResponsive = fp({
  display: ["none", "none", "none", "inline"],
})

const Dots = styled.span`
  display: none;
  ${dotsResponsive}
`
