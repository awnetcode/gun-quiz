import React from 'react';

import { Tabs, Tab, Box } from '@mui/material';

const Header = ({setMode}) => {
  return (
    <Box>
    <Tabs>
      <Tab label="Tryb nauki" onClick={() => setMode('learningMode')}/>
      <Tab label="Tryb egzaminu" onClick={() => setMode('examMode')}/>
    </Tabs>
    </Box>
  )
}

export default Header