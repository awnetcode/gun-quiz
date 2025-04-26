import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import GavelIcon from '@mui/icons-material/Gavel';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const actLinks = {
    'Ustawa o Broni i Amunicji': 'https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20240000485/O/D20240485.pdf', 
    'Rozporządzenie MSWiA w sprawie przechowywania, noszenia i ewidencjonowania': 'https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20230000364/O/D20230364.pdf', 
    'Wzorcowy regulamin strzelnic': 'https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20000180234/T/D20000234L.pdf', 
    'Rozporządzenia MTiGM w sprawie przewożenia':'https://isap.sejm.gov.pl/isap.Nsf/download.xsp/WDU20000310390/O/D20000390.pdf'
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {Object.entries(actLinks).map(([name, link]) => (
         <ListItem key={name} disablePadding>
            <ListItemButton
                component="a"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
              <ListItemIcon>
                <OpenInNewIcon />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
            <Divider />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GavelIcon/>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button sx={{
        position:'absolute',
        top:{lg:'12px', xs:'60px'},
        left:'12px'
      }} onClick={toggleDrawer(true)} variant='contained'>linki</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
