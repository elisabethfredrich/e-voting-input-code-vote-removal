import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import './Confirmation.css';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react'




export default function Confirmation() {
  const navigate = useNavigate();



  return (
    <div className='container-confirmation container'>
      <div className='content-confirmation'>
        <h1>Tak for din stemme</h1>
        <p>Du modtager en mail når resultatet er klart, hvorefter du kan bruge din verifikationskode til at tjekke om din stemme er optalt korrekt.</p>
        <Button marginTop={'2rem'} width='8rem' className='button' onClick={() => navigate('/resultnotification')}>Log ud</Button>
      </div>
    </div>
  )
}