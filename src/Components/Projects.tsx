import React from 'react';

import Navbar from './Navbar';

import {
  Box,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Button,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import eyebird from '../assets/eyebird.png';
import maskGame from '../assets/mask-game.png';
import mooseician from '../assets/mooseician.png';

const useStyles = makeStyles({
  mainContainer: {
    margin: '5rem auto'
  },
  cardContainer: {
    maxWidth: 345,
    height: 430,
    margin: '1rem auto'
  },
  cardContent: {
    color: '#c2c4c2',
    textAlign: 'center'
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center'
  }
});

const Projects = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Navbar />
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            className={classes.cardContainer}
            style={{ backgroundColor: '#292828', borderRadius: '3%' }}
          >
            <CardMedia
              component="img"
              image={eyebird}
              alt="EyeBird"
              height="200"
              style={{ padding: '1rem' }}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="div">
                EyeBird
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                a plattform for bird lovers
              </Typography>
              <Typography variant="body2" component="p">
                Tech Stack: JavaScript, React, ExpressJS, NodeJS, MongoDB,
                Mongoose, Leaflet, Axios, SASS, React-Bootstrap, HTML & CSS
              </Typography>
            </CardContent>
            <CardActions className={classes.buttonGroup}>
              <Button variant="outlined">
                <Link
                  href="https://github.com/vtrHH/nature-app"
                  underline="none"
                >
                  Github
                </Link>
              </Button>
              <Button variant="outlined">
                <Link href="https://eyebird.netlify.app/" underline="none">
                  Demo
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            className={classes.cardContainer}
            style={{ backgroundColor: '#292828', borderRadius: '3%' }}
          >
            <CardMedia
              component="img"
              image={mooseician}
              alt="Mooseician"
              height="200"
              style={{ padding: '1rem' }}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="div">
                Mooseician
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                a marketplace for musicians
              </Typography>
              <Typography variant="body2" component="p">
                Tech Stack: JavaScript, ExpressJS, NodeJS, Handlebars, MongoDB,
                Mongoose, SASS, Bootstrap, HTML & CSS
              </Typography>
            </CardContent>
            <CardActions className={classes.buttonGroup}>
              <Button variant="outlined">
                <Link
                  href="https://github.com/vtrHH/musicians-app"
                  underline="none"
                >
                  Github
                </Link>
              </Button>
              <Button variant="outlined">
                <Link href="https://mooseician.herokuapp.com/" underline="none">
                  Demo
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            className={classes.cardContainer}
            style={{ backgroundColor: '#292828', borderRadius: '3%' }}
          >
            <CardMedia
              component="img"
              image={maskGame}
              alt="Mask Game"
              height="200"
              style={{ padding: '1rem' }}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="div">
                Mask Game
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                an online game
              </Typography>
              <Typography variant="body2" component="p">
                Tech Stack: HTML & CSS, HTML Canvas, JavaScript
              </Typography>
            </CardContent>
            <CardActions className={classes.buttonGroup}>
              <Button variant="outlined">
                <Link
                  href="https://github.com/vtrHH/ironhack-project1-mask-game"
                  underline="none"
                >
                  Github
                </Link>
              </Button>
              <Button variant="outlined">
                <Link
                  href="https://verena-mask-game.netlify.app/"
                  underline="none"
                >
                  Demo
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
