import React from 'react';
import { useEffect } from 'react';

import { Box, Typography} from '@mui/material';
//import CancelIcon from '@mui/icons-material/Cancel';
//import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Cancel, CheckCircleOutline } from '@mui/icons-material';


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
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (
    <Box sx={{
      fontSize:{lg:'24px', xs:'16px'},
      fontFamily: 'Cormorant-Garamond, serif',
      p:'10px'
    }}>
    <Typography sx={{
      fontFamily: 'inherit',
      textAlign:'center',
      fontSize: 'inherit',
    }}>Pytanie  {examResult[questionCount].number} ({examResult[questionCount].hint === '' ? ' brak ' : examResult[questionCount].hint})
    </Typography>
    <Typography sx={{
      fontFamily: 'inherit',
      fontSize: 'inherit',
      fontWeight:'600',
      textIndent:{lg:'50px', xs:'20px'},
      mb:'16px',
      mt:'16px',
      textAlign:'justify'
    }}
    >{examResult[questionCount].question}</Typography>
    {Object.entries(examResult[questionCount].answers).map(([key, contents]) =>(
      <Typography key={key} sx={{
        fontSize: 'inherit', 
        ml:{lg:'40px', xs:'24px'}, 
        p:'4px'
      }}>
      {key === examResult[questionCount].markedAnswer && 
      key === examResult[questionCount].correctAnswer ? 
        <CheckCircleOutline sx={{
          color: 'green',
          fontSize: '36px',
          transform: 'translate(-36px, 10px)',
        }}/>
         : ''}
      {key === examResult[questionCount].markedAnswer && 
      key !== examResult[questionCount].correctAnswer ? 
      <> 
      <Cancel sx={{
        color: 'red',
        fontSize: '36px',
        transform: 'translate(-36px, 10px)',
      }}/>
    <span className='correct-answer-info'>
      Prawidłowa odpowiedź: {examResult[questionCount].correctAnswer}
    </span>
      </>
         : ''}
      {examResult[questionCount].markedAnswer === '' &&
      key === examResult[questionCount].correctAnswer ? 
      <>
      <CheckCircleOutline sx={{
        color: 'gray',
        fontSize: '36px',
        transform: 'translate(-36px, 10px)',
      }}/>
          <span className='correct-answer-info'>
      Brak odpowiedzi! <br/>
      Prawidłowa odpowiedź: {examResult[questionCount].correctAnswer}
    </span>
      </>
       : ''}
        <span className='question-key'>{key}. </span>
        {contents}
      </Typography>
    ))}
  </Box>
  )
}

export default CheckExamResult