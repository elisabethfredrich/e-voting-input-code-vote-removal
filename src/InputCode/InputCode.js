import { useState, useEffect } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  FormErrorMessage,
  Box,
  UnorderedList,
  ListItem,
  Checkbox
} from "@chakra-ui/react";

import { Field, Form, Formik } from "formik";
import "./InputCode.css";
import { useNavigate } from "react-router-dom";
import getCurrentUser, {
  saveVerificationCode
} from "../API/Voter";

export default function InputCode() {
  const navigate = useNavigate();
  const [userCodeInput, setUserCodeInput] = useState("");
  const [checked, setChecked] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [disabledButton, setDisabled] = useState(true);
  const voter = getCurrentUser();

  const handleChangeCodeInput = (e) => {
    setUserCodeInput(e.target.value);
    console.log(...userCodeInput);
  };

  function validateCode(value) {
    let error = "";
    const regex = /[a-zA-Z]/;
    const regexNumber = /\d/;
    const doesItHaveLetter = regex.test(value);
    const doesItHaveNumber = regexNumber.test(value);

    if (!value) {
      error = "This field is required";
    } else if (value.length < 8) {
      error = "The code must be longer than 8 characters";
    } else if (value.length > 20) {
      error = "The code must be shorter than 20 characters";
    } else if (doesItHaveLetter === false) {
      error = "The code must contain at least one letter.";
    } else if (doesItHaveNumber === false) {
      error = "The code must contoain at least one number";
    }
    return error;
  }

  const handleSubmit = async (values, actions) => {
    const generatedCode = generateCode();
    const verificationCode = values.name + "-" + generatedCode;
    saveVerificationCode(verificationCode);
    setUserCodeInput(verificationCode);
    document.querySelector("#verification-code").style.display = "flex";
    actions.setSubmitting(false);
    document.querySelector("#submit-code").style.display = "none";
    document.querySelector("#input-code").disabled = "true";
  };

  //download verificationcode
  function download(verificationCode) {
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(`With this code you can verify the correctness of your vote in the General Election 2023: ${verificationCode}`)
    );
    element.setAttribute("download", "Verification_code.txt");

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  function downloadAndVote() {
    download(userCodeInput);
  }

  function generateCode() {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  function handleChange() {
    if (checked) {
      setChecked(false);
      setDisabled(true);
    } else {
      setChecked(true);
      setInvalid(false);
      setDisabled(false);
    //  document.querySelector("#error-message").style.visibility = "hidden";
    }
  }

  function handleSubmitCode() {
    if (checked) {
      navigate("/voting");
    } else {
      //document.querySelector("#error-message").style.visibility = "visible";
      setInvalid(true);
    }
  }
  useEffect(() => {
    if(voter.attributes.VerificationCode!==""){
    document.querySelector("#input-code").setAttribute("value", voter.attributes.VerificationCode.split("-")[0]);
    }
  }, []);


  return (
    <div className="page-container">
      <div className="main">
        <Box display={"flex"} flexDirection="column">
          <Box>
            <div className="space-between">
              <h1 className="blue-text">Welcome</h1>
              <Text maxW="30rem">
                In order to vote in the General Election, please provide a
                code in the input field below. The code should contain of:
              </Text>
              <UnorderedList marginTop={"0.7rem"} fontWeight="600">
                <ListItem>8-20 characters</ListItem>
                <ListItem>At least one letter</ListItem>
                <ListItem>At least one number</ListItem>
              </UnorderedList>
              <Box className="info-box">
                <Text>
                  <span className="bold-text">NB!</span> The code 
                  <span className="italic-text"> must not</span> contain any
                  sensitive information that could lead to conclusions about
                  your person. Please also avoid any passwords you use
                  elsewhere.
                </Text>
              </Box>
            </div>
            <Formik initialValues={{ name: "" }} onSubmit={handleSubmit}>
              {(props) => (
                <Form className="input-field">
                  <Field
                    name="name"
                    validate={validateCode}
                    onChange={handleChangeCodeInput}
                  >
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel color={"#1C4E81"}>
                          Enter your code here
                        </FormLabel>
                        <Input
                          id="input-code"
                          type="text"
                          placeholder="Enter your code here"
                          borderRadius={"0"}
                          borderColor={"#1C4E81"}
                          color={"#1C4E81"}
                          maxWidth="25rem"
                          {...field}
                          disabled={voter.attributes.VerificationCode!==""?true:false}
                        />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    id="submit-code"
                    mt={4}
                    bg={"var(--primary_blue)"}
                    isLoading={props.isSubmitting}
                    type="submit"
                    className="button"
                    width="min-content"
                    color="var(--secondary_blue)"
                    marginTop="2rem"
                    disabled={voter.attributes.VerificationCode!==""?true:false}
                  >
                    Next
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
          <Box
            id="verification-code"
            display={voter.attributes.VerificationCode!==""?"flex":"none"} 
            flexDirection="column"
            maxWidth={"30rem"}
            marginTop="2rem"
          >
            <div className="intro-text ">
              <p>
                Below is your unique verification code, which you will need to
                use later to check if your vote has been counted correctly. You
                should be able to recognize the first part of the code from
                above.
              </p>

              <p>
                Please download the code or save it somewhere, where you can
                find it again. Please do not share your code with others!
              </p>
            </div>

            <div className="space-between">
              <div className="verification-code">
                <h3>{voter.attributes.VerificationCode!==""?voter.attributes.VerificationCode:userCodeInput}</h3>

                <Button
                  onClick={downloadAndVote}
                  marginTop="1rem"
                  className="button"
                  bg={"var(--secondary_darkblue)"}
                  color="var(--secondary_blue)"
                  width="100%"
                >
                  <span className="material-symbols-outlined medium margin-icon">
                    download
                  </span>
                  Download
                </Button>
              </div>
            </div>
            <Checkbox
              className="check-box"
              id="checkBox"
              isChecked={checked}
              onChange={handleChange}
              isInvalid={invalid}
            >
              I have downloaded or saved my verification code.
            </Checkbox>
            <Button
              onClick={handleSubmitCode}
              marginTop="2rem"
              className="button"
              width="100%"
              disabled={disabledButton}
            >
              Vote now
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
}
