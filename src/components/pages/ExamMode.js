import React from 'react';
import { useEffect } from 'react';

import { Box, Typography, Checkbox, Skeleton, LinearProgress } from '@mui/material';

import TimeCounter from '../TimeCounter';

const ExamMode = ({
  questions, 
  questionCount, 
  setQuestionCount, 
  selectedAnswer, 
  setSelectedAnswer,
  randomQuestions, 
  setRandomQuestions, 
  checkListEnd,
  setListLength,
  setCheckedAnswersArray,
}) => {

  const getQuestionSet = (data, count) => {
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  //zapisuje w stanie klucz wewnątrz obiektu answers  przy którym zaznaczam checkbox
  const markAnswerByCheckbox = (answerKey) => {
    setSelectedAnswer(answerKey);

    //zapis zaznaczonej odpowiedzi w tablicy
    setCheckedAnswersArray(prev => {
      const updated = [...prev];// spread operator jest tylko po to, aby React mógł zareagować na zmianę i odświeżyć komponent. Dokładnie to dzięki ... kopiujemy prev (czyli de facto aktualny stan checkedAnswersArray), czyli updated jest kopią w pamięci checkedAnswersArray
      updated[questionCount] = answerKey;
      return updated;
    });  
  }

  const checkIfAnswerCorrect = () =>{
    if(selectedAnswer && randomQuestions[questionCount].correctAnswer === selectedAnswer){
      console.log('brawo wygrańcu')
    }
  }

  useEffect(() => {
    const selectedQuestions = getQuestionSet(questions, 20);
    setRandomQuestions(selectedQuestions);
    setQuestionCount(0);
    setListLength(selectedQuestions.length);
    setCheckedAnswersArray(Array.from({ length: selectedQuestions.length }, () => ""));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() =>{
      checkIfAnswerCorrect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAnswer]);

  useEffect(() => {
    checkListEnd(randomQuestions.length, questionCount);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[questionCount])


  if (!randomQuestions[questionCount]) {
    return(<>
    <Typography>Ładowanie...</Typography>
    <Skeleton variant='text' width={500} height={120}/>
    <Skeleton variant='text' width={500} height={60}/>
    <Skeleton variant='text' width={500} height={60}/>
    <Skeleton variant='text' width={500} height={60}/>
    </>)
  }

  return (
    <>
    <Box><TimeCounter/></Box>
    <Box sx={{
      fontSize:'24px',
    }}>
    <Typography sx={{
      textAlign:'center',
      fontSize: '24px',
      fontFamily: 'Cormorant-Garamond, serif'
    }}>Pytanie  {randomQuestions[questionCount].number} <br/>
    ({randomQuestions[questionCount].hint === '' ? ' brak ' : randomQuestions[questionCount].hint})
    </Typography>
    <Typography sx={{
      fontSize:'24px',
      fontWeight:'600',
      textIndent:'50px',
      mb:'16px',
      mt:'16px',
      textAlign:'justify'
    }}
    >{randomQuestions[questionCount].question}</Typography>
   {randomQuestions[questionCount]?.answers &&
  Object.entries(randomQuestions[questionCount].answers).map(([key, value], index) => (
    <Typography key={index} sx={{ fontSize: '20px', ml: '40px', p: '4px' }}>
        <Checkbox
        checked={selectedAnswer === key}
        onChange={() => markAnswerByCheckbox(key)}
      />
      <span className='question-key'>{key}</span> {value}
    </Typography>
  ))}

  </Box>
  <Box sx={{
        width: {xs: '100%', mx:'80%', lg:'50%'},
        position:'absolute',
        bottom:'50px',
        m:'0 auto',
        fontFamily:'Kode Mono'
  }}>
  <LinearProgress sx={{
    height:'5px',
  }}
   color='success' variant="determinate" value={questionCount*5 + 5}/> {questionCount +1} z {randomQuestions.length}
  </Box>
  </>
  )
}

export default ExamMode