import React from "react";
import "./LegalInfo.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Box,
    Text
  } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { addVoter } from "../API/Voter";

export default function LegalInfo(){
  const [checked, setChecked] = useState(false);
  const [disabledButton, setDisabled] = useState(true);


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      addVoter(e.name);
      console.log(e.name);
      navigate("/welcome");
     }

     function handleChangeCheckbox() {
      if (checked) {
        setChecked(false);
        setDisabled(true);
      }
      else {
        setChecked(true);
        
        setDisabled(false);
      }
    }

    return(
      <div className="page-container container-dark-bg">
      <Box display={"flex"} flexDirection="column" className="inner-box-start">
        <Box>
          <div className="space-between">
            <h1 className="h1-instructions">Welcome to our study!</h1>
          </div>
          <Text>Here follows some legal info...</Text>
          <Checkbox
              className="check-box"
              id="checkBox-vote-info"
              isChecked={checked}
              onChange={handleChangeCheckbox}
            >
              I agree.
            </Checkbox>
            <Button
                      id="start-system"
                      mt={4}
                      onClick={()=>navigate("/welcome")}
                      marginTop="8rem"
                      className="light-btn"
                      disabled={disabledButton}
                      w="10rem"
                    >
                      Start
                    </Button>
          </Box>
          </Box>
          </div>
    )

}