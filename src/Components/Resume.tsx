import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import { makeStyles } from '@mui/styles';
import { Box, Typography, Grid, IconButton, Theme } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import testFile from '../assets/test.pdf';
import Navbar from './Navbar';
import Footer from './Footer';

const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    minHeight: '100vh',
    position: 'relative',
    paddingBottom: theme.spacing(2)
  },
  pageContainer: {
    textAlign: 'center',
    marginBottom: theme.spacing(1),
    paddingTop: theme.spacing(10)
  }
}));

const Resume = () => {
  const [numPages, setNumPages] = useState(2);
  const [pageNumber, setPageNumber] = useState(1);
  const classes = useStyles();

  function onDocumentLoaded({ numPages }: any) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }
  function nextPage() {
    changePage(1);
  }

  return (
    <Box className={classes.mainContainer}>
      <Navbar />
      <Box>
        <Box className={classes.pageContainer}>
          <Typography variant="body1" sx={{ color: 'primary.main' }}>
            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
          </Typography>
        </Box>
        <Grid
          container
          spacing={3}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <IconButton onClick={previousPage} disabled={pageNumber <= 1}>
              <ArrowBackIosIcon sx={{ color: 'primary.main' }} />
            </IconButton>
          </Grid>
          <Grid item>
            <Document file={testFile} onLoadSuccess={onDocumentLoaded}>
              <Page pageNumber={pageNumber} />
            </Document>
          </Grid>
          <Grid item>
            <IconButton onClick={nextPage} disabled={pageNumber >= numPages}>
              <ArrowForwardIosIcon sx={{ color: 'primary.main' }} />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default Resume;
