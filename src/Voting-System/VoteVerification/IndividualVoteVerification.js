/**
 * Copyright 2023 Christina Frederikke Nissen, Elisabeth Fredrich
 *
 * This file is part of  e-voting-system-self-remove.
 *
 *  e-voting-system-self-remove is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 *  e-voting-system-self-remove is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the 
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with  e-voting-system-self-remove. If not, see <https://www.gnu.org/licenses/>.
 */

import { Box, Text, Link, Spinner } from "@chakra-ui/react";
import React, { useEffect } from "react";
import "./VoteVerification.css";
import { Button } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { loginVoter } from "../../API/Voter";
import { useState } from "react";
import getCurrentUser from "../../API/Voter";
export default function IndividualVoteVerification() {
  const navigate = useNavigate();
  const [voter, setVoter] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    loginVoter(id, id).then(() => {
      let user = getCurrentUser();
      setVoter(user);
    });
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="outer-page-container">
        <div className="inner-page-container-wide">
          <h1 className="blue-text centered-text">Vote Verification</h1>
          {voter === null ? (
            <Spinner />
          ) : (
            <div>
              {voter.attributes.Vote === "" ? (
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
                      instruction letter and report the issue.
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
                      {voter.attributes.VerificationCode}
                    </Text>
                  </Box>
                  <Button
                    className="blue-btn"
                    width={"100%"}
                    onClick={() => navigate("/info-3")}
                  >
                    Finish
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
