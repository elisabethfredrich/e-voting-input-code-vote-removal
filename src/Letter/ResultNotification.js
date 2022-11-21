import React from "react";
import { Link, Button } from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";
import InvitationLetter from "../assets/invitation-letter.svg";
import Logo from "../assets/Folketinget_of_Denmark.svg";

// Styling
import "./Letter.css";

const ResultNotification = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="main">
        <div className="letter">
          <div className="letter-logo">
            <img src={Logo} />
          </div>

          <h2 className="letter-headline">
            Resultatet af folketingsvalget 2022
          </h2>
          <div className="letter-body">
            <p>
              Resultatet af folketingsvalget er nu offentliggjort, <br />
              og du kan se det ved at klikke på følgende link: <br />
              <span>
                {" "}
                <a
                  className="link-bold"
                  onClick={() => navigate("/bulletinboard")}
                >
                  Se resultatet
                </a>
              </span>
              .
            </p>

            <p>
              Det er vigtigt, at du tjekker, at din stemme er <br />
              afgivet korrekt. Dette gør du ved at finde din verifikationskode
              på resultatlisten.
            </p>
          </div>

          <div className="letter-margin">
            <p className="bold">2. december</p>
            <p>Sagsnummer: 2022-0310787</p>
            <p>Dokumentnummer: 2022-0310787-4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultNotification;
