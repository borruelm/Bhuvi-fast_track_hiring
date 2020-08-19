import React from 'react';
import './App.css';
import Welcome from './modules/welcome';
import JobSeeker from './modules/jobSeeker';
import Companies from './modules/companies';
import OurApp from './modules/ourApp';
import Subscribe from './modules/subscribe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
        <JobSeeker />
        <Companies />
        <OurApp />
        <Subscribe />
      </header>
    </div>
  );
}

export default App;
