import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LinkIcon from '@mui/icons-material/Link';
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

  const licenseInfo = {
    'Pobierz pdf z pytaniami':'https://ksp.policja.gov.pl/download/188/261842/PYTANIAEGZAMINACYJNE.pdf',
    'Opłaty skarbowe':'https://ksp.policja.gov.pl/wpa/bron/oplaty-skarbowe/446,oplata.html',
    'Wzory podań':'https://ksp.policja.gov.pl/wpa/bron/wzory-podan/7379,Wzory.html',
    'Rozporządzenie MSWiA w spawie egzaminu':'https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20230001475/O/D20231475.pdf',
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
        {Object.entries(licenseInfo).map(([name, link]) => (
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
    </Box>
  );

  return (
    <div>

<ListItemButton
          sx={{
            position:'absolute',
            top:{lg:'12px', xs:'60px'},
            left:'12px',
            cursor:'pointer'
          }} onClick={toggleDrawer(true)}>
              <ListItemIcon>
                <LinkIcon />
              </ListItemIcon>
              <ListItemText primary={'Akty prawne'}/>
            </ListItemButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
