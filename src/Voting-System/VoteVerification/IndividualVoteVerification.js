import { Box, Text, Link, Spinner, Grid } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import "./VoteVerification.css";
import { Button } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { loginVoter } from "../../API/Voter";
import { useState } from "react";
import getCurrentUser from "../../API/Voter";
import { slideOut } from "../../utils";
export default function IndividualVoteVerification() {
  const navigate = useNavigate();
  const [voter, setVoter] = useState();
  const { id } = useParams();

  const isComponentMounted = useRef();

  useEffect(() => {
    isComponentMounted.current = true;
    return () => {
      loginVoter(id, id).then(() => {
        let user = getCurrentUser();
        if (isComponentMounted.current) {
          setVoter(user);
        }
      });
      isComponentMounted.current = false;
      console.log(voter);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="outer-page-container">
        <div className="inner-page-container-wide">
          <h1 className="blue-text centered-text">Vote Verification</h1>
          {!isComponentMounted.current ? (
            <Spinner />
          ) : (
            <div>
              {voter.attributes.Vote == "" ? (
                <Text className="red-text centered-text">
                  The election results are not available yet.
                  <br /> Please try again later.
                </Text>
              ) : (
                <div>
                  <Box className="info-box">
                    <Text className="info-text">
                      <span className="bold-text">NB!</span> If your vote is not
                      saved correctly, please follow the guidelines in the
                      instruction paper.
                    </Text>
                  </Box>
                  <Text mt={"1.5rem"}>Below you can see your saved vote:</Text>

                  <Box className="individual-vote-display"></Box>

                  <Box>
                    <Text>
                      If you wish to see all counted votes, please click{" "}
                      <Link
                        className="link-bold"
                        onClick={() => navigate("/verification")}
                      >
                        here
                      </Link>
                      .
                    </Text>
                    <Text>
                      There, you can also verify your vote by using the
                      following code:
                    </Text>
                    <Text className="verification-code-individual-page">
                      fPdJhDVz9aEkJOa-P76d4HRe
                    </Text>
                  </Box>
                  <Grid className="info-banner" id="info-banner">
                    <Link
                      id="slideout-trigger"
                      className="slideout-trigger"
                      onClick={() => slideOut()}
                    >{`>`}</Link>
                    <div className="info-banner-content">
                      <div id="banner-text">
                        <Text className="bold-text white-text">
                          You have finished the second part of the study!
                        </Text>

                        <Text className="white-text" mt={"1rem"}>
                          To complete the study, please fill out a survey about
                          your experience of the online voting system.{" "}
                        </Text>
                        <Button
                          id="survey-button-horizontal"
                          marginTop={"1rem"}
                          width="8rem"
                          className="red-btn"
                          padding={"1rem"}
                          onClick={() =>
                            (window.location.href =
                              "https://www.survey-xact.dk/LinkCollector?key=TC9S9SFFJPC5")
                          }
                        >
                          Go to survey
                        </Button>
                      </div>
                      <div id="survey-button-vertical-box">
                        <Button
                          width={0}
                          id="survey-button-vertical"
                          className="red-btn"
                          transform={"rotate(90deg)"}
                          marginBottom={0}
                          marginRight={0}
                          visibility="hidden"
                          position={"absolute"}
                          left={"-19.99"}
                          onClick={() =>
                            (window.location.href =
                              "https://www.survey-xact.dk/LinkCollector?key=TC9S9SFFJPC5")
                          }
                        >
                          Go to survey
                        </Button>
                      </div>
                    </div>
                  </Grid>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
