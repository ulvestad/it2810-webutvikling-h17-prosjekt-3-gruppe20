import React, { Component } from 'react';
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
    return (
      <div className="App">
        <Nav notis={this.state.notis}/>
        <Calender events={this.state.events} update={this.update}/>
        <Notes notes={this.state.notes}/>
        <Todo todos={this.state.todos}/>
        <Notifications notis={this.state.notis}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
