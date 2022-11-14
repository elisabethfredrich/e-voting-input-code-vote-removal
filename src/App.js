import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import BulletinBoard from './BulletinBoard/BulletinBoard'
import Confirmation from './Confirmation/Confirmation'
import InputVerificationCode from './InputCode/InputCode'
import Login from './Login/Login'
import Navbar from './Navbar/Navbar'
import Info from './Info'
import Kontakt from './Kontakt'
import ReceiveVerificationCode from './ReceiveVerificationCode/ReceiveVerificationCode'
import VotingScheme from './VotingScheme/VotingScheme'
import { Context } from "./Context";
import { useState } from 'react';  
import Home from './Home/Home'
import Invitation from './Letter/Invitation'
import ResultNotification from './Letter/ResultNotification'

function App() {
  const pathname = window.location.pathname;
  const [inputCode, setInputCode] = useState(undefined);
  const [voted, setVoted] = useState(false);


  return (
    <div className="App">
        <div id="app-main">


        <Context.Provider value={{inputCode, setInputCode}}>

              <BrowserRouter>
      <Navbar/>
                <Routes>
                  <Route path="/" element={<Navigate to="/invitation" /* Should be referencing the main screen *//>}/>
                  <Route path="/home" element={<Home />}/>
                  <Route path="/login" element={<Login />}/>
                  <Route path="/verificationcode" element={<ReceiveVerificationCode />}/>
                  <Route path="/inputcode" element={<InputVerificationCode/>}/>
                  <Route path="/voting" element={<VotingScheme />}/>
                  <Route path="/confirmation" element={<Confirmation />}/>
                  <Route path="/bulletinboard" element={<BulletinBoard />}/>
                  <Route path="/info" element={<Info />}/>
                  <Route path="/kontakt" element={<Kontakt />}/>
                  <Route path="/invitation" element={<Invitation />}/>
                  <Route path="/resultnotification" element={<ResultNotification />}/>

                </Routes>
              </BrowserRouter>
              </Context.Provider>
            </div>
    </div>
  );
}



export default App;

