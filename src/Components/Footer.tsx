import React from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Typography,
  Box
} from '@mui/material';
import { LinkedIn, Twitter, GitHub } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  text: {
    backgroundColor: '#292828',
    textAlign: 'center',
    color: '#c2c4c2'
  },
  root: {
    '& .MuiBottomNavigationAction-root': {
      minWidth: 0,
      maxWidth: '250'
    },
    '& .MuiSvgIcon-root': {
      fill: '#c2c4c2',
      '&:hover': {
        fontSize: '1.8rem'
      }
    }
  }
});

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <BottomNavigation style={{ backgroundColor: '#292828' }}>
        <BottomNavigationAction icon={<LinkedIn />} className={classes.root} />
        <BottomNavigationAction icon={<Twitter />} className={classes.root} />
        <BottomNavigationAction icon={<GitHub />} className={classes.root} />
      </BottomNavigation>
      <Box>
        <Typography className={classes.text}>
          Made with ♡, React & Material UI
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
