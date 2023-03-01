import React from "react";
import "./Survey.css";
import { useNavigate } from "react-router-dom";
import { Button, Text } from "@chakra-ui/react";


export default function Survey(){
    const navigate = useNavigate();

    return(
        <div className="page-container container-dark-bg">
            <div className="content-survey">
        <h1 className="h1-instructions">Please tell us about your experience</h1> 
            <Text>Congratulations! You have completed the online voting system for the General Election 2023.</Text>
       
            <Text marginTop={"20px"}>Please click on the button below and fill out a survey about your experience of the system.</Text>
            
            <Text marginTop={"20px"}>Thank you in advance!</Text>
            <Button
            marginTop={"2rem"}
            width="8rem"
            className="light-btn"
            onClick={() => navigate("/XXX")}
            >
            Go to survey
            </Button> 
        </div>
        </div>
    )
}


