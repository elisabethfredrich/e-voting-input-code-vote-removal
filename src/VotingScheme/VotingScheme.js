import './VotingScheme.css';
//import Radio from "./Radio";
import { RadioGroup, Radio, Stack, Grid, GridItem, StackDivider, Box } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { Text } from "@chakra-ui/react"
import { Button, ButtonGroup } from '@chakra-ui/react'
import Parties from '../candidates.json'
import PopOver from './PopOver';
import {useState, useEffect} from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';




function VotingScheme(){

    const [value, setValue] = useState('')
    return(

    
    
        <div className='container'> 
    <div className='main'>
        <div className='header'>
        <h1>Stemmeseddel</h1>
        <div className='space-between bottom-line'>

        <p>For at afgive din stemme, sæt venligst et kryds(X) ud fra enten et parti eller en kandidat.</p>
        <p>De listede kandidater herunder er respektive i forhold til din bopæl.</p>

        </div>
        </div>

        <RadioGroup onChange={setValue} value={value}>
        {Parties.map((party) => ( <div id='party' key={party.id}> 
                            <Radio value={party.id.toString()} marginBottom='1rem' padding='1rem' borderColor='#1C4E81'><h2>{party.party}</h2></Radio>
                                <Stack className='stack' display='grid' gridTemplateColumns='1fr 1fr' color="#1C4E81" alignItems={'end'}>
                                     {party.candidates.map((candidate) => (<GridItem  key={candidate.id} className='grid-item'><Radio value={candidate.id.toString()} borderColor='#1C4E81'>{candidate.candidate}</Radio></GridItem>))}
                                </Stack>
                                </div>
                            ))} 

        </RadioGroup>


        <PopOver value={value}></PopOver>

    </div>
    </div>


  

    
    
    )



}

export default VotingScheme