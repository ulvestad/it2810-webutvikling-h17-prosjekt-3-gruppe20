import React, { Component } from "react";
import { loadFromLocalStorage} from '../../localStorage'

export function getAppoitments(){
  const appoitments = loadFromLocalStorage('events', [])
  const today = new Date().toDateString()
  return appoitments.filter(d => new Date(d.start).toDateString() === today)
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
    this.setState({ 
      appoitments: getAppoitments()
    });
  }

  render(){
    document.getElementsByClassName("rbc-day-bg rbc-today").onclick = function() { alert('blah'); };
    return(
      <section id="notifications">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>Notfications</h2>
              <p className="lead">Notifications for: <kbd>{new Date().toDateString()}</kbd></p>
              <ul>
                {/*TODO: update list when new appoitments are a added*/}
                {/* Generates a "ul" list from appoitments with unique id's */}
                {this.state.appoitments.map((appoitment, i) => <li key={i}><span className="badge badge-danger" id="liBadge">{i+1} </span>{appoitment.title}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Notifications;
