import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Button,
    Text
}from "@chakra-ui/react";


export default function Break(){

    const navigate = useNavigate();

    return(
        <div className="container-dark-bg">
            <div className="content-break">
        <h1>You have completed the first part of General Election 2023</h1>
        
        <h2 className="lightblue-text">... and the results are already up on our official webpage. Please verify your vote now!</h2>
        <Button
            marginTop={"2rem"}
            width="8rem"
            className="light-btn"
            onClick={() => navigate("/bulletinboard")}
            >
            Verify vote
            </Button> 
        </div>
        </div>
    )
} 