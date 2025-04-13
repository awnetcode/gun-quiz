import React from 'react';

import ExamMode from './pages/ExamMode';
import LearningMode from './pages/LearningMode';

const MainPage = ({mode}) => {

  let pageContent = '';

  switch(mode){
    case 'examMode':
      pageContent = <ExamMode />;
      break;
    case 'learningMode':
      pageContent = <LearningMode />;
      break;

    default:
      pageContent = <ExamMode />;
  }

  return (
    <div>{pageContent}</div>
  )
}

export default MainPage