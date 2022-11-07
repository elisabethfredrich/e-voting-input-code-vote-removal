import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
/* import BulletinBoard from './BulletinBoard/BulletinBoard'
import Confirmation from './Confirmation/Confirmation'
import Login from './Login/Login' */
/* import Navbar from './Navbar/Navbar' */
/* import Info from './Info'
import Kontakt from './Kontakt'
import ReceiveVerificationCode from './ReceiveVerificationCode/ReceiveVerificationCode'
import VotingScheme from './VotingScheme/VotingScheme' */
import InputVerificationCode from './InputCode/InputCode'
import { Context } from "./Context";
import { useState } from 'react';  

function App() {
  const pathname = window.location.pathname;
  /* const [voted, setVoted] = useState(false); */
  const [inputCode, setInputCode] = useState(undefined);

  return (
    <div className="App">
        <div id="app-main">

        <Context.Provider value={{inputCode, setInputCode}}>

              <BrowserRouter>
    {/*   {!['/login', '/'].includes(pathname) && <Navbar/>} */}
                <Routes>
                  
             {/*      <Route path="/login" element={<Login />}/>
                  <Route path="/verificationcode" element={<ReceiveVerificationCode />}/> */}
                  <Route path="/inputcode" element={<InputVerificationCode/>}/>
       {/*            <Route path="/voting" element={<VotingScheme />}/>
                  <Route path="/bulletinboard" element={<BulletinBoard />}/>
                  <Route path="/info" element={<Info />}/>
                  <Route path="/kontakt" element={<Kontakt />}/> */}
                </Routes>
              </BrowserRouter>
              </Context.Provider>
            </div>
    </div>
  );
}



export default App;
