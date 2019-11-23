import React, { useState, useEffect } from "react"
import Backdrop from "./Backdrop"
import { ModalContainer } from "../../elements/Modal"
import ModalState from "../../state/modal"
import { useTransition, animated } from "react-spring"
import { Button } from "../../elements/Button"
import { css } from "@emotion/core"
import { useImmer } from "use-immer"
import styled from "@emotion/styled"
import { Formik, Form, Field, FormikProps, ErrorMessage } from "formik"
import axios from "axios"
import { Heading2 } from "../../elements/Headers"
import * as yup from "yup"
import {
  lighterGreen,
  blackishGreen,
  lightestGreen,
  mainGreen,
} from "../../utilities/Colors"

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Må være gyldig epost")
    .required("Påkrevd felt"),
  message: yup.string().required("Legg igjen beskjed"),
})

interface IForm {
  email: string
  message: string
}

const initialValues: IForm = { email: "", message: "" }

enum FormStage {
  EMAIL = "EMAIL",
  MESSAGE = "MESSAGE",
  SENT = "SENT",
}

const { EMAIL, MESSAGE, SENT } = FormStage

export default function ContactModal() {
  const [formStage, setFormStage] = useImmer(EMAIL)

  const nextButton = (
    formStage: FormStage,
    { errors, touched, setFieldTouched }: FormikProps<IForm>
  ) => {
    if (formStage == EMAIL) {
      setFieldTouched("email", true)
      console.log(errors.email)
      if (touched.email && errors.email === undefined) {
        setFormStage(() => MESSAGE)
      }
    }
    if (formStage == SENT) {
      setModalState(() => false)
    }
  }

  const { closeModal } = ModalState.useContainer()
  const [open, setModalState] = useState(true)
  const transitions = useTransition(open, null, {
    from: { height: "50px" },
    enter: { height: "300px" },
    leave: () => {
      return { height: "50px" }
    },
    config: { duration: 200 },
  })

  useEffect(() => {
    if (open === false) {
      setTimeout(() => {
        closeModal()
      }, 300)
    }
  }, [open])

  return (
    <Backdrop>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={{ ...props, width: "700px", maxWidth: "100%" }}
            >
              <ModalContainer
                css={css`
                  & {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    overflow: hidden;
                    background-color: ${blackishGreen};
                  }
                `}
                onClick={(e: React.SyntheticEvent) => {
                  e.stopPropagation()
                }}
              >
                <Formik
                  initialValues={initialValues}
                  onSubmit={values => {
                    console.log("Submit :)", values)

                    axios({
                      method: "POST",
                      headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                      },
                      url: "/",
                      params: { "form-name": "contact", ...values },
                    })
                      .then(() => {
                        console.log("Success")
                        setFormStage(() => SENT)
                      })
                      .catch(err => {
                        console.error("Form Error", err)
                      })
                  }}
                  validationSchema={validationSchema}
                >
                  {props => {
                    return (
                      <StyledForm>
                        <Heading2 style={{ color: lighterGreen }}>
                          {formStage === EMAIL && "Fyll inn din epost"}
                          {formStage === MESSAGE && "Skriv beskjed"}
                        </Heading2>
                        <FormFieldContainer>
                          {formStage === EMAIL && (
                            <>
                              <StyledInput
                                type="text"
                                name="email"
                                autoComplete="off"
                                autoFocus={true}
                              />
                              <ErrorMessage name="email" />
                            </>
                          )}
                          {formStage === MESSAGE && (
                            <>
                              <StyledInput
                                name="message"
                                component="textarea"
                                autoFocus={true}
                                spellCheck={false}
                                style={{ color: "white" }}
                              />
                              <ErrorMessage name="email" />
                            </>
                          )}
                          {formStage === SENT && (
                            <div>Takk. Din henvendelselse er sendt.</div>
                          )}
                        </FormFieldContainer>
                        <ButtonPairContainer>
                          {formStage !== SENT && (
                            <Button
                              onClick={() => {
                                setModalState(false)
                              }}
                              type="button"
                              css={css`
                                & {
                                  width: 100%;
                                  padding: 0;
                                }
                              `}
                            >
                              Avbryt
                            </Button>
                          )}
                          <Button
                            onClick={e => {
                              if (formStage !== MESSAGE) {
                                e.preventDefault()
                              }
                              nextButton(formStage, props)
                            }}
                            css={css`
                              & {
                                width: 100%;
                                padding: 0;
                              }
                            `}
                            type={formStage === MESSAGE ? `submit` : `button`}
                          >
                            {formStage === SENT ? "Ok" : "Neste"}
                          </Button>
                        </ButtonPairContainer>
                      </StyledForm>
                    )
                  }}
                </Formik>
              </ModalContainer>
            </animated.div>
          )
      )}
    </Backdrop>
  )
}

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const StyledInput = styled(Field)`
  background-color: transparent;
  border: 0;
  color: ${lighterGreen};
  font-size: 3rem;
  padding: 0 2rem;
`

const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ButtonPairContainer = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: 1fr;
`
