import React from "react";
import {
  Button,
  FormControl,
  Textarea,
  FormErrorMessage,
  FormLabel,
  Spinner
} 
from "@chakra-ui/react";
import { saveReportOfProblem } from "../../API/Voter";
import { Field, Form, Formik } from "formik";
import Navbar from "../Navbar/Navbar";
import { ReportingConfirmation } from "./ReportingConformation";
import { useState } from "react";
import "./Reporting.css";

export default function Reporting() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateText = (value) => {
    if (value === "") {
      return "Input field cannot be empty";
    }
  };

  const handleSubmit = async (value) => {
    setIsSubmitting(true);
    await saveReportOfProblem(value.text);
    document.querySelector("#reporting-form").style.display = "none";
    document.querySelector("#reporting-confirmation").style.visibility =
      "visible";
  };

  return (
    <div>
      <Navbar />
      <div className="outer-page-container">
        <div className="inner-page-container-narrow">
          <div id="reporting-form">
            <h1 className="blue-text">Report a problem</h1>
            <Formik initialValues={{ text: "" }} onSubmit={handleSubmit}>
              {({ errors, touched }) => (
                <Form>
                  <FormControl isInvalid={!!errors.text && touched.text}>
                    <FormLabel marginBottom={"1rem"}>
                      Below you can report any kind of problems, you have
                      experienced in General Election 2023.
                    </FormLabel>
                    <Field
                      as={Textarea}
                      name="text"
                      type="text"
                      className="report-form"
                      placeholder="Describe your problem(s) here"
                      validate={validateText}
                    />
                    <FormErrorMessage className="error-message-voting-system">
                      {errors.text}
                    </FormErrorMessage>
                  </FormControl>
                  <Button className="blue-btn" type="submit"  disabled={isSubmitting}>
                  {isSubmitting && <Spinner size="sm" mr={"1rem"} />} Send
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
          <ReportingConfirmation
            id="reporting-confirmation"
            visibility={"hidden"}
          />
        </div>
      </div>
    </div>
  );
}
