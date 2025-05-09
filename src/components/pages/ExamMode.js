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

  useEffect(() => {
    const selectedQuestions = getQuestionSet(questions, 20);
    setRandomQuestions(selectedQuestions);
    setQuestionCount(0);
    setListLength(selectedQuestions.length);
    setCheckedAnswersArray(Array.from({ length: selectedQuestions.length }, () => ""));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      fontFamily: 'Cormorant-Garamond, serif',
      fontSize:{lg:'24px', xs:'16px'},
      p:'10px'
    }}>
    <Typography sx={{
      fontFamily: 'inherit',
      textAlign:'center',
      fontSize: 'inherit',
    }}>Pytanie  {randomQuestions[questionCount].number} <br/>
    ({randomQuestions[questionCount].hint === '' ? ' brak ' : randomQuestions[questionCount].hint})
    </Typography>
    <Typography sx={{
      fontFamily: 'inherit',
      fontSize: 'inherit',
      fontWeight:'600',
      textIndent:'50px',
      mb:'16px',
      mt:'16px',
      textAlign:'justify',
    }}
    >{randomQuestions[questionCount].question}</Typography>
   {randomQuestions[questionCount]?.answers &&
  Object.entries(randomQuestions[questionCount].answers).map(([key, value], index) => (
    <Typography key={index} sx={{ 
      fontFamily: 'inherit', 
      fontSize:{lg:'20px', xs:'14px'}, 
      ml:{lg:'40px', xs:'0'},  
      p: '4px' }}>
        <Checkbox
        checked={selectedAnswer === key}
        onChange={() => markAnswerByCheckbox(key)}
      />
      <span className='question-key'>{key}.</span> {value}
    </Typography>
  ))}

  </Box>
  <Box sx={{
        display:{lg:'block', xs:'none'},
        width: {xs: '100%', lg:'60%'},
        position:'fixed',
        bottom:{lg:'50px', xs:'100px'},
        m:'0 auto',
  }}>

<LinearProgress sx={{
    height:'5px',
    width:'100%'
  }}
   color='success' variant="determinate" value={questionCount*5 + 5}/> {questionCount +1} z {randomQuestions.length}

  </Box>
  </>
  )
}

export default ExamMode