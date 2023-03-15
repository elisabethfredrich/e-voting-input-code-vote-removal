import { Box, Text, Link } from "@chakra-ui/react";
import React from "react";
import "./VoteVerification.css";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import getVoter from "../../API/Voter";

export default function IndividualVoteVerification() {
  const navigate = useNavigate();
  let voter = getVoter(useParams());

  return (
    <div>
      <Navbar />
      <div className="outer-page-container">
        <div className="inner-page-container-wide">
          <h1 className="blue-text centered-text">Vote Verification</h1>
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
                  There, you can also verify your vote by using the following
                  code:
                </Text>
                <Text className="verification-code-individual-page">
                  fPdJhDVz9aEkJOa-P76d4HRe
                </Text>
              </Box>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}