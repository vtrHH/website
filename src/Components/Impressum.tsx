import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

import { Box, Typography, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(10),
    minHeight: '100vh',
    position: 'relative',
    paddingBottom: theme.spacing(10)
  },
  contentContainer: {
    margin: '0 10em',
    [theme.breakpoints.down('md')]: {
      margin: '0 1.5em'
    }
  },
  listText: {
    color: theme.palette.primary.main
  }
}));

const Impressum = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Navbar />
      <Box className={classes.contentContainer}>
        <Typography variant="h5" color="primary" gutterBottom>
          Impressum
        </Typography>
        <Typography variant="body1" color="primary">
          Verena Traub
        </Typography>
        <Typography variant="body1" color="primary">
          Bergstraße 9
        </Typography>
        <Typography variant="body1" color="primary">
          73489 Jagstzell
        </Typography>
        <br />
        <Typography variant="body1" color="primary">
          Telefon: +49 175 649 50 50
        </Typography>
        <Typography variant="body1" color="primary">
          Email: verenatraubmail@gmail.com
        </Typography>
        <br />
        <Typography variant="h5" color="primary" gutterBottom>
          Datenschutz
        </Typography>
        <Typography variant="body1" color="primary">
          Verantwortlich für die Datenverarbeitung auf dieser Website ist Verena
          Traub – Kontaktdaten siehe oben.
        </Typography>
        <br />
        <Typography variant="h5" color="primary" gutterBottom>
          Information zur Datenverarbeitung
        </Typography>
        <Typography variant="body1" color="primary">
          Der Hosting-Provider dieser Website erhebt und speichert automatisch
          einige nicht personenbezogene Daten in den sogenannten
          Server-Logfiles. Diese übermittelt Ihr Browser automatisch und sind
          zur Auswertung im Fehlerfall gedacht. Diese Website speichert
          keinerlei Cookies oder personenbezogene Daten.
        </Typography>
        <br />
        <Typography variant="body1" color="primary">
          Konkret werden die folgenden Daten erfasst:
        </Typography>
        <ul>
          <li className={classes.listText}>Browsertyp und Browserversion</li>
          <li className={classes.listText}>verwendetes Betriebssystem</li>
          <li className={classes.listText}>Referrer URL</li>
          <li className={classes.listText}>
            Hostname des zugreifenden Rechners
          </li>
          <li className={classes.listText}>Uhrzeit der Serveranfrage</li>
          <li className={classes.listText}>IP-Adresse</li>
        </ul>
      </Box>
      <Footer />
    </Box>
  );
};

export default Impressum;
