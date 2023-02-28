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
  Box,
  Text,
  Grid,
  GridItem,
  Checkbox
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { addVoter } from "../API/Voter";
import Instructions from "../assets/Instructions_e-voting.pdf";

export default function Welcome() {
  const [id, setID] = useState("");
  const [checked, setChecked] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [disabledButton, setDisabled] = useState(true);
  const [downloaded, setDownloaded] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    addVoter(e.name);
    console.log(e.name);
    navigate("/inputcode");
  };

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

  const downloadInstructions = () => {
    var element = document.createElement("a");
    element.setAttribute("href", Instructions);
    element.setAttribute("download", "General-Election-2023.txt");

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
    //document.querySelector("#start-system").removeAttribute("disabled");
    setDownloaded(true);
    if(checked){
    setDisabled(false)
    }
  };

  function handleChangeCheckbox() {
    if (checked) {
      setChecked(false);
      setDisabled(true);
    } else if(!checked && !downloaded){
      setChecked(true);
      setInvalid(false);
      setDisabled(true);
    }
    else if (!checked && downloaded){
      setChecked(true);
      setInvalid(false);
      setDisabled(false);
    }
  }

  return (
    <div className="page-container container-dark-bg">
      <Box display={"flex"} flexDirection="column" className="inner-box-start">
        <Box>
          <div className="space-between">
            <h1 className="h1-instructions">Before you start</h1>
          </div>
          <Grid className="welcome-steps-grid">
            <GridItem className="welcome-steps-numbers">
              <Text>1</Text>
            </GridItem>
            <GridItem className="welcome-steps-griditem">
                <h2 className="white-text">IMPORTANT! </h2>
                All candidates are fictional and for the purpose of this study{" "}
                <span className="bold-text">
                  you are asked to vote for Sarah Wilson.
                </span>
                <Checkbox
              className="check-box"
              id="checkBox-vote-info"
              isChecked={checked}
              onChange={handleChangeCheckbox}
            >
              I understand that this is a fictional election and I will vote for the candiate Sarah Wilson.
            </Checkbox>
            </GridItem>
            <GridItem className="welcome-steps-numbers">
              <Text className="border-circle">2</Text>
            </GridItem>
            <GridItem className="welcome-steps-griditem">
              <Text className="bold-text">
                Please download the instructions which you need to follow to
                complete the General Election 2023.{" "}
              </Text>
              <Text className="text-margin-top">
                In a real election you would get these instructions as a
                physical or digital letter by the election authorities.
              </Text>

              <Button
                id="download-instructions"
                mt={4}
                onClick={downloadInstructions}
                width="min-content"
                marginTop="2rem"
                className="light-btn"
              >
                <span className="material-symbols-outlined medium margin-icon">
                  download
                </span>
                Download
              </Button>
            </GridItem>
            <GridItem className="welcome-steps-numbers">
              <Text>3</Text>
            </GridItem>
            <GridItem className="welcome-steps-griditem">
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
                          <FormLabel>Please enter your Prolific ID </FormLabel>
                          <Input
                            id="prolific-id"
                            type="text"
                            placeholder="Enter your Prolific ID "
                            borderRadius={"0"}
                            _placeholder={{ color: "#E7E7E7" }}
                            maxWidth="25rem"
                            {...field}
                          />
                          <FormErrorMessage>
                            {form.errors.name}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Button
                      id="start-system"
                      mt={4}
                      isLoading={props.isSubmitting}
                      type="submit"
                      width="min-content"
                      marginTop="4rem"
                      className="light-btn"
                      disabled={disabledButton}
                      w="10rem"
                    >
                      Start
                    </Button>
                  </Form>
                )}
              </Formik>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
