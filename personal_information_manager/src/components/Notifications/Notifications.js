import React, { Component } from "react";

class Notifications extends Component{
  render(){
    return(
      <section id="notifications">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <h2>Notfications</h2>
              <p class="lead"><span className="badge badge-danger">2</span></p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Notifications;
