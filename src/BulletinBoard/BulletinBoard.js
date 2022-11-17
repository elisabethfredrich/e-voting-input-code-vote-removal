import { Grid, GridItem, Input, Box, Text, Link, InputGroup, InputLeftElement, Accordion, AccordionButton, AccordionPanel, AccordionIcon, AccordionItem } from '@chakra-ui/react';
import {React, useEffect }  from 'react';
import Results from '../results.json'
import './BulletinBoard.css'
import { SearchIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import {useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const BulletinBoard = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const location = useLocation();
        useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    //sort the results alphabetically
    const results = Results.votes.sort((a,b)=>{if(a.code<b.code){return -1} else{ return 1} }) 
    
    const makeAccordion = () => {
        let firstLetter = results[0].code[0];
        let accordion = [];
        let accordionSection = {letter:firstLetter, results:[results[0]]} ;
        let length = results.length-1
            for(let i=1; i<length; i++){
                console.log(results[i])
                console.log(i)
                if(results[i].code[0]===firstLetter){
                    console.log(accordionSection)
                    accordionSection.results.push(results[i])
                }
                if(results[i].code[0]!==firstLetter){
                    accordion.push(accordionSection);
                    firstLetter=results[i].code[0];
                    console.log(firstLetter)
                    accordionSection={letter:firstLetter, results:[results[i]]}
                }
            }
            accordion.push(accordionSection);
            return accordion
        }

    const handleInputChange = (e) => {
       setInput(e.target.value)
    }

    const search = (e) => {
        if(input.length==0){
            document.querySelector('#error-text').style.display = 'none';
            document.querySelector('#success-text').style.display = 'none';
        }
        const table = document.querySelector('#result-table');
        const children = table.childNodes; // get all children
        let counter = 0; // iterate over all child nodes

        children.forEach(el => {
            if(!el.id.startsWith(input)) {
                el.style.display = 'none' 
            }
            else {
                el.style.display = 'grid'
                counter++}
            })

        let message;
        document.querySelector('#error-text').style.display = 'none';
        document.querySelector('#success-text').style.display = 'none';

        if(counter==1 && input.length==17){
            message = document.querySelector('#success-text');
            message.style.display='block';
        }
        else if(counter == 0){
            message = document.querySelector('#error-text');
            message.style.display='block';
        }
    }


    return (
        <div className='container'>
        <div className='main-mobile'>

        <div className='header'>
            <h1>Valgresultat</h1>

            <Box maxW='40rem' className='space-between'>
            <p>Herunder ser du resultater af valget. Brug din verifikationskode til at tjekke, at din stemme er optalt korrekt.</p>
            <p>Dette kan du gøre ved enten at indsætte din kode i søgefeltet eller ved at kigge i den alfabetiske sorterede liste herunder.</p>
            </Box>

            <Box className='info-box'>
            <Text className='info-text'>
            Såfremt din stemme ikke er optalt korrekt, eller at du ikke kan finde din kode, bedes du kontakte valgstyrelsen <Link className='link-bold' onClick={()=> navigate('/kontakt')}>her</Link>.</Text>
            </Box>

            <InputGroup marginTop='2rem'>
                <InputLeftElement pointerEvents='none' children={<SearchIcon color='var(--primary_blue)' />}/>
                <Input value={input} onChange={handleInputChange} onKeyUp={search} placeholder={'Search for your code here'} type='search' borderColor='#565d6d'/>
            </InputGroup> 
        </div>


        <Box id='error-text' className='info-box' display={'none'} color='maroon' marginTop='0'>
            <h3>Der er ingen stemme med denne kode.</h3> 
            <Text className='info-text'>Tjek venligst, at du har indtastet din kode korrekt. Hvis koden er korrekt, men din stemme ikke vises, skal du kontakte valgstyrelsen <Link className='link-bold' onClick={()=> navigate('/kontakt')}>her</Link>.</Text></Box>
        
        <Box id='success-text' className='info-box' display={'none'} textAlign='center' color='#599C2D' width='100%'>
            <h3>Din stemme er optalt!</h3>
        </Box>

    {input.length>0 ?
    <Box id='result-table' w={'100%'}>
        {results.map((result) => (
            <Grid key={result.id} className='result-grid' id={result.code}>
            <GridItem color={'var(--primary_blue)'} fontWeight='600'>{result.code}</GridItem>
            <GridItem>{result.vote}</GridItem>
        </Grid>))}      
    </Box> 
    :
    <Accordion defaultIndex={['-1']} allowMultiple w={'100%'} id='accordion'>
        {makeAccordion().map((letter)=>( 
                <AccordionItem key={letter.results.id}>
            <h2><AccordionButton>
                    <Box flex='1' textAlign='left' fontWeight={'600'}>{letter.letter}</Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className={letter.letter}>
                    {letter.results.map((result) => (
                    <Grid className='result-grid' id={result.code} paddingTop='4rem' paddingBottom='4rem'>
                        <GridItem color={'var(--primary_blue)'} fontWeight='600'>{result.code}</GridItem>
                        <GridItem>{result.vote}</GridItem>
                        </Grid>))}
                </AccordionPanel>
            </AccordionItem>))}
    </Accordion>
    }


        <Button className='button' width={'100%'} marginTop='3rem' onClick={()=> navigate('/home')}>Afslut</Button>
            </div>
            </div>
        );
    };

export default BulletinBoard;