import './App.css';

import { useState } from 'react';

import questions from './assets/questionsHints.json';

import Header from './components/Header';
import MainPage from './components/MainPage';
import Footer from './components/Footer';

function App() {
  const [mode, setMode] = useState('learningMode');
  const [questionCount, setQuestionCount] = useState(0);

  return (
    <div className='container'>
      <Header setMode={setMode}/>
      <MainPage 
      questions={questions} 
      mode={mode}
      questionCount={questionCount}
      />
      <Footer questions={questions} questionCount={questionCount} setQuestionCount={setQuestionCount}/>
    </div>
  );
}

export default App;
