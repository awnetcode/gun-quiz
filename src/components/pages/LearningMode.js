import React from 'react';
import { useEffect } from 'react';


import { Box, Typography,} from '@mui/material';

const LearningMode = ({questionCount, questions, correctAnswer, answerNames}) => {



 // console.log(correctAnswer, answerNames);
 // console.log(questions[questionCount])
  useEffect(() =>{
     
   },[questionCount]);

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
    <Typography sx={{fontSize:'20px', ml:'40px', p:'4px'}}
    className={answerNames[0] === correctAnswer ? 'correct-answer-hint' : ''}>
    <span className='question-key'> a. </span> 
    {questions[questionCount].answers.a}</Typography>
    <Typography sx={{fontSize:'20px', ml:'40px', p:'4px'}}
    className={answerNames[1] === correctAnswer ? 'correct-answer-hint' : ''}>
    <span className='question-key'> b. </span> 
    {questions[questionCount].answers.b}</Typography>
    <Typography sx={{fontSize:'20px', ml:'40px', p:'4px'}}
    className={answerNames[2] === correctAnswer ? 'correct-answer-hint' : ''}>
    <span className='question-key'> c. </span> 
    {questions[questionCount].answers.c}</Typography>
  </Box>
  )
}

export default LearningMode