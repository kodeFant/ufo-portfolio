import styled from "@emotion/styled"
const borderImg = require("../images/border.png")

export const ModalContainer = styled.div`
  background-color: black;
  color: white;
  border: 20px solid #65cdbd;
  border-image: url(${borderImg}) 20;
  padding: 1rem;
  width: 100%;
  height: 100%;
`
