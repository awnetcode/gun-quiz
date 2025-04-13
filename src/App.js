import './App.css';

import { useState } from 'react';

import questions from '../src/assets/questions.json';

import Header from './components/Header';
import MainPage from './components/MainPage';
import Footer from './components/Footer';

function App() {
  const [mode, setMode] = useState('learningMode');

  return (
    <div className='container'>
      <Header setmode={setMode}/>
      <MainPage questions={questions} mode={mode}/>
      <Footer />
    </div>
  );
}

export default App;
