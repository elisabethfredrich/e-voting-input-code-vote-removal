import {  } from 'react-native'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ReceiveVerificationCode.css';
import { Button } from 'react-native-web';
import { Context } from "../Context";
import { useContext} from 'react';
import PopOverVerificationCode from './PopOverVerificationCode';

export default function ReceiveVerificationCode() {
   
    const navigate = useNavigate();
    const context = useContext(Context);

    function navigateToVotingPage(){
        navigate('/voting');
    }

    /* Function for creating a random code */
    function makeid() {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < 8; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }




  return (
    <div className='container'>
        <div className='content'>
            <div className='text-area'>
                <h1>Velkommen</h1>
                <div className='space-between'>

                <p>Nedenunder ser du din unikke verifikationskode, som du skal bruge senere til at tjekke, at din stemme er optalt korrekt.</p>
                <p>Gem den et sted, hvor du kan finde den.</p>
                </div>

          

            <div className='read-more'>
                {/* Make a pop-up */}
                <a className='link-bold' href="">Læs mere</a>
            </div>

            <div className='space-between'>
            <div className='verification-code'>
            <h3>{context.inputCode}</h3>
        </div>
            <PopOverVerificationCode/>
            </div>    
            </div>  
            </div> 
    </div>
  )
}