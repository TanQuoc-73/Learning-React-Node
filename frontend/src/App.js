import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
