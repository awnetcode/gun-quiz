import React from 'react';

import { Box } from '@mui/material';

import ExamMode from './pages/ExamMode';
import LearningMode from './pages/LearningMode';
import CheckExamResult from './pages/CheckExamResult';

const MainPage = ({
   mode, 
   questionCount,
   questions, 
   correctAnswer, 
   setCorrectAnswer, 
   answerNames, 
   setQuestionCount,
   selectedAnswer,
   setSelectedAnswer,
   randomQuestions,
   setRandomQuestions,
   setListLength,
   checkListEnd,
   checkedAnswersArray,
   setCheckedAnswersArray,
   examResult
  }) => {

  let pageContent = '';

  switch(mode){
    case 'examMode':
      pageContent = <ExamMode 
      questions={questions} 
      questionCount={questionCount}
      setQuestionCount={setQuestionCount}
      selectedAnswer={selectedAnswer}
      setSelectedAnswer={setSelectedAnswer}
      randomQuestions={randomQuestions}
      setRandomQuestions={setRandomQuestions}
      checkListEnd={checkListEnd}
      setListLength={setListLength}
      checkedAnswersArray={checkedAnswersArray}
      setCheckedAnswersArray={setCheckedAnswersArray}
      />;
      break;
    case 'learningMode':
      pageContent = <LearningMode 
      questions={questions} 
      questionCount={questionCount}
      correctAnswer={correctAnswer}
      setCorrectAnswer={setCorrectAnswer}
      answerNames={answerNames}
      checkListEnd={checkListEnd}
      setListLength={setListLength}
      />;
      break;

    case 'examFinished':
      pageContent = <CheckExamResult 
      examResult={examResult}
      questionCount={questionCount}
      setQuestionCount={setQuestionCount}
      setListLength={setListLength}
      checkListEnd={checkListEnd}
      />
      break;

    default:
      pageContent = <LearningMode />;
  }

  return (
    <Box sx={{
      boxShadow:1,
         width:{lg:'60%', xs:'90%'},
       
         mb:{lg:'0', xs:'96px'},
         mt:{lg:'0px', xs:'60px'},
         p:'12px',
         fontFamily: 'Cormorant-Garamond, serif',
         overflowY:'scroll',
    }}>{pageContent}</Box>
  )
}

export default MainPage