import React from "react"
import AboutMeTemplate from "../../templates/aboutMeTemplate"

export default function AboutPage1() {
  const nextLink = "/om"
  const prevLink = "/om"
  return (
    <AboutMeTemplate nextLink={nextLink} prevLink={prevLink}>
      Test
    </AboutMeTemplate>
  )
}
