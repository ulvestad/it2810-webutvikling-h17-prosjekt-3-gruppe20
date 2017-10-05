import React, {Component} from 'react';
import EventModal from './EventModal'
import './Events.css';

/* 
 * Example component to test the AddEvent component
 * 
 * When the modal returns an event, this component adds the event to the 
 * list of events in the state, and shows the event in the <ul> list.
 */

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
      showModal: false,
      events: [event],
    }

    this.addEvent = this.addEvent.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  addEvent(event) {
    /* 
     * The addEvent function should add the event to local storage,
     * in addition to updating the component state of the callendar
     * */

    var events = this
      .state
      .events
      .slice();

    const index = events.length;
    event['id'] = index;   
    events.push(event);

    this.setState({
      events: events,
      showModal: false
    });
  }

  openModal() {
    this.setState({ showModal: true });
  }

  closeModal() {
    this.setState({showModal: false});
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
        
        <button type="button" onClick={this.openModal} className="btn">Add Event</button>
        <EventModal open={this.state.showModal} handleClose={this.closeModal} handleSubmit={this.addEvent} start={slotInfo.start} end={slotInfo.end} />
        
        <hr />
        <h1>Events</h1>
        <ul>{eventItems}</ul>
        </div>
      </section>
    );
  }
}

export default Events;