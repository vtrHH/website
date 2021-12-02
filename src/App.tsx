import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import Home from './Components/Home';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Impressum from './Components/Impressum';

function App() {
  return (
    <>
      <CssBaseline />
      <Route path="/" component={Home} exact />
      <Route path="/projects" component={Projects} exact />
      <Route path="/resume" component={Resume} exact />
      <Route path="/impressum-datenschutz" component={Impressum} exact />
    </>
  );
}

export default App;
