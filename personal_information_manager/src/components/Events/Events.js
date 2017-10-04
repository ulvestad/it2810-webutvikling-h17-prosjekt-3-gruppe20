import React, {Component} from 'react';
import AddEvent from './AddEvent'
import './Events.css';

class Events extends Component {
  constructor(props) {
    super(props);

    const event = {
      title: 'title',
      start: new Date(),
      end: new Date(),
      id: 0
    }

    this.state = {
      events: [event],
    }

    this.addEvent = this.addEvent.bind(this);
  }

  addEvent(event) {

    var events = this
      .state
      .events
      .slice();

    const index = events.length;
    event['id'] = index;   
    events.push(event);

    this.setState({events: events})
  }

  render() {
    const eventItems = this
      .state
      .events
      .map((el) => <li key={el.id}>
        <b>{el.title} </b> from {el.start.toDateString()} to {el.end.toDateString()}
      </li>);

    const now = new Date();
    var soon = new Date();
    soon.setHours(soon.getHours() + 1);  
    
    const slotInfo = {
      start: now,
      end: soon,
      slots: [now],
      action: 'click'
    }

    return (
      <section id="myModal" className="bg-light">
        <div className="container">
        <AddEvent handleSubmit={this.addEvent} start={slotInfo.start} end={slotInfo.end} />
        <hr />
        <h1>Events</h1>
        <ul>{eventItems}</ul>
        </div>
      </section>
    );
  }
}

export default Events;