import React, {Component} from 'react';
import Header from './components/Header.js';
import Menu from './components/Menu.js';
import Services from './components/Services.js';
import Works from './components/Works.js';
import Contacts from './components/Contacts.js';
import './css/App.css';

class App extends Component {

  render(){
    return (
        <div className="App">
          <Header />
          <Menu />
          <Services />
          <Works />
          <Contacts />
        </div>
    );
  }
  
  }
  export default App;
  
