import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

import {
  Box,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Button,
  Typography,
  Theme
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import eyebird from '../assets/eyebird.png';
import maskGame from '../assets/mask-game.png';
import mooseician from '../assets/mooseician.png';
import ownWebsite from '../assets/own_website.png';

const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    marginTop: theme.spacing(10),
    minHeight: '100vh',
    position: 'relative',
    paddingBottom: theme.spacing(10)
  },
  gridContainer: {
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
      margin: '0 3rem 0 3rem'
    },
    [theme.breakpoints.up('lg')]: {
      margin: '0 10rem 0 10rem'
    }
  },
  cardContainer: {
    maxWidth: 345,
    minHeight: 430,
    margin: '1rem auto'
  },
  cardContent: {
    color: theme.palette.primary.main,
    textAlign: 'center'
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.mainContainer}>
        <Navbar />
        <Box className={classes.gridContainer}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                className={classes.cardContainer}
                sx={{
                  backgroundColor: 'neutral.main',
                  borderRadius: '3%'
                }}
              >
                <CardMedia
                  component="img"
                  image={eyebird}
                  alt="EyeBird"
                  height="200"
                  style={{ padding: '1rem', opacity: '0.7' }}
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
                      target="_blank"
                      rel="noopener"
                    >
                      Github
                    </Link>
                  </Button>
                  <Button variant="outlined">
                    <Link
                      href="https://eyebird.netlify.app/"
                      underline="none"
                      target="_blank"
                      rel="noopener"
                    >
                      Demo
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                className={classes.cardContainer}
                sx={{
                  backgroundColor: 'neutral.main',
                  borderRadius: '3%'
                }}
              >
                <CardMedia
                  component="img"
                  image={mooseician}
                  alt="Mooseician"
                  height="200"
                  style={{ padding: '1rem', opacity: '0.7' }}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="div">
                    Mooseician
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    a marketplace for musicians
                  </Typography>
                  <Typography variant="body2" component="p">
                    Tech Stack: JavaScript, ExpressJS, NodeJS, Handlebars,
                    MongoDB, Mongoose, SASS, Bootstrap, HTML & CSS
                  </Typography>
                </CardContent>
                <CardActions className={classes.buttonGroup}>
                  <Button variant="outlined">
                    <Link
                      href="https://github.com/vtrHH/musicians-app"
                      underline="none"
                      target="_blank"
                      rel="noopener"
                    >
                      Github
                    </Link>
                  </Button>
                  <Button variant="outlined">
                    <Link
                      href="https://mooseician.herokuapp.com/"
                      underline="none"
                      target="_blank"
                      rel="noopener"
                    >
                      Demo
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                className={classes.cardContainer}
                sx={{
                  backgroundColor: 'neutral.main',
                  borderRadius: '3%'
                }}
              >
                <CardMedia
                  component="img"
                  image={ownWebsite}
                  alt="Mooseician"
                  height="200"
                  style={{ padding: '1rem', opacity: '0.7' }}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="div">
                    My website
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    a little portfolio website
                  </Typography>
                  <Typography variant="body2" component="p">
                    Tech Stack: JavaScript, React, Material UI, React Typed,
                    React PDF, HTML & CSS
                  </Typography>
                </CardContent>
                <CardActions className={classes.buttonGroup}>
                  <Button variant="outlined">
                    <Link
                      href="https://github.com/vtrHH/website"
                      underline="none"
                      target="_blank"
                      rel="noopener"
                    >
                      Github
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                className={classes.cardContainer}
                sx={{
                  backgroundColor: 'neutral.main',
                  borderRadius: '3%'
                }}
              >
                <CardMedia
                  component="img"
                  image={maskGame}
                  alt="Mask Game"
                  height="200"
                  style={{ padding: '1rem', opacity: '0.7' }}
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
                      target="_blank"
                      rel="noopener"
                    >
                      Github
                    </Link>
                  </Button>
                  <Button variant="outlined">
                    <Link
                      href="https://verena-mask-game.netlify.app/"
                      underline="none"
                      target="_blank"
                      rel="noopener"
                    >
                      Demo
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Projects;
