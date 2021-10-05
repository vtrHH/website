import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import Home from './Components/Home';
import Projects from './Components/Projects';

function App() {
  return (
    <>
      <CssBaseline />
      <Route path="/" component={Home} exact />
      <Route path="/projects" component={Projects} exact />
    </>
  );
}

export default App;
