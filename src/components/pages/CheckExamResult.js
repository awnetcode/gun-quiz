import React from 'react';
import { useEffect } from 'react';

import { Box, Typography} from '@mui/material'

const CheckExamResult = ({
    examResult,
    questionCount,
    setQuestionCount,
    setListLength
}) => {

useEffect(() =>{
setQuestionCount(0);
setListLength(examResult.length)
console.log(examResult)
}, []);

  return (
    <Box sx={{
      fontSize:'24px',
    }}>
    <Typography sx={{
      textAlign:'center',
      fontSize: '24px',
    }}>Pytanie  {examResult[questionCount].number} ({examResult[questionCount].hint === '' ? ' brak ' : examResult[questionCount].hint})
    </Typography>
    <Typography sx={{
      fontSize:'24px',
      fontWeight:'600',
      textIndent:'50px',
      mb:'16px',
      mt:'16px',
      textAlign:'justify'
    }}
    >{examResult[questionCount].question}</Typography>
    <Typography sx={{fontSize:'20px', ml:'40px', p:'4px'}}>
    <span className='question-key'> a. </span> 
    {examResult[questionCount].answers.a}</Typography>
    <Typography sx={{fontSize:'20px', ml:'40px', p:'4px'}}>
    <span className='question-key'> b. </span> 
    {examResult[questionCount].answers.b}</Typography>
    <Typography sx={{fontSize:'20px', ml:'40px', p:'4px'}}>
    <span className='question-key'> c. </span> 
    {examResult[questionCount].answers.c}</Typography>
  </Box>
  )
}

export default CheckExamResult