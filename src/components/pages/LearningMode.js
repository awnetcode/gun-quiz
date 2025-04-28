import React from 'react';
import { useEffect } from 'react';


import { Box, Typography,} from '@mui/material';

const LearningMode = ({
  questionCount, 
  questions, 
  correctAnswer, 
  answerNames, 
  checkListEnd,
  setListLength
}) => {

  useEffect(() =>{
     checkListEnd(questions.length, questionCount)
     setListLength(questions.length)
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[questionCount]);

  return (
    <Box sx={{
      fontSize:'24px',
    }}>
    <Typography sx={{
      textAlign:'center',
      fontSize: '24px',
      fontFamily:'inherit'
    }}>Pytanie  {questions[questionCount].number} ({questions[questionCount].hint === '' ? ' brak ' : questions[questionCount].hint})
    </Typography>
    <Typography sx={{
      fontFamily:'inherit',
      fontSize:{lg:'24px', xs:'16px'},
      fontWeight:'600',
      textIndent:'50px',
      mb:'16px',
      mt:'16px',
      textAlign:{lg:'justify', xs:'left'}
    }}
    >{questions[questionCount].question}</Typography>
    <Typography sx={{
      fontFamily:'inherit', 
      fontSize:{lg:'20px', xs:'14px'}, 
      ml:{lg:'40px', xs:'0'}, 
      p:'4px'}}
    className={answerNames[0] === correctAnswer ? 'correct-answer-hint' : ''}>
    <span className='question-key'> a. </span> 
    {questions[questionCount].answers.a}</Typography>
    <Typography sx={{
      fontFamily:'inherit', 
      fontSize:{lg:'20px', xs:'14px'}, 
      ml:{lg:'40px', xs:'0'}, 
      p:'4px'}}
    className={answerNames[1] === correctAnswer ? 'correct-answer-hint' : ''}>
    <span className='question-key'> b. </span> 
    {questions[questionCount].answers.b}</Typography>
    <Typography sx={{
      fontFamily:'inherit', 
      fontSize:{lg:'20px', xs:'14px'}, 
      ml:{lg:'40px', xs:'0'}, 
      p:'4px'}}
    className={answerNames[2] === correctAnswer ? 'correct-answer-hint' : ''}>
    <span className='question-key'> c. </span> 
    {questions[questionCount].answers.c}</Typography>
  </Box>
  )
}

export default LearningMode