import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardStack from "./components/cardStack/CardStack";

function App() {
  return (
      <div className="App container py-5">
        <h1 className="text-center mb-5">Scroll Stack UI</h1>
        <CardStack/>
      </div>
  );
}

export default App;
