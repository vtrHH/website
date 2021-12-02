import React from 'react';
import { Box, Grid, Theme, Link } from '@mui/material';
import { LinkedIn, Twitter, GitHub } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: '0',
    left: '0',
    backgroundColor: theme.palette.neutral.main,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1)
  },
  clickableIcon: {
    color: theme.palette.primary.main,
    fontSize: '3rem',
    '&:hover': {
      color: '#ffffff'
    }
  },
  footerLink: {
    color: theme.palette.primary.main,
    '&:hover': {
      color: '#ffffff',
      textDecoration: 'underline'
    },
    display: 'flex',
    justifyContent: 'center'
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.container}>
        <Grid container justifyContent="center" spacing={3}>
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
        <Link
          variant="caption"
          color="primary.main"
          underline="none"
          href="/impressum-datenschutz"
          className={classes.footerLink}
        >
          Impressum & Datenschutz
        </Link>
      </Box>
    </>
  );
};

export default Footer;
