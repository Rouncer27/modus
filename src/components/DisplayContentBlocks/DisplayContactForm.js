import React, { useState } from "react"
import styled from "styled-components"
import { standardWrapper } from "../../styles/helpers"

import submitToServer from "../shared/formParts/functions/submitToServer"
import InputField from "../shared/formParts/InputField"
import TextareaField from "../shared/formParts/TextareaField"
import SubmitButton from "../shared/formParts/SubmitButton"

import FormError from "../models/FormError"
import FormSuccess from "../models/FormSuccess"
import FormSubmitting from "../models/FormSubmitting"

import {
  handleOnChange,
  handleOnSubmit,
} from "../shared/formParts/functions/formFunctions"

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

  if (!data.display) return null

  return (
    <StyledSection>
      <div className="wrapper">
        <form
          onSubmit={event =>
            handleOnSubmit(
              event,
              setFormStatus,
              formData,
              submitToServer,
              data.contactFormId,
              clearFormFields,
              formStatus
            )
          }
        >
          <InputField
            value={formData.firstName}
            handler={event => handleOnChange(setFormData, formData, event)}
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
            handler={event => handleOnChange(setFormData, formData, event)}
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
            handler={event => handleOnChange(setFormData, formData, event)}
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
            handler={event => handleOnChange(setFormData, formData, event)}
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
            handler={event => handleOnChange(setFormData, formData, event)}
            errors={formStatus.errors}
            size="full"
            position="last"
            title="Questions or Comments"
            type="text"
            nameId="questionsComments"
            required={true}
            rows="5"
          />
          <SubmitButton />
        </form>
      </div>

      {formStatus.submitting && <FormSubmitting />}
      {formStatus.success && (
        <FormSuccess
          setFormStatus={setFormStatus}
          formStatus={formStatus}
          clearFormFields={clearFormFields}
        />
      )}
      {formStatus.errorWarnDisplay && (
        <FormError setFormStatus={setFormStatus} formStatus={formStatus} />
      )}
    </StyledSection>
  )
}

const StyledSection = styled.div`
  .wrapper {
    ${standardWrapper};
    margin-top: 0;
    padding-top: 0;
  }

  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`

export default DisplayContactForm
