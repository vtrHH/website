import React from 'react';

import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar, Link, Grid } from '@mui/material';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#292828'
  }
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.navbar}>
        <Grid container spacing={3}>
          <Grid item>
            <Link variant="h5" color="#c2c4c2" underline="none" href="/">
              Home
            </Link>
          </Grid>
          <Grid item>
            <Link
              variant="h5"
              color="#c2c4c2"
              underline="none"
              href="/projects"
            >
              Projects
            </Link>
          </Grid>
          <Grid item>
            <Link variant="h5" color="#c2c4c2" underline="none" href="#">
              Resume
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
