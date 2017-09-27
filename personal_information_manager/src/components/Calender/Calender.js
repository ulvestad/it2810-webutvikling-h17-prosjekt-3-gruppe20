import React, { Component } from "react";

class Calender extends Component{
  render(){
    return(
      <section id="notes" className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>Calender</h2>
              <p className="lead">
                This is a great place to show of the calender. This section is purposefully empty. Please add a super duper calender =)
              </p>
              <img src="http://blog.caspio.com/wp-content/uploads/Online_Event_Calendar_View_Calendar.png" alt="calender"/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Calender;
