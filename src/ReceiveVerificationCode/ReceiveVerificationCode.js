import {  } from 'react-native'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ReceiveVerificationCode.css';
import { Button } from 'react-native-web';

export default function ReceiveVerificationCode() {

    const navigate = useNavigate();

    function navigateToVotingPage(){
        navigate('/voting');
    }

    /* Function for creating a random code */
    function makeid() {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < 10; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }


    // CHANGE FUNCTIONALITY SO IT CONCATENATED THE MAKEID WITH THE USER INPUT 

  return (
    <div className='container'>
        <div className='content'>
            <div className='text-area'>
                <h1>Velkommen</h1>
                <p>Nedenunder ser du din unikke verifikationskode, som du skal bruge senere til at tjekke om din stemme er optalt korrekt.</p>
                <br/>
                <p>Gem den et sted, hvor du kan finde den.</p>
            </div>

            <div className='read-more'>
                {/* Make a pop-up */}
                <a className='link-bold' href="">Læs mere</a>
            </div>

            <div id='container'>
            <div className='verification-code'>
                <h3>CWTL-DMDpLZDSvR</h3>
            </div>
                <a className='button-verification-code' onClick={()=> navigateToVotingPage()}>
                    Stem nu
                </a>
            </div>    
            </div>   
    </div>
  )
}