import React from 'react';
import './App.css';
import FloatMenu from './modules/floatMenue';
import Subscribe from './modules/subscribe';
import Footer from './modules/footer';
import Container from './modules/container';
import About from './modules/about';
import Policy from './modules/policy';
import TermsAndConditions from './modules/termsAndConditions';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/" component={Container} exact />
          <Route path="/about" component={About} exact />
          <Route path="/termsAndConditions" component={TermsAndConditions} exact />
          <Route path="/policy" component={Policy} exact />
        </Switch>
        <Subscribe />
        <Footer />
      </header>
      <FloatMenu/>
    </div>
  );
}

export default App;
