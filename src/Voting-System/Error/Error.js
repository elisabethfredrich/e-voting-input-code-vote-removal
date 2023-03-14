import React from "react";
import { Text } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import "./Error.css"


export default function Error() {

  return (
    <div>
      <Navbar />
      <div className="outer-page-container">
      <div className="container-error-page">
        <div className="icon-and-headline">
        <span className="material-symbols-outlined margin-right-icon">error</span>
          <h1 className="darkblue-text">INVALID URL</h1>
          </div>
          <Text>
            Hmm...It does not look like there is a webpage on this URL.
            Double-check the spelling and try again. 
          </Text>
    
          </div>
   
      </div>
    </div>
  );
}
