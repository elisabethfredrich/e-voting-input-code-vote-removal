import React from "react";
import "./StartPage.css";
import { useNavigate } from "react-router-dom";
import { useState} from "react";
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

export default function StartPage(){

    const [email, setEmail] = useState("");

    function handleSubmitl(){

    }

    function onChangeEmail(){

    }


    function postInformationToDB(){

    }

    const handleChangeEmailInput = (e) => {
        setEmail(e.target.value);
        console.log(...email);
      };

    return(
        <div className="container-start">
        <div className="content-start">
          <Box display={"flex"} flexDirection="column">
            <Box>
              <div className="space-between">
                <h1>Before you start</h1>
                <Text maxW="30rem">
                To particapte in this study, we need to have your email adress. 
                </Text>
              </div>
              <Formik initialValues={{ name: "" }} onChange={onChangeEmail}>
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
            {/*       Nedenunder ser du din unikke verifikationskode, som du skal
                  bruge senere til at tjekke, at din stemme er optalt korrekt. Du
                  skal kunne genkende første halvdel af koden fra ovenover. */}
                  Below is your unique verification code, which you need to use later to check if your vote has been counted correctly. 
                  You should be able to recognize the first part of the code from above.  
                </p>
  
                <p>
                {/*   Gem den et sted, hvor du kan finde den. Vær opmærksom på, at
                  koden downloader automatisk, når du klikker "Stem nu". */}
                  Save the code a place, where you can find it again easily. Be aware that the code downloads automatically, when you click "Vote now"
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
                Vote now 
              </Button>
            </Box>
          </Box>
        </div>
      </div>
    )

}