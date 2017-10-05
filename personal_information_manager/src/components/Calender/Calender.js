import React, { Component } from "react";
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import {storeItem, loadFromLocalStorage} from '../../localStorage';

BigCalendar.momentLocalizer(moment);

class Calender extends Component{
  constructor (props) {
    super(props)
    // set state
    this.state = {
      events: loadFromLocalStorage('events', [])
    }
    // bind functions
    this.handleInputChange = this.handleInputChange.bind(this)
    this.addEvent = this.addEvent.bind(this)
    this.selectEvent = this.selectEvent.bind(this)
  }

  // Handles input in new tab text input field
  handleInputChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  // fired when clicked on an event
  selectEvent(eventInfo) {
    console.log(eventInfo)
    // TODO Popup?
  }

  // adds a new event, and updates the state
  addEvent(slotInfo) {
    // TODO not possible for past dates?
    // TODO Popup!
    const event = {
      title: 'yolo',
      start: slotInfo.start,
      end: slotInfo.end
    }

    this.setState(prev => ({
      events: [...prev.events, event]
    }));

    storeItem('events', this.state.events);
  }

  render(){
    return(
      <section id="calender" className="bg-light">
        <div className="container">
          <div className="calendar-nav">
            <div>
              <BigCalendar
                selectable
                popup
                style={{height: 500}}
                events={this.state.events}
                defaultView='month'
                onSelectEvent={this.selectEvent}
                onSelectSlot={this.addEvent}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Calender;


