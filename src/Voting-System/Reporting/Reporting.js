/**
 * Copyright 2023 Christina Frederikke Nissen, Elisabeth Fredrich
 *
 * This file is part of  e-voting-system-self-remove.
 *
 *  e-voting-system-self-remove is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 *  e-voting-system-self-remove is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the 
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with  e-voting-system-self-remove. If not, see <https://www.gnu.org/licenses/>.
 */

import React from "react";
import {
  Button,
  FormControl,
  Textarea,
  FormErrorMessage,
  FormLabel,
  Spinner,
} from "@chakra-ui/react";
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
                  <Button
                    className="blue-btn"
                    type="submit"
                    disabled={isSubmitting}
                  >
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
