import React from "react";
import "./Welcome.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    Box
  } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { addVoter } from "../API/Voter";

export default function Welcome(){

    const [id, setID] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      addVoter(e.name);
      console.log(e.name);
      navigate("/inputcode");
     }

    function validateCode(value) {
      let error = "";  
      if (!value) {
        error = "This field is required";
      } 
      return error;
    }

    const handleChangeProlificID = (e) => {
        setID(e.target.value);
        console.log(...id);
      };

    return(
        <div className="container-dark-bg">
          <Box display={"flex"} flexDirection="column">
            <Box>
              <div className="space-between">
                <h1  className="lightblue-text">Before you start</h1>
            {/*  <Text>Please enter your Prolific ID below.</Text> */}
              </div>
              <Formik initialValues={{ name: "" }} onSubmit={handleSubmit}>
                {(props) => (
                  <Form className="input-field">
                    <Field
                      name="name"
                      validate={validateCode}
                      onChange={handleChangeProlificID}
                    >
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.name && form.touched.name}
                        >
                          <FormLabel >Please enter your Prolific ID </FormLabel>
                          <Input
                            id="prolific-id"
                            type="text"
                            placeholder="Enter your Prolific ID "
                            borderRadius={"0"}
                            _placeholder={{color: "#E7E7E7"}}
                            maxWidth="25rem"
                            {...field}
                          />
                          <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Button
                      id="submit-code"
                      mt={4}
                      isLoading={props.isSubmitting}
                      type="submit"
                      width="min-content"
                      marginTop="2rem"
                      className="light-btn"
                    >
                      Start 
                    </Button>
                  </Form>
                )}
              </Formik>
            </Box>
          
          </Box>
        </div>
    )

}