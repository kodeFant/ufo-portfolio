import React from "react"
import ModalState from "./modal"

interface IProviders {
  children: React.ReactNode
}

export default function Providers({ children }: IProviders) {
  return <ModalState.Provider>{children}</ModalState.Provider>
}
