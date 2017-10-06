import React, { Component } from "react";
import { loadFromLocalStorage} from '../../localStorage'

export function getAppoitments(){
  var calenderAppoitments = loadFromLocalStorage("events");
  if(!calenderAppoitments){
    return [];
  }
  var appoitments = [];
  for (var i = 0; i < Object.keys(calenderAppoitments).length; i++) {
      var startDate = calenderAppoitments[i].start;
      var date = startDate.slice(0, 4)+" "+startDate.slice(5, 7)+" "+ startDate.slice(8, 10)
      var thisDate = new Date();
      thisDate.setDate(thisDate.getDate()-1);
      thisDate = thisDate.toDateString();
      date = new Date(date).toDateString();
      if(thisDate === date){
        appoitments.push(calenderAppoitments[i].title)
      }
   }
  return appoitments;
}

class Notifications extends Component{

  constructor(props) {
    super(props);
    this.state = {
      appoitments: getAppoitments()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ appoitments: getAppoitments()});
  }

  getDay(){
    return (new Date().toDateString());
  }

  render(){
    document.getElementsByClassName("rbc-day-bg rbc-today").onclick = function() { alert('blah'); };
    return(
      <section id="notifications">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>Notfications</h2>
              <p className="lead">Notifications for: <kbd>{this.getDay()}</kbd></p>
              <ul>
                {/*TODO: update list when new appoitments are a added*/}
                {/* Generates a "ul" list from appoitments with unique id's */}
                {this.state.appoitments.map((appoitment, i) => <li key={i}><span className="badge badge-danger" id="liBadge">{i+1} </span>{appoitment}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Notifications;
