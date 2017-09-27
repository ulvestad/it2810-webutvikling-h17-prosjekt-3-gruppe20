import React, { Component } from "react";

class Notifications extends Component{
  render(){
    return(
      <section id="notifications">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>Notfications</h2>
              <p className="lead"><span className="badge badge-danger">2</span></p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Notifications;
