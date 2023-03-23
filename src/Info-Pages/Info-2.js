import React from "react";
import { Text } from "@chakra-ui/react";
import "./InfoPages.css";

export default function Info2() {
  return (
    <div className="container-info-pages">
      <div className="inner-box-info centered-info-page">
        <h2 className="h2-info-pages">
          You have completed the first part of the study!
        </h2>
        <Text className="medium-body-text-info">
          If this was a real election, the votes would now be counted and it
          would take some time before you could verify your vote on the official
          website.
        </Text>
        <Text className="medium-body-text-info">
          However, since this is a study, the results are already up. Please
          follow the instruction paper to verify your vote now!
        </Text>
      </div>
    </div>
  );
}
