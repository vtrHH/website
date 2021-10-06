import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { LinkedIn, Twitter, GitHub } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: '0',
    left: '0',
    backgroundColor: '#292828',
    paddingTop: '1em'
  },
  text: {
    textAlign: 'center',
    color: '#c2c4c2',
    paddingTop: '0.5em',
    paddingBottom: '0.5em'
  },
  clickableIcon: {
    color: '#c2c4c2',
    fontSize: '3rem',
    '&:hover': {
      color: '#ffffff'
    }
  }
});

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.container}>
        <Grid container justifyContent="center" spacing={5}>
          <Grid item>
            <LinkedIn
              className={classes.clickableIcon}
              onClick={(event) =>
                window.open(
                  'https://www.linkedin.com/in/verena-traub',
                  '_blank'
                )
              }
            />
          </Grid>
          <Grid item>
            <Twitter
              className={classes.clickableIcon}
              onClick={(event) =>
                window.open('https://twitter.com/VerenaTraub', '_blank')
              }
            />
          </Grid>
          <Grid item>
            <GitHub
              className={classes.clickableIcon}
              onClick={(event) =>
                window.open('https://github.com/vtrHH', '_blank')
              }
            />
          </Grid>
        </Grid>

        <Typography variant="body2" className={classes.text}>
          Made with ♡, React & Material UI
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
