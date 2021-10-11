import React from 'react';

import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar, Link, Grid, Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  navbar: {
    backgroundColor: theme.palette.neutral.main
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.navbar}>
        <Grid container spacing={3}>
          <Grid item>
            <Link variant="h5" color="primary.main" underline="none" href="/">
              Home
            </Link>
          </Grid>
          <Grid item>
            <Link
              variant="h5"
              color="primary.main"
              underline="none"
              href="/projects"
            >
              Projects
            </Link>
          </Grid>
          <Grid item>
            <Link
              variant="h5"
              color="primary.main"
              underline="none"
              href="/resume"
            >
              Resume
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
