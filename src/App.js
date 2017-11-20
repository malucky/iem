import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Terms from './Terms/Terms';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <main className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/terms" component={Terms} />
        </main>
      </Router>
    );
  }
}

export default App;
