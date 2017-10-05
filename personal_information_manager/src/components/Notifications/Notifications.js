import React, { Component } from "react";

export function getAppoitments(){
  /* appoitments are dummie data "FUNCTION SHOULD FETCH FROM LOCAL STORAGE" */
  const appoitments = ["Finish math", "Call grandpa", "Buy new shoes"];
  return appoitments;
}

class Notifications extends Component{

  getDay(){
    return (new Date().toDateString());
  }

  render(){
    const appoitments = getAppoitments();
    return(
      <section id="notifications">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>Notfications</h2>
              <p className="lead">Notifications for: <kbd>{this.getDay()}</kbd></p>
              <ul>
                {/* Generates a "ul" list from appoitments with unique id's */}
                {appoitments.map((appoitment, i) => <li key={i}><span className="badge badge-danger" id="liBadge">{i+1} </span>{appoitment}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Notifications;
