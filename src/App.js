import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import BulletinBoard from "./BulletinBoard/BulletinBoard";
import Confirmation from "./Confirmation/Confirmation";
import InputCode from "./InputCode/InputCode";
import Login from "./Login/Login";
import Navbar from "./Navbar/Navbar";
import VotingScheme from "./VotingScheme/VotingScheme";

/* to start json-server run:
json-server --watch src/results.json --port 8000
*/

function App() {
 

  return (
    <div className="App">
      <div id="app-main">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Navigate
                  to="/invitation" /* Should be referencing the main screen */
                />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/inputcode" element={<InputCode />} />
            <Route path="/voting" element={<VotingScheme />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/bulletinboard" element={<BulletinBoard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
