import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import {storeDummyItems} from '../../localStorage'

//CSS imports
import './App.css';
import '../Nav/Nav.css';
import '../Header/Header.css';
import '../Calender/Calender.css';
import '../Notes/Notes.css';
import '../Todo/Todo.css';
import '../Notifications/Notifications.css';
import '../Events/EventModal.css'

//Component imports
import Nav from "../Nav/Nav.js";
import Calender from "../Calender/Calender.js";
import Notes from "../Notes/Notes.js";
import Todo from "../Todo/Todo.js";
import Notifications from "../Notifications/Notifications.js";

class App extends Component {
  render() {
    // Only for filling localstorage with dummy data.
    storeDummyItems();
    return (
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path='/' component={Notifications}/>
          <Route path='/calender' component={Calender}/>
          <Route path='/todo' component={Todo}/>
          <Route path='/notes' component={Notes}/>
        </Switch>
      </div>
    );
  }
}

export default App;
