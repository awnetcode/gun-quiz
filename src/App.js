import './App.css';

import { useState, useEffect } from 'react';

import questions from './assets/questionsData.json';

import Header from './components/Header';
import MainPage from './components/MainPage';
import Footer from './components/Footer';

function App() {
  const [mode, setMode] = useState('learningMode'); //tryb quizu wybierany przez TABS
  const [questionCount, setQuestionCount] = useState(0); //numer pytania, które aktualnie wyświetla
  const [correctAnswer, setCorrectAnswer] = useState(''); //prawidłowa odpowiedź aktualnego pytania 
  const [answerNames, setAnswerNames] = useState([]); //tablica z kluczami obiektu 'answers' aktualnego pytania

  const [selectedAnswer, setSelectedAnswer] = useState(''); //klucz obliektu 'answers' zaznaczony checkboxem
  const [randomQuestions, setRandomQuestions] = useState([]); //tablica wylosowanych 20 pytań z puli 200 

  const [endOfList, setEndOfList] = useState(false); //ogranicza questionCount do długości tablicy pytań

  const setAnswerCorrect = () =>{
    setCorrectAnswer(questions[questionCount].correctAnswer);
  }

  useEffect(() => {
    setAnswerCorrect();
    setAnswerNames(Object.keys(questions[questionCount].answers));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[questionCount])

  return (
    <div className='container'>
      <Header setMode={setMode}/>
      <MainPage 
      questions={questions} 
      mode={mode}
      questionCount={questionCount}
      setQuestionCount={setQuestionCount}
      correctAnswer={correctAnswer}
      setCorrectAnswer={setCorrectAnswer}
      answerNames={answerNames}
      setAnswerNames={setAnswerNames}
      selectedAnswer={selectedAnswer}
      setSelectedAnswer={setSelectedAnswer}
      randomQuestions={randomQuestions}
      setRandomQuestions={setRandomQuestions}
      setEndOfList={setEndOfList}
      />
      <Footer
       questionCount={questionCount}
       setQuestionCount={setQuestionCount}
       setSelectedAnswer={setSelectedAnswer}
       endOfList={endOfList}
      />
    </div>
  );
}

export default App;
