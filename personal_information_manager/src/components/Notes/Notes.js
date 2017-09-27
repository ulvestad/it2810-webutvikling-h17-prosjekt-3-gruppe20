import React, { Component } from "react";

class Calender extends Component{
  render(){
    return(
      <section id="notes">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>Notes</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <div className="notesContainer">
                <div id="note">Noe notater osv. Lorem ipsimen consetiaser elt, asdeit mushc erosdhie.</div>
                <div id="note">Husk å levere oppgaven</div>
                <div id="note">+</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Calender;
