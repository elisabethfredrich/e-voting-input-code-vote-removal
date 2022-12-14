import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Folketinget_of_Denmark.svg";
import "./Letter.css";

const Invitation = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="main">
        <div className="letter">
          <div className="letter-logo">
            <img src={Logo} />
          </div>

          <h2 className="letter-headline">Stem til folketingsvalget 2022</h2>
          <div className="letter-body">
            <p>
              Den 1. november 2022 afholdes folketingsvalget <br /> i Danmark.
            </p>
            <p>
              I den forbindelse har du nu mulighed for at <br /> stemme
              digitalt, hvorfor du modtager dette brev.
            </p>
            <p>
              Såfremt du ønsker at stemme digitalt, skal du <br /> logge ind med
              MitID ved at klikke på følgende link: <br />
              <div className="letter-icon">
                <span className="material-symbols-outlined">arrow_forward</span>
                <a className="link-bold" onClick={() => navigate("/login")}>
                  Stem til folketingsvalget.
                </a>
              </div>{" "}
            </p>
            <p>
              Følg instruktionerne undervejs. Hvis du oplever <br /> problemer,
              kan du kontakte valgstyrelsen på
              <br /> telefon 01 02 03 04.
            </p>
          </div>

          <div className="letter-margin">
            <p className="bold">7. november</p>
            <p>Sagsnummer: 2022-0310787</p>
            <p>Dokumentnummer: 2022-0310787-4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invitation;
