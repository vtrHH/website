import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import { makeStyles } from '@mui/styles';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import testFile from '../assets/test.pdf';
import Navbar from './Navbar';

const useStyles = makeStyles({
  mainContainer: {
    marginTop: '5rem',
    display: 'flex',
    justifyContent: 'center'
  },
  pageContainer: {
    textAlign: 'center',
    marginBottom: '0.5rem'
  }
});

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
          <Typography variant="body1" style={{ color: '#c2c4c2' }}>
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
              <ArrowBackIosIcon style={{ color: '#c2c4c2' }} />
            </IconButton>
          </Grid>
          <Grid item>
            <Document file={testFile} onLoadSuccess={onDocumentLoaded}>
              <Page pageNumber={pageNumber} />
            </Document>
          </Grid>
          <Grid item>
            <IconButton onClick={nextPage} disabled={pageNumber >= numPages}>
              <ArrowForwardIosIcon style={{ color: '#c2c4c2' }} />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Resume;
