import React, { Component } from 'react';

//CSS imports
import './App.css';
import '../Nav/Nav.css';
import '../Header/Header.css';
import '../Calender/Calender.css';
import '../Notes/Notes.css';
import '../Todo/Todo.css';
import '../Todo/List.css'
import '../Notifications/Notifications.css';

//Component imports
import Nav from "../Nav/Nav.js";
import Header from "../Header/Header.js";
import Calender from "../Calender/Calender.js";
import Notes from "../Notes/Notes.js";
import Todo from "../Todo/Todo.js";
import Notifications from "../Notifications/Notifications.js";
import Footer from "../Footer/Footer.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Header/>
        <Calender/>
        <Notes/>
        <Todo/>
        <Notifications/>
        <Footer/>
      </div>
    );
  }
}

export default App;
