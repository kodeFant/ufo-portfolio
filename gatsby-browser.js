/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import "typeface-fira-mono"
import ModalState from "./src/state/modal"

export const wrapRootElement = ({ element }) => (
  <ModalState.Provider>{element}</ModalState.Provider>
)
