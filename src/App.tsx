import React from 'react';
import './App.css';
import Roster from './Roster';
import MoneyForm from './MoneyForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Roster />
        <MoneyForm />
      </header>
    </div>
  );
}

export default App;
