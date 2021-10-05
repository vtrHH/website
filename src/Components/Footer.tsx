import React from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Typography,
  Box,
  Divider
} from '@mui/material';
import { LinkedIn, Twitter, GitHub } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: '0',
    left: '0'
  },
  text: {
    backgroundColor: '#292828',
    textAlign: 'center',
    color: '#c2c4c2',
    paddingTop: '1em',
    paddingBottom: '0.5em'
  },
  root: {
    '& .MuiSvgIcon-root': {
      fill: '#c2c4c2',
      fontSize: '1.8rem',
      '&:hover': {
        fontSize: '2rem'
      }
    }
  }
});

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.container}>
        <BottomNavigation style={{ backgroundColor: '#292828' }}>
          <BottomNavigationAction
            icon={<LinkedIn />}
            className={classes.root}
          />
          <BottomNavigationAction icon={<Twitter />} className={classes.root} />
          <BottomNavigationAction icon={<GitHub />} className={classes.root} />
        </BottomNavigation>
        <Typography variant="body2" className={classes.text}>
          Made with ♡, React & Material UI
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
