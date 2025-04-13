import React from 'react'
import { Box, Button } from '@mui/material'

const Footer = ({questionCount, setQuestionCount, questions}) => {
  return (
    <Box sx={{
      display:'flex',
      gap:'5px'
    }}>
      <Button variant='contained' 
      onClick={() => setQuestionCount(questionCount-1)}
      disabled={questionCount<=0 ? true : false}
      >wstecz</Button>
      <Button variant='contained' 
      onClick={() => setQuestionCount(questionCount+1)}
      disabled={questionCount>= questions.length ? true : false}
      >dalej</Button>
      <input type='number' onChange={(e) => setQuestionCount(e.target.value-1)}/>
    </Box>
  )
}

export default Footer