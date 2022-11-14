import {  } from 'react-native'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ReceiveVerificationCode.css';
import { Button } from 'react-native-web';
import { Context } from "../Context";
import { useContext} from 'react';

export default function ReceiveVerificationCode() {

    const navigate = useNavigate();
    const context = useContext(Context);

    function navigateToVotingPage(){
        navigate('/voting');

    }

  return (
    <div className='container'>
    <div className='content'>
        <div className='text-area'>
            <h1>Velkommen</h1>
            <div className='intro-text '>

            <p>Nedenunder ser du din unikke verifikationskode, som du skal bruge senere til at tjekke, at din stemme er optalt korrekt.</p>
            <p>Gem den et sted, hvor du kan finde den.</p>
            </div>

        </div>

        <div className='read-more'>
            {/* Make a pop-up */}
            <a className='link-bold' href="">Læs mere</a>
        </div>

        <div id='container'>
        <div className='verification-code'>
            <h3>{context.inputCode}</h3>
        </div>
            <a className='button-verification-code' onClick={()=> navigateToVotingPage()}>
                Stem nu
            </a>
        </div>    
        </div>   
</div>
  )
}