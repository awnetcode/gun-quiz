import React from 'react'
import { Box, Button, } from '@mui/material'

const Footer = ({
  questionCount,setQuestionCount, 
  setSelectedAnswer, 
  endOfList, setEndOfList,
  listLength,
  mode, setMode,
  saveExamAnswers,
}) => {

  const quickPageSelectIput = () =>{
    return(
     <input type='number' 
            className='quick-choice-field' 
            placeholder='nr ?'
            onChange={(e) => quickQestionChoice(e)}
     />
    )
  } 

  const nextButton = () =>{
    return(
      <Button variant='contained' 
      onClick={() => {
        setQuestionCount(questionCount+1);
        setSelectedAnswer('')
      }}
      disabled={endOfList === true ? true : false}
      >następne
      </Button>
    )
  }
  
  const finishExamButton = () =>{
    return(
      <Button 
      variant='contained'
      onClick={() => {
        saveExamAnswers();
        setMode('examFinished');
        setEndOfList(false);
      }}
      >zakończ</Button>
    )
  }

  const quickQestionChoice = (e) =>{
    if(e.target.value >= 1 && e.target.value <= listLength){
      setQuestionCount(e.target.value-1)
    } else return
  }

  return (
    <>
      <Box sx={{
      //background:'#F9F8F8',
      display:'flex',
      flexWrap:'wrap',
      justifyContent:'space-around',
      gap:'5px',
      mb:'24px',
      position:'fixed',
      bottom:'0'
    }}>
      <Button variant='contained' 
      onClick={() => setQuestionCount(questionCount-1)}
      disabled={questionCount<=0 ? true : false}
      >poprzednie</Button>
 
  {mode === 'learningMode' ? nextButton() : ''}
  {mode === 'learningMode' ? quickPageSelectIput() : ''}
  {mode === 'examMode' && questionCount < 19 ? nextButton() : ''}
  {mode === 'examMode' && questionCount >= 19 ? finishExamButton() : ''}
  {mode === 'examFinished' ? nextButton() : ''}
    </Box>
    </>
  )
}

export default Footer