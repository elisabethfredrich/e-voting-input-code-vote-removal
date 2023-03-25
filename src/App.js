import "./App.css";
import "./Info-Pages/InfoPages.css";
import "./Voting-System/VotingSystem.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import VoteVerification from "./Voting-System/VoteVerification/VoteVerification";
import Confirmation from "./Voting-System/Confirmation/Confirmation";
import VerificationCode from "./Voting-System/VerificationCode/VerificationCode";
import IndividualVoteVerification from "./Voting-System/VoteVerification/IndividualVoteVerification";
import Voting from "./Voting-System/Voting/Voting";
import Info2 from "./Info-Pages/Info-2";
import Parse from "parse";
import Info1 from "./Info-Pages/Info-1";
import Welcome from "./Voting-System/Welcome/Welcome";
import Info3 from "./Info-Pages/Info-3";
import Reporting from "./Voting-System/Reporting/Reporting";
import Error from "./Voting-System/Error/Error";
import { useEffect } from "react";
import { getNumberOfVoters } from "./API/Voter";

const PARSE_APPLICATION_ID = "nV2P0Ff22lShGeWir2Pgk1EJx5hv5PedNTgzIOQ9";
const PARSE_HOST_URL = "https://parseapi.back4app.com/";
const PARSE_JAVASCRIPT_KEY = "P8EL0BBDCs9jjT6cppNigMQdAoMGRUNFrAz4sOAt";

Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);

Parse.serverURL = PARSE_HOST_URL;

function App() {
  
  useEffect(()=>{
    if(getNumberOfVoters()===30){
      window.location.href = "https://e-voting-study-3.netlify.app/info-1";
    }
  }, [])

  return (
    <div className="App">
      <div id="app-main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/info-1" />} />
            <Route path="/info-1" element={<Info1 />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/verification-code" element={<VerificationCode />} />
            <Route path="/voting" element={<Voting />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/info-2" element={<Info2 />} />
            <Route path="/verification" element={<VoteVerification />} />
            <Route
              path="/verification/:id"
              element={<IndividualVoteVerification />}
            />
            <Route path="/reporting" element={<Reporting />} />
            <Route path="/info-3" element={<Info3 />} />
            <Route path="/invalid-url" element={<Error />} />
            <Route path="/*" element={<Navigate to="/invalid-url" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
