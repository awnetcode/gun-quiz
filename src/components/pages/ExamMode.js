import React from 'react';
import { useState, useEffect } from 'react';

import { Box, Typography, Checkbox } from '@mui/material';



const ExamMode = ({questions, questionCount, setQuestionCount}) => {

  const [randomQuestions, setRandomQuestions] = useState([]);
  setQuestionCount(1)

  const getQuestionSet = (data, count) => {
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    const selectedQuestions = getQuestionSet(questions, 20);
    setRandomQuestions(selectedQuestions);
  }, [randomQuestions])

  return (
    <Box sx={{
      fontSize:'24px',
    }}>
    <Typography sx={{
      textAlign:'center',
      fontSize: '24px',
    }}>Pytanie  {randomQuestions[questionCount].number} ({randomQuestions[questionCount].hint === '' ? ' brak ' : randomQuestions[questionCount].hint})
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
    <span className='question-key'> a. </span> 
    {randomQuestions[questionCount].answers.a}</Typography>
    <Typography sx={{fontSize:'20px', ml:'40px', p:'4px'}}>
    <span className='question-key'> b. </span> 
    {randomQuestions[questionCount].answers.b}</Typography>
    <Typography sx={{fontSize:'20px', ml:'40px', p:'4px'}}>
    <span className='question-key'> c. </span> 
    {randomQuestions[questionCount].answers.c}</Typography>
  </Box>
  )
}

export default ExamMode