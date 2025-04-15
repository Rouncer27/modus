import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import {
  standardWrapper,
  colors,
  B2Black,
  B1Black,
  BtnPrimaryGreen,
} from "../../styles/helpers"

const DisplaySalesForce = ({ data }) => {
  if (!data.display) return null // Render nothing if display hasn't been checked yet.

  const phoneInput = useRef(null)
  const recaptchaRef = useRef(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  let location = null
  if (typeof window !== "undefined") {
    location = window.location
  }

  useEffect(() => {
    if (location !== null) {
      // Check URL parameters for success status
      const searchParams = new URLSearchParams(location.search)
      if (searchParams.get("status") === "success") {
        setShowSuccessMessage(true)
      }
    }
  }, [])

  useEffect(() => {
    const handleInput = e => {
      e.target.value = e.target.value.replace(/[^0-9\s\-+]/g, "")
    }

    const inputElement = phoneInput.current
    inputElement.addEventListener("input", handleInput)

    return () => {
      inputElement.removeEventListener("input", handleInput)
    }
  }, [])

  useEffect(() => {
    const script = document.createElement("script")
    script.src =
      "https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    // Wait for the script to load before rendering reCAPTCHA
    window.onloadCallback = () => {
      if (window.grecaptcha && recaptchaRef.current) {
        window.grecaptcha.render(recaptchaRef.current, {
          sitekey: "6Ldqkw4rAAAAAHTOoT_3Aw0AxYLDfE_MHKoxRyF0", // Replace with your real site key
        })
      }
    }

    return () => {
      document.body.removeChild(script) // Clean up on unmount
    }
  }, [])

  // 2️⃣ Handle form submit with reCAPTCHA check
  const handleSubmit = e => {
    const captchaResponse = window.grecaptcha?.getResponse()
    if (!captchaResponse) {
      e.preventDefault()
      alert("Please complete the reCAPTCHA to submit the form.")
    }
  }

  return (
    <StyledSection>
      {/* <script
        src="https://www.google.com/recaptcha/api.js"
        async
        defer
      ></script> */}
      <div className="wrapper">
        {showSuccessMessage && (
          <div className="success-message-modal">
            <div className="success-message-modal-inner">
              <p>Thank you! Your submission has been received successfully.</p>
              <button
                type="button"
                onClick={() => {
                  setShowSuccessMessage(false)
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Dau00000627Es"
          method="POST"
        >
          <input
            type="hidden"
            name="captcha_settings"
            value='{"keyname":"Modus_API_Key_Pair","fallback":"true","orgId":"00Dau00000627Es","ts":""}'
          ></input>
          <input type="hidden" name="oid" value="00Dau00000627Es" />
          <input
            type="hidden"
            name="retURL"
            value="https://modus.ca/contact-us?status=success"
          />
          <input type="hidden" name="lead_source" value="Web" />
          <input type="hidden" name="country" value="Canada" />

          <label htmlFor="first_name">
            First Name <span className="required">&#42;</span>
          </label>
          <input
            id="first_name"
            name="first_name"
            size="20"
            type="text"
            minLength="2"
            maxLength="50"
            required={true}
          />
          <br />

          <label htmlFor="last_name">
            Last Name <span className="required">&#42;</span>
          </label>
          <input
            id="last_name"
            name="last_name"
            size="20"
            type="text"
            minLength="1"
            maxLength="50"
            required={true}
          />
          <br />

          <label htmlFor="email">
            Email <span className="required">&#42;</span>
          </label>
          <input
            id="email"
            name="email"
            size="20"
            type="email"
            required={true}
          />
          <br />

          <label htmlFor="phone">
            Phone <span className="hint">(eg: +1-800-123-6789)</span>
          </label>
          <input
            ref={phoneInput}
            id="phone"
            name="phone"
            size="20"
            type="tel"
            pattern="^\+?[0-9][0-9\s-]{6,14}$"
            minLength="7"
            maxLength="15"
            title="Enter a valid phone number with 7 to 15 digits, allowing spaces, dashes, and an optional leading plus sign."
          />
          <br />

          <label htmlFor="company">
            Company <span className="required">&#42;</span>
          </label>
          <input
            id="company"
            name="company"
            size="20"
            type="text"
            maxLength="100"
            required={true}
          />
          <br />

          <label htmlFor="city">
            City <span className="required">&#42;</span>
          </label>
          <input
            id="city"
            name="city"
            size="20"
            type="text"
            maxLength="50"
            required={true}
          />
          <br />

          <label htmlFor="state">
            State/Province <span className="required">&#42;</span> :
          </label>
          <select id="state" name="state" required={true}>
            <option value="">--None--</option>
            <option value="Alberta">Alberta</option>
            <option value="British Columbia">British Columbia</option>
            <option value="Saskatchewan">Saskatchewan</option>
            <option value="Manitoba">Manitoba</option>
            <option value="Ontario">Ontario</option>
            <option value="Quebec">Quebec</option>
            <option value="Prince Edward Island">Prince Edward Island</option>
            <option value="New Brunswick">New Brunswick</option>
            <option value="Nunavut">Nunavut</option>
            <option value="Nova Scotia">Nova Scotia</option>
            <option value="Northwest Territories">Northwest Territories</option>
            <option value="Yukon Territories">Yukon Territories</option>
          </select>
          <br />

          <label htmlFor="00Nau0000058etR">Message/Inquiry</label>
          <textarea
            id="00Nau0000058etR"
            name="00Nau0000058etR"
            rows="3"
            type="text"
            wrap="soft"
          ></textarea>
          <br />

          <div
            ref={recaptchaRef}
            className="g-recaptcha"
            data-sitekey="6Ldqkw4rAAAAAHTOoT_3Aw0AxYLDfE_MHKoxRyF0"
          ></div>

          <input type="submit" name="submit" />
        </form>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.div`
  .wrapper {
    ${standardWrapper};
    margin-top: 0;
    padding-top: 0;
  }

  .success-message-modal {
    position: fixed;
    z-index: 5000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);
    background: rgba(0, 0, 0, 0.4);

    &-inner {
      background-color: ${colors.white};
      width: calc(100% - 4rem);
      padding: 5rem 2rem;
      margin: auto;
      text-align: center;

      @media (min-width: 768px) {
        width: 60rem;
      }

      p {
        ${B1Black};
      }

      button {
        ${BtnPrimaryGreen};
        margin-top: 2rem;
      }
    }
  }

  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  .g-recaptcha {
    margin-top: 2rem;
    margin-right: auto;
    margin-bottom: 2rem;
    margin-left: 1rem;
  }

  label {
    ${B2Black};
    display: block;
    width: 100%;
    line-height: 1.5;

    width: calc(100%);
    margin: 1rem auto;
    padding: 1rem 0;

    @media (min-width: 768px) {
      width: calc(100% - 2rem);
      margin-right: 1rem;
      margin-left: 1rem;
    }

    &:hover {
      color: ${colors.colorPrimary};
      cursor: initial;
    }

    .error-message {
      display: none;
    }

    .error-active {
      display: inline-block;
      color: red;
      padding-left: 2rem;
    }

    .hint {
      font-size: 1.2rem;
    }
  }
  input,
  textarea,
  select {
    display: block;
    margin-top: 0.25rem;
    margin-bottom: 0.5rem;
    padding: 0.9rem 1rem;
    border-radius: 0;
    color: #444;
    margin-left: 0;
    margin-right: 0;
    width: 100%;
    border: none;
    border: 0.1rem ${colors.colorSecondary} solid;

    width: calc(100%);
    margin: 1rem auto;

    @media (min-width: 768px) {
      width: calc(100% - 2rem);
      margin-right: 1rem;
      margin-left: 1rem;
    }
  }

  textarea {
    border: 0.1rem ${colors.colorSecondary} solid;
  }

  input[type="submit"] {
    ${BtnPrimaryGreen};
    cursor: pointer;
  }
`

export default DisplaySalesForce
