import React from 'react';
import { useEffect } from 'react';


import { Box, Typography, Checkbox} from '@mui/material';

const LearningMode = ({questionCount, questions, correctAnswer, setCorrectAnswer}) => {

 

   useEffect(() =>{
     console.log(questions.length);
     console.log(correctAnswer)
   },[correctAnswer]);

  return (
    <Box sx={{
      fontSize:'24px',
  
    }}>
    <Typography sx={{
      textAlign:'center',
      fontSize: '24px',
    }}>Pytanie {questions[questionCount].number} ({questions[questionCount].hint})</Typography>
    <Typography sx={{
      fontSize:'32px',
      mb:'16px'
    }}
    >{questions[questionCount].question}</Typography>
    <Typography sx={{fontSize:'20px', ml:'40px', p:'4px'}}>
      <Checkbox />a. {questions[questionCount].answers.a}</Typography>
    <Typography sx={{fontSize:'20px', ml:'40px', p:'4px'}}>
      <Checkbox />b. {questions[questionCount].answers.b}</Typography>
    <Typography className='correct-answer-hint' sx={{fontSize:'20px', ml:'40px', p:'4px'}}>
      <Checkbox />c. {questions[questionCount].answers.c}</Typography>
  </Box>
  )
}

export default LearningMode