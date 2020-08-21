import React from 'react';
import './App.css';
import Welcome from './modules/welcome';
import JobSeeker from './modules/jobSeeker';
import Companies from './modules/companies';
import OurApp from './modules/ourApp';
import Subscribe from './modules/subscribe';
import Footer from './modules/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
        <JobSeeker />
        <Companies />
        <OurApp />
        <Subscribe />
        <Footer />
      </header>
    </div>
  );
}

export default App;
