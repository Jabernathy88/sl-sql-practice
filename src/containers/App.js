import React from 'react';
import '../styles/app.css';
import HomePage from './Homepage';
import Header from '../components/Header';

function App() {
  return (
    <div className="app bg-blue-grey">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
