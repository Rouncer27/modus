import React, { useState, useRef } from "react"
import styled from "styled-components"
import {
  B1Black,
  BtnPrimaryGreen,
  BtnPrimaryWhite,
  standardWrapper,
} from "../../styles/helpers"

import submitToServer from "../shared/formParts/functions/submitToServer"
import InputField from "../shared/formParts/InputField"
import TextareaField from "../shared/formParts/TextareaField"

const DisplayContactForm = ({ data }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    questionsComments: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    errorWarnDisplay: false,
    success: false,
    errors: [],
    captachError: false,
  })

  const handleErrorModalClose = () => {
    setFormStatus({
      ...formStatus,
      submitting: false,
      errorWarnDisplay: false,
      success: false,
    })
  }

  const handleSuccessModalClose = () => {
    setFormStatus({
      ...formStatus,
      submitting: false,
      errorWarnDisplay: false,
      success: false,
      errors: [],
      captachError: false,
    })

    clearFormFields()
  }

  const clearFormFields = () => {
    setFormData(() => {
      return {
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
        questionsComments: "",
      }
    })
  }

  const handleOnChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleOnSubmit = async event => {
    event.preventDefault()
    // const recaptchaValue = recaptchaRef.current.getValue()
    // if (recaptchaValue === "") {
    //   setFormStatus({
    //     ...formStatus,
    //     captachError: true,
    //   })
    //   return
    // }

    setFormStatus(prevState => {
      return {
        ...prevState,
        submitting: true,
        errors: [],
      }
    })

    const formDataArray = Object.entries(formData)
    const bodyFormData = new FormData()
    formDataArray.forEach(field => {
      bodyFormData.append(field[0], field[1])
    })

    const response = await submitToServer(data.contactFormId, bodyFormData)

    if (!response.errors) {
      setFormStatus({
        ...formStatus,
        submitting: false,
        errorWarnDisplay: false,
        success: true,
        errors: [],
      })
      clearFormFields()
    } else {
      setFormStatus({
        ...formStatus,
        submitting: false,
        errorWarnDisplay: true,
        success: false,
        errors: response.errorMessages,
      })
    }
  }

  console.log("DisplayContactForm: ", data)
  return (
    <StyledSection>
      <div className="wrapper">
        <form onSubmit={handleOnSubmit}>
          <InputField
            value={formData.firstName}
            handler={handleOnChange}
            errors={formStatus.errors}
            size="half"
            position="start"
            title="First Name"
            type="text"
            nameId="firstName"
            required={true}
          />
          <InputField
            value={formData.lastName}
            handler={handleOnChange}
            errors={formStatus.errors}
            size="half"
            position="end"
            title="Last Name"
            type="text"
            nameId="lastName"
            required={true}
          />
          <InputField
            value={formData.emailAddress}
            handler={handleOnChange}
            errors={formStatus.errors}
            size="half"
            position="start"
            title="Email Address"
            type="email"
            nameId="emailAddress"
            required={true}
          />
          <InputField
            value={formData.phoneNumber}
            handler={handleOnChange}
            errors={formStatus.errors}
            size="half"
            position="end"
            title="Phone Number"
            type="text"
            nameId="phoneNumber"
            required={true}
          />
          <TextareaField
            value={formData.questionsComments}
            handler={handleOnChange}
            errors={formStatus.errors}
            size="full"
            position="last"
            title="Questions or Comments"
            type="text"
            nameId="questionsComments"
            required={true}
            rows="5"
          />

          <SubmitButton>
            <p className="required-note">
              Required fields are marked with a<span>&#42;</span>
            </p>
            <button type="submit">Submit</button>
          </SubmitButton>
        </form>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.div`
  .wrapper {
    ${standardWrapper};
  }

  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`

const SubmitButton = styled.div`
  width: 100%;
  margin-top: 2rem;
  text-align: left;

  p {
    ${B1Black};
  }

  p.required-note {
    font-size: 1.4rem;
  }

  button {
    ${BtnPrimaryGreen};
    cursor: pointer;
  }
`

export default DisplayContactForm
