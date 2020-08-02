import React, { useEffect } from 'react';
import './App.css';
import Planning from './components/planning-container'

const App = () => {

  useEffect(() => {
    prepareUser();
  }, []);

  return (
    <div className="app-container">
      <Planning />
    </div>
  );
}

const prepareUser = () => {
  const key = 'sp-userid';
  let userId = localStorage.getItem(key);

  if (!userId) {
    localStorage.setItem(key, Date.now());
  }
}

export default App;
