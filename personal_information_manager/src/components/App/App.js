import React, { Component } from 'react';
import { storeItem, loadFromLocalStorage} from '../../localStorage'

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

  //Check if page is loaded for the first time (specific user)
  firstTimeVisit(){
    var firstTimeVisitToday = loadFromLocalStorage(new Date().toDateString());
    if(!firstTimeVisitToday){
      //visited for today key is NOT set. Creates a new key with the date of today.
      //Format: "Wed Oct 04 2017"
      var today = new Date().toDateString();
      storeItem(today, false)
    }else{
      //visited for today key is set, no need to do anything
    }
  }

  render() {
    this.firstTimeVisit();
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
