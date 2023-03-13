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
  Checkbox,
  Flex,
  Grid,
  Spinner,
  Image
} from "@chakra-ui/react";
import { downloadFile } from "../../utils";
import { Field, Form, Formik } from "formik";
import "./VerificationCode.css";
import { useNavigate } from "react-router-dom";
import getCurrentUser, { saveVerificationCode } from "../../API/Voter";
import Navbar from "../Navbar/Navbar";
import VerificationCodeExample from "../../assets/VerificationCode_example.png";


export default function VerificationCode() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [disabledButton, setDisabled] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const voter = getCurrentUser();

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

  function handleSubmitInputCode(values, actions) {
    setIsSubmitting(true);
    document
      .querySelector("#submit-code")
      .setAttribute("disabled", isSubmitting);
    const generatedCode = generateCode();
    const verificationCode = values.inputCode + "-" + generatedCode;
    saveVerificationCode(verificationCode).then(
      (resolve) => {
        document.querySelector("#generated-verification-code").style.display =
          "flex";
        actions.setSubmitting(false);
        document.querySelector("#submit-code").style.display = "none";
        document.querySelector("#input-code").disabled = "true";
      },
      (reject) => {
        setIsSubmitting(false);
        document.querySelector("#submit-code").removeAttribute("disabled");
        document.querySelector("#submission-error").style.visibility =
          "visible";
      }
    );
  }

  function downloadVerificationCode() {
    const fileContent =
      "data:text/plain;charset=utf-8," +
      encodeURIComponent(
        `With this code you can verify the correctness of your vote in the General Election 2023: ${voter.attributes.VerificationCode}`
      );
    const title = "Verification-Code_General-Election-2023.txt";
    downloadFile(fileContent, title);
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
    }
  }

  function handleSubmitVerificationCode(value) {
    if (checked) {
      navigate("/voting");
    } else {
      setInvalid(true);
    }
  }

  useEffect(() => {
    if (voter.attributes.VerificationCode !== "") {
      document
        .querySelector("#input-code")
        .setAttribute("value", voter.attributes.VerificationCode.split("-")[0]);
    }
  }, [voter.attributes.VerificationCode]);

  return (
    <div>
      <Navbar />
      <div className="outer-page-container">
        <div className="inner-page-container-wide">
          <h1 className="blue-text">Welcome</h1>
          <Text>Welcome to the General Election 2023!</Text>
          <Text className="text-margin-top">
            In order to ensure the correctness of the election result in this
            online election, it is important that you verify your vote later in
            the process. For this purpose, you need to enter a code of your own
            choice in the input field below. This code will be the first part of
            your unique verification code. The second part will be randomly
            generated.
          </Text>
          <Text className="text-margin-top">
            In the next step, you will receive your complete verification code
            which will be linked to your vote. You will find both on the
            official results page as soon as the results are published. It will
            be looking like this:
          </Text>

          <Image
            src={VerificationCodeExample}
            mt={"2rem"}
            border={"solid 1px var(--light_grey)"}
          />
          <figcaption className="figcaption-verification-example">
            Example of verification code and vote
          </figcaption>
          <Text className="text-margin-top">Your self-chosen code should include:</Text>
          <UnorderedList marginTop={"0.7rem"} fontWeight="600">
            <ListItem>8-20 characters</ListItem>
            <ListItem>At least one letter</ListItem>
            <ListItem>At least one number</ListItem>
          </UnorderedList>
          <Box className="info-box">
            <Text>
              <span className="bold-text">NB!</span> The code
              <span className="italic-text"> must not</span> contain any
              sensitive information that could lead to conclusions about your
              person. Please also avoid any passwords you use elsewhere.
            </Text>
          </Box>
          <Formik
            initialValues={{ inputCode: "" }}
            onSubmit={handleSubmitInputCode}
          >
            {({ errors, touched }) => (
              <Form>
                <FormControl
                  isInvalid={!!errors.inputCode && touched.inputCode}
                >
                  <FormLabel mt={"2rem"}>Enter your code here</FormLabel>
                  <Field
                    className="input-field"
                    as={Input}
                    id="input-code"
                    name="inputCode"
                    type="text"
                    placeholder="Enter your code here"
                    disabled={
                      voter.attributes.VerificationCode !== "" ? true : false
                    }
                    validate={validateCode}
                  />
                  <FormErrorMessage className="error-message-voting-system">
                    {errors.inputCode}
                  </FormErrorMessage>
                </FormControl>
                <Button
                  id="submit-code"
                  type="submit"
                  className="blue-btn"
                  disabled={
                    isSubmitting
                  }
                  visibility={voter.attributes.VerificationCode === "" ? "visible" : "hidden"}
                >
                  {" "}
                  {isSubmitting && <Spinner size="sm" mr={"1rem"} />}
                  Next
                </Button>
              </Form>
            )}
          </Formik>
          <Flex
            id="generated-verification-code"
            className="generated-verification-code-container"
            display={voter.attributes.VerificationCode !== "" ? "flex" : "none"}
          >
            <Text>
              Below is your unique verification code, which you will need to use
              later to check if your vote has been counted correctly. You should
              be able to recognize the first part of the code from above.
            </Text>

            <Text className="text-margin-top">
              Please download the code or save it somewhere, where you can find
              it again. Please do not share your code with others!
            </Text>

            <Grid className="verification-code-box">
              <h3>
                {voter.attributes.VerificationCode !== "" &&
                  voter.attributes.VerificationCode}
              </h3>

              <Button onClick={downloadVerificationCode} className="blue-btn">
                <span className="material-symbols-outlined medium-icon margin-icon">
                  download
                </span>
                Download
              </Button>
            </Grid>
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
              onClick={handleSubmitVerificationCode}
              className="blue-btn"
              disabled={disabledButton}
            >
              Vote now
            </Button>
          </Flex>
        </div>
      </div>
    </div>
  );
}
