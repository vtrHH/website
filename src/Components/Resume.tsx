import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';

import testFile from '../assets/test.pdf';
import Navbar from './Navbar';

const useStyles = makeStyles({
  mainContainer: {
    margin: '6rem auto'
  },
  documentView: {
    display: 'flex',
    justifyContent: 'center'
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
      <Document file={testFile} onLoadSuccess={onDocumentLoaded}>
        <Page pageNumber={pageNumber} className={classes.documentView} />
      </Document>
      <div>
        <Typography variant="body1" style={{ color: '#c2c4c2' }}>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </Typography>
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </Box>
  );
};

export default Resume;
