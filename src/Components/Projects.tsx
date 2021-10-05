import React from 'react';

import Navbar from './Navbar';

import {
  Box,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import image from '../assets/20140903-DSC_9007.jpg';

const useStyles = makeStyles({
  CardContainer: {
    maxWidth: 345,
    margin: '5rem auto'
  }
});

const Projects = () => {
  const classes = useStyles();
  return (
    <Box>
      <Navbar />
      <Grid container>
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.CardContainer}>
            <CardMedia component="img" image={image} alt="1" height="140" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Project 1
              </Typography>
              <Typography gutterBottom variant="body2" component="p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem culpa blanditiis suscipit quam libero deleniti earum
                autem. Impedit minima earum fugit dolores fuga autem eveniet
                voluptas, dignissimos placeat maiores quo.
              </Typography>
            </CardContent>
            <CardActions>
              <Button>See more Details</Button>
              <Button>Watch Demo</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
