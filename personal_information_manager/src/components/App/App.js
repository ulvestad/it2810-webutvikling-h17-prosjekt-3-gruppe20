import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { getEvents, getNotis, getTodos, getNotes } from '../../localStorage'

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
import Header from "../Header/Header.js";
import Calender from "../Calender/Calender.js";
import Notes from "../Notes/Notes.js";
import Todo from "../Todo/Todo.js";
import Notifications from "../Notifications/Notifications.js";
import Footer from "../Footer/Footer.js";

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      events: getEvents(),
      notis: getNotis(),
      todos: getTodos(),
      notes: getNotes()
    }

    this.update = this.update.bind(this)
  }

  /* Updates the state, will trigger render() */
  update() {
    this.setState({
      events: getEvents(),
      notis: getNotis()
    })
  }

  render() {
    const Notis = () => {
      <Notifications notis={this.state.notis}/>
    }

    return (
      <Router>
        <div className="App">
          <Nav notis={this.state.notis}/>

          <Route exact path="/" component={Notis}/>
    
        </div>
      </Router>
    );
  }
}

export default App;
