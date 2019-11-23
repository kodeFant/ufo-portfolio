import React, { useRef, useEffect } from "react"
const clickSound = require("../sounds/click.mp3")

export default function ClickSound() {
  const audio = useRef<HTMLAudioElement>(null)
  useEffect(() => {
    if (audio.current) {
      audio.current.volume = 0.1
      audio.current.play()
    }
  })
  return (
    <audio ref={audio} id="audio">
      <source src={clickSound} type="audio/mpeg" />
    </audio>
  )
}
