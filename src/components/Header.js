import React from 'react';
import { useState } from 'react';

import { Tabs, Tab, Box } from '@mui/material';

const Header = ({setMode}) => {

  const [markedTab, setMarkedTab] = useState(0)

  return (
    <Box>
    <Tabs value={markedTab}>
      <Tab label="Tryb nauki" 
      onClick={() => {
        setMode('learningMode');
        setMarkedTab(0);
        }}/>
      <Tab label="Tryb egzaminu"  
      onClick={() => {
        setMode('examMode');
        setMarkedTab(1);
      }}/>
    </Tabs>
    </Box>
  )
}

export default Header