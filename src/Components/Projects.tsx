import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import { projects } from '../data/projects';

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
            {projects.map((project, i) => (
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
                    image={project.img}
                    alt={project.projectName}
                    height="200"
                    style={{ padding: '1rem', opacity: '0.7' }}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.projectName}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {project.projectAbstract}
                    </Typography>
                    <Typography variant="body2" component="p">
                      <strong> Tech Stack: </strong> {project.techStack}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.buttonGroup}>
                    {project.githubURL && (
                      <Button variant="outlined">
                        <Link
                          href={project.githubURL}
                          underline="none"
                          target="_blank"
                          rel="noopener"
                        >
                          Github
                        </Link>
                      </Button>
                    )}
                    {project.demoURL && (
                      <Button variant="outlined">
                        <Link
                          href={project.demoURL}
                          underline="none"
                          target="_blank"
                          rel="noopener"
                        >
                          Demo
                        </Link>
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Projects;
