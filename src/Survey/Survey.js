import React from "react";
import "./Survey.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";


export default function Survey(){
    const navigate = useNavigate();

    return(
        <div className="container-survey container">
            <div className="content-survey">
        <h1 className="headline">Please tell us about your experience</h1> 
            <p>Congratulations! You have completed the online voting system for parliament election 2023.</p>
            <br></br>
            <p>Please click on the button below to go and fill out a survey about your experience of the system.</p>
            <br></br>
            <p>Thanks in advance!</p>
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


