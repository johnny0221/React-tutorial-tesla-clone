import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { GlobalStyled } from './components/styles/GlobalStyled';

function App() {
  return (
    <div>
      <GlobalStyled />
      <div className="App">
          <Header />
          <Home />
      </div>
    </div>
  );
}

export default App;
