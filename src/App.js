import "./App.css";
import "./Info-Pages/InfoPages.css"
import "./Voting-System/VotingSystem.css"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import VoteVerification from "./Voting-System/VoteVerification/VoteVerification";
import Confirmation from "./Voting-System/Confirmation/Confirmation";
import VerificationCode from "./Voting-System/VerificationCode/VerificationCode";
import Navbar from "./Voting-System/Navbar/Navbar";
import Voting from "./Voting-System/Voting/Voting";
import Info3 from "./Info-Pages/Info-3";
import Info2 from "./Info-Pages/Info-2";
import Welcome from "./Info-Pages/Welcome";
import Parse from "parse";
import Info1 from "./Info-Pages/Info-1";
import Reporting from "./Voting-System/Reporting/Reporting";
import { render } from "@testing-library/react";

const PARSE_APPLICATION_ID = "UVxMd3c4qbO9uVtFvStqUEgJSIjMJWYaVZfKL6sL";
const PARSE_HOST_URL = "https://parseapi.back4app.com/";
const PARSE_JAVASCRIPT_KEY = "S1tyiUfA5PBsAiER8l8K7YqpPXVg1wpCbQ1F7gty";

Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);

Parse.serverURL = PARSE_HOST_URL;

function App() {
  const pathname = window.location.pathname;

  return (
    <div className="App">
      <div id="app-main">
        <BrowserRouter>
       <Routes>
            <Route path="/" element={<Navigate to="/welcome" />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/info-1" element={<Info1 />} />
            <Route path="/verification-code" element={<VerificationCode />} />
            <Route path="/voting" element={<Voting />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/info-2" element={<Info2 />} />
            <Route path="/vote-verification" element={<VoteVerification />} />
            <Route path="/info-3" element={<Info3 />} />
            <Route path="reporting" element={<Reporting/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
