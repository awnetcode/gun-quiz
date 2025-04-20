import React from 'react'
import { Box, Button } from '@mui/material'

const Footer = ({questionCount, setQuestionCount, setSelectedAnswer, endOfList, listLength}) => {

  const quickQestionChoice = (e) =>{
    if(e.target.value >= 1 && e.target.value <= listLength){
      setQuestionCount(e.target.value-1)
    } else return
  }

  return (
    <Box sx={{
      display:'flex',
      gap:'5px',
      mb:'24px'
    }}>
      <Button variant='contained' 
      onClick={() => setQuestionCount(questionCount-1)}
      disabled={questionCount<=0 ? true : false}
      >wstecz</Button>
      <Button variant='contained' 
      onClick={() => {
        setQuestionCount(questionCount+1);
        setSelectedAnswer('')
      } }
      disabled={endOfList === true ? true : false}
      >dalej</Button>
      <input type='number' className='quick-choice-field' onChange={(e) => quickQestionChoice(e)}/>
    </Box>
  )
}

export default Footer