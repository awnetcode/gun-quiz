import './App.css';

import { useState, useEffect } from 'react';

import questions from './assets/questionsData.json';

import Header from './components/Header';
import MainPage from './components/MainPage';
import Footer from './components/Footer';

function App() {
  const [mode, setMode] = useState('learningMode');
  const [questionCount, setQuestionCount] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const setAnswerCorrect = () =>{
    setCorrectAnswer(questions[questionCount].correctAnswer);
  }

  useEffect(() => {
    setAnswerCorrect();
  },[questionCount])

  return (
    <div className='container'>
      <Header setMode={setMode}/>
      <MainPage 
      questions={questions} 
      mode={mode}
      questionCount={questionCount}
      correctAnswer={correctAnswer}
      setCorrectAnswer={setCorrectAnswer}
      />
      <Footer questions={questions} questionCount={questionCount} setQuestionCount={setQuestionCount}/>
    </div>
  );
}

export default App;
