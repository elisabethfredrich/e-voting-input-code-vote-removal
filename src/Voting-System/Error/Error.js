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
        <span className="alert-icon"class="material-symbols-outlined">error</span>
          <h1 className="blue-text">INVALID URL</h1>
          <Text>
            Hmm...It does not look like there is a webpage on this URL.
            Double-check the spelling and try again. 
          </Text>
    
          </div>
   
      </div>
    </div>
  );
}
