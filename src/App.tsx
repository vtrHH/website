import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import Home from './Components/Home';
import Projects from './Components/Projects';
import Resume from './Components/Resume';

function App() {
  return (
    <>
      <CssBaseline />
      <Route path="/" component={Home} exact />
      <Route path="/projects" component={Projects} exact />
      <Route path="/resume" component={Resume} exact />
    </>
  );
}

export default App;
