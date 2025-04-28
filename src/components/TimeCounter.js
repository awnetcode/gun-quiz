import React from 'react';
import { useState, useEffect } from 'react';

import { Box, Typography } from '@mui/material';

const TimeCounter = () => {
    const [secondsLeft, setSecondsLeft] = useState(20 * 60); // 20 minut

    useEffect(() => {
      const interval = setInterval(() => {
        setSecondsLeft(prev => {
          if (prev > 0) {
            return prev - 1;
          } else {
            clearInterval(interval);
            return 0;
          }
        });
      }, 1000);
  
    // Czyścimy interwał, gdy komponent się unmountuje
      return () => clearInterval(interval);
    }, []);
  
    // Obliczamy minuty i sekundy do wyświetlenia
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
  
    // Formatowanie do 00:00
    const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <Box>
        <Typography color='success' className='time-counter' sx={{
          fontSize: '1.5rem',
          p:'0 24px',
          borderRadius:'4px',
          boxShadow: 1, 
          textAlign:'center',
          position:'absolute',
          top:{lg:'24px', xs:'60px'}, 
          right:{lg:'48px', xs:'12px'}, 
        }}
        >     
        {formatTime(minutes)}:{formatTime(seconds)}
        </Typography>
    </Box>
  )
}

export default TimeCounter