import React from 'react';
import { useState, useEffect } from 'react';

import { Box, Typography, Checkbox, Skeleton, LinearProgress } from '@mui/material';

import TimeCounter from '../TimeCounter';

const ExamMode = ({questions, questionCount, setQuestionCount}) => {

  const [randomQuestions, setRandomQuestions] = useState([]);

  const getQuestionSet = (data, count) => {
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    const selectedQuestions = getQuestionSet(questions, 20);
    setRandomQuestions(selectedQuestions);
    setQuestionCount(0);

  }, [])

  if (!randomQuestions[questionCount]) {
    return(<>
    <Typography>Ładowanie...</Typography>
    <Skeleton variant='text' width={500} height={120}/>
    <Skeleton variant='text' width={500} height={60}/>
    <Skeleton variant='text' width={500} height={60}/>
    <Skeleton variant='text' width={500} height={60}/>
    </>)
   // return <Typography>Ładowanie pytań...</Typography>;
  }

  return (
    <>
    <Box><TimeCounter/></Box>
    <Box sx={{
      fontSize:'24px',
    }}>
    <Typography sx={{
      textAlign:'center',
      fontSize: '24px',
      fontFamily: 'Cormorant-Garamond, serif'
    }}>Pytanie  {randomQuestions[questionCount].number} <br/>
    ({randomQuestions[questionCount].hint === '' ? ' brak ' : randomQuestions[questionCount].hint})
    </Typography>
    <Typography sx={{
      fontSize:'24px',
      fontWeight:'600',
      textIndent:'50px',
      mb:'16px',
      mt:'16px',
      textAlign:'justify'
    }}
    >{randomQuestions[questionCount].question}</Typography>
    <Typography sx={{fontSize:'20px', ml:'40px', p:'4px'}}>
      <Checkbox/>
    <span className='question-key'> a. </span> 
    {randomQuestions[questionCount].answers.a}</Typography>
    <Typography sx={{fontSize:'20px', ml:'40px', p:'4px'}}>
      <Checkbox/>
    <span className='question-key'> b. </span> 
    {randomQuestions[questionCount].answers.b}</Typography>
    <Typography sx={{fontSize:'20px', ml:'40px', p:'4px'}}>
      <Checkbox/>
    <span className='question-key'> c. </span> 
    {randomQuestions[questionCount].answers.c}</Typography>
  </Box>
  <Box sx={{
        width:'60%',
        position:'absolute',
        bottom:'100px',
        left:'20%',
        fontFamily:'Kode Mono'
  }}>
  <LinearProgress sx={{
    height:'5px',

  }}
   color='success' variant="determinate" value={questionCount*5 + 5}/> {questionCount +1} / 20
  </Box>
  </>
  )
}

export default ExamMode