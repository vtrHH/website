import React from 'react';
import Typed from 'react-typed';

import { Avatar, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import personalPicture from '../assets/20140903-DSC_9007.jpg';

const useStyles = makeStyles({
  container: {
    height: '90vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#c2c4c2'
  },
  avatar: {
    margin: '0 auto'
  }
});

const Intro = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Avatar
        className={classes.avatar}
        style={{ width: 200, height: 200 }}
        src={personalPicture}
        alt="Verena Traub"
      />
      <Typography variant="h4" className={classes.text}>
        Verena Traub
      </Typography>
      <br />
      <Typography variant="h5" className={classes.text}>
        <Typed
          strings={[
            'Passionate about #technology, #agile, #innovation',
            'Working in HR & TechRecruiting for many years, now shifting careers to become a Developer.'
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Intro;
