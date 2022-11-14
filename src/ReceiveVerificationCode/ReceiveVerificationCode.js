import {  } from 'react-native'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ReceiveVerificationCode.css';
import { Button } from 'react-native-web';
import { Context } from "../Context";
import { useContext} from 'react';

export default function ReceiveVerificationCode() {
   //to access file system
/*     const fs = require('browserify-fs');
 */
const fs = require('fs');

    const navigate = useNavigate();
    const context = useContext(Context);

    function navigateToVotingPage(){
        context.setInputCode(code);
        let data = fs.readFileSync('results.json');
        let results= JSON.parse(data);
        var newData = {"id":"100",
                        "vote":"A. Socialdemokratiet",
                        "code":code};
        results.push(newData);

        var newData = JSON.stringify(results);
            fs.writeFile('results.json', newData, err => {
        // error checking
        if(err) throw err;
    
    console.log("New data added");
});   
        
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

    const code = context.inputCode + '-' + makeid()



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
            <h3>{code}</h3>
        </div>
            <a className='button-verification-code' onClick={()=> navigateToVotingPage()}>
                Stem nu
            </a>
        </div>    
        </div>   
</div>
  )
}