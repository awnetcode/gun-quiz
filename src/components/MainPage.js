import React from 'react';

import { Box } from '@mui/material';

import ExamMode from './pages/ExamMode';
import LearningMode from './pages/LearningMode';

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
   setEndOfList
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
      setEndOfList={setEndOfList}
      />;
      break;
    case 'learningMode':
      pageContent = <LearningMode 
      questions={questions} 
      questionCount={questionCount}
      correctAnswer={correctAnswer}
      setCorrectAnswer={setCorrectAnswer}
      answerNames={answerNames}
      setEndOfList={setEndOfList}
      />;
      break;

    default:
      pageContent = <LearningMode />;
  }

  return (
    <Box sx={{
         maxWidth:{lg:'50%', xs:'100%'},
    }}>{pageContent}</Box>
  )
}

export default MainPage