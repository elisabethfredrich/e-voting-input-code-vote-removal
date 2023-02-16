import { useState, useEffect, useContext } from "react";
//import { useNavigate } from "react-router-dom";
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
} from "@chakra-ui/react";

import { Field, Form, Formik } from "formik";
import "./InputCode.css";
import { useNavigate, UNSAFE_NavigationContext  } from "react-router-dom";


export default function InputCode() {
  const fs = require("fs");

  const navigate = useNavigate();

  const [userCodeInput, setUserCodeInput] = useState("");

  const handleChangeCodeInput = (e) => {
    setUserCodeInput(e.target.value);
    console.log(...userCodeInput);
  };

  const navigation = useContext(UNSAFE_NavigationContext).navigator;
  
   
  function validateCode(value) {
    let error = "";
    const regex = /[a-zA-Z]/;
    const regexNumber = /\d/;
    const doesItHaveLetter = regex.test(value);
    const doesItHaveNumber = regexNumber.test(value);

    if (!value) {
      error = "Du bedes venligst indtaste en kode";
    } else if (value.length < 8) {
      error = "Koden skal være længere end 8 karakterer.";
    } else if (value.length > 20) {
      error = "Koden skal være kortere end 20 karakterer.";
    }
    else if (doesItHaveLetter === false){
      error="Koden skal indeholde mindst ét bogstav."
    }
    else if (doesItHaveNumber === false){
      error="Koden skal indeholde mindst ét tal."
    }
    return error;
  }

  const handleSubmit = (values, actions) => {
    const generatedCode = makeid();
    const verificationCode = values.name + "-" + generatedCode;
    setUserCodeInput(verificationCode);
    post(verificationCode);
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
      "data:text/plain;charset=utf-8," + encodeURIComponent(verificationCode)
    );
    element.setAttribute("download", "Verifikationskode.txt");

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  function downloadAndVote() {
    download(userCodeInput);
    navigate("/voting");
  }

  function post(verificationcode) {
    let userId = Math.floor(Math.random() * 1000 + 1);

    let data = {
      id: "" + userId + "",
      vote: "Pia Olsen Dyhr",
      code: verificationcode,
    };
    console.log(data);

    fetch("http://localhost:8000/votes/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", JSON.stringify(response)));
  }

  /* Function for creating a random code */
  function makeid() {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  return (
    <div className="container">
      <div className="main">
        <Box display={"flex"} flexDirection="column">
          <Box>
            <div className="space-between">
              <h1>Welcome</h1>
              <Text maxW="30rem">
{/*                 For at stemme til Folketingsvalget, skal du udfylde en kode i feltet herunder. Koden skal indeholde: 
 */}                In order to vote in the Parliament Election, please provide a code in the input field below. The code should contain of:
              </Text>
              <UnorderedList marginTop={"0.7rem"} fontWeight="600">
                
                <ListItem>8-20 characters</ListItem>
                <ListItem>At least one letter</ListItem>
                <ListItem>At least one number</ListItem>
              </UnorderedList>
              <Box className="info-box">
{/*                 <Text><span className="bold-text">OBS!</span> Koden må <span className="underlined-text">ikke</span> indeholde sensitiv information f.eks. CPR-nummer eller kodeord, du bruger andre steder.</Text>       
 */}                <Text><span className="bold-text">NB!</span> This code will be visible on a public website in connection with your vote and should therefore only be known to you. The code <span className="underlined-text">must not</span> contain any sensitive information that could lead to conclusions about your person. Please also avoid any passwords you use elsewhere.</Text>       
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
                        <FormLabel color={"#1C4E81"}>Enter your code here</FormLabel>
                        <Input
                          id="input-code"
                          type="text"
                          placeholder="Enter your code here"
                          borderRadius={"0"}
                          borderColor={"#1C4E81"}
                          color={"#1C4E81"}
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
                    bg={"var(--primary_blue)"}
                    isLoading={props.isSubmitting}
                    type="submit"
                    className="button"
                    width="min-content"
                    color="var(--secondary_blue)"
                    marginTop="2rem"
                  >
                    Videre
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
          <Box
            id="verification-code"
            display={"none"}
            flexDirection="column"
            maxWidth={"30rem"}
            marginTop="2rem"
          >
            <div className="intro-text ">
              <p>
                Nedenunder ser du din unikke verifikationskode, som du skal
                bruge senere til at tjekke, at din stemme er optalt korrekt. Du
                skal kunne genkende første halvdel af koden fra ovenover.
              </p>

              <p>
                Gem den et sted, hvor du kan finde den. Vær opmærksom på, at
                koden downloader automatisk, når du klikker "Stem nu".
              </p>
            </div>

            <div className="space-between">
              <div className="verification-code">
                <h3>{userCodeInput}</h3>
              </div>
            </div>
            <Button
              onClick={downloadAndVote}
              marginTop="3rem"
              className="button"
              bg={"var(--primary_blue)"}
              color="var(--secondary_blue)"
              width="100%"
            >
              Stem nu
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
}
