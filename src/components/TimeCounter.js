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
        <Typography className='time-counter' sx={{
          background:'#1976d2',
          fontFamily: 'Kode Mono, monospace', 
          fontSize: '2rem',
          //color:'#1976d2',
          p:'0 24px',
          borderRadius:'4px',
          boxShadow: 1, 
          textAlign:'center',
          position:'absolute',
          top: '24px',
          right: '48px'
        }}
        >
        {formatTime(minutes)}:{formatTime(seconds)}
        </Typography>
    </Box>
  )
}

export default TimeCounter