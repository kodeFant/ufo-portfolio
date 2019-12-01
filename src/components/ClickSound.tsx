import React, { useRef, useEffect } from "react"
import { useImmer } from "use-immer"
const clickSound = require("../sounds/click.mp3")

export default function ClickSound() {
  const audio = useRef<HTMLAudioElement>(null)
  const [played, setPlayed] = useImmer(false)
  useEffect(() => {
    if (audio.current && !played) {
      audio.current.volume = 0.1
      audio.current.play()
      setPlayed(() => true)
    }
  }, [played])
  return (
    <audio ref={audio} id="audio">
      <source src={clickSound} type="audio/mpeg" />
    </audio>
  )
}
