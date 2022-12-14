import { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Input,
  Stack,
  Image,
  Text,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import BackgroundImage from "../assets/folketinget-background-image.svg";
import { Field, Form, Formik } from "formik";

export default function Login() {
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  function validateCPR(value) {
    let error = "";

    if (!value) {
      error = "Du bedes venligst indtaste din CPR-nummer";
    }
    return error;
  }

  function validatePassword(value) {
    let error = "";

    if (!value) {
      error = "Du bedes venligst indtaste din stemme-nøgle";
    }

    return error;
  }

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(false);
    console.log("goes to voting");
    if (
      values.password !== "test123" ||
      (values.cprnummer !== "010203-0405" && values.cprnummer !== "0102030405")
    ) {
      setErrorMessage(
        "Indtastet CPR-nummer eller stemme-nøgle er forkert. Prøv igen."
      );
    } else {
      navigate("/inputcode");
    }
  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex flex={1}>
        <Image
          maxH={"100vh"}
          alt={"Login Image"}
          objectFit={"cover"}
          src={BackgroundImage}
        />
      </Flex>

      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading color={"#1C4E81"} fontSize={"xl"}>
            Velkommen til det digitale folketingsvalg.
          </Heading>

          <Text>
            For at stemme til folketingsvalget online, bedes du logge ind med de
            informationer, du har modtaget med posten.
          </Text>
          <Formik
            initialValues={{ cprnummer: "", password: "" }}
            onSubmit={handleSubmit}
          >
            {(props) => (
              <Form className="input-field">
                <Field name="cprnummer" validate={validateCPR}>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={
                        form.errors.cprnummer && form.touched.cprnummer
                      }
                    >
                      <FormLabel color={"#1C4E81"} marginTop="1rem">
                        CPR-nummer
                      </FormLabel>
                      <Input
                        id="cprnummer"
                        type="text"
                        placeholder="Indtast CPR-nummer"
                        borderRadius={"0"}
                        borderColor={"#1C4E81"}
                        color={"#1C4E81"}
                        {...field}
                      />
                      <FormErrorMessage>
                        {form.errors.cprnummer}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="password" validate={validatePassword}>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.password && form.touched.password}
                    >
                      <FormLabel color={"#1C4E81"} marginTop="1rem">
                        Stemme-nøgle
                      </FormLabel>
                      <Input
                        id="stemme-nøgle"
                        type="password"
                        placeholder="Indtast stemme-nøgle"
                        borderRadius={"0"}
                        borderColor={"#1C4E81"}
                        color={"#1C4E81"}
                        {...field}
                      />
                      <FormErrorMessage>
                        {form.errors.password}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Box color="#ff0000" marginTop={"1rem"}>
                  {errorMessage}
                </Box>
                <Button
                  id="login"
                  isLoading={props.isSubmitting}
                  type="submit"
                  color={"#FFF"}
                  backgroundColor={"#1C4E81"}
                  width={"30%"}
                  className="button"
                  marginTop={"2rem"}
                >
                  Log ind
                </Button>
              </Form>
            )}
          </Formik>
        </Stack>
      </Flex>
    </Stack>
  );
}
