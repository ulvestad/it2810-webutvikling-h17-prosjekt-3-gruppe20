import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import {storeItem, getEvents} from '../../localStorage';
import EventModal from '../Events/EventModal';
import PropTypes from 'prop-types';

BigCalendar.momentLocalizer(moment);

/**
 * Calender component. Add, edit or remove events.
 * Using react-big-calendar. An events calendar component built for React
 */
class Calender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: getEvents(),
      showModal: false,
      modalEvent: null,
      error: ''
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.removeEvent = this.removeEvent.bind(this);
    this.changeEvent = this.changeEvent.bind(this);
  }

  /* Replaces part of string from head to tale with input */
  replaceAt(string, head, tail, replace) {
    return string.substr(0, head) + replace + string.substr(tail, string.length);
  }

  /* Validates the event, returns err msg */
  validateEvent(start, end) {
    if (!end && !start)
      return {err: true, msg: null};
    if (!end || !start)
      return {err: false, msg: 'missing one date'};
    if (end < start)
      return {err: false, msg: 'Start < End'};
    return {err: true, msg: null};
  }

  /* Opens modal */
  openModal(event) {
    this.setState({
      showModal: true,
      modalEvent: event
    }, () => {
      this.refs.child.updateState();
    })
  }

  /* Closes modal */
  closeModal() {
    this.setState({showModal: false, error: null});
  }

  /* Adds a new element */
  addEvent(data) {
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    // cant add event for past dates
    if (data.start <= yesterday)
      return;

    // Create a uniqe id 9^5 possible values.
    const id = (((1 + Math.random()) * 0x10000) | 0)
      .toString(16)
      .substring(-1);
    const event = {
      id: id,
      title: '',
      start: data.start,
      end: data.end
    };

    this.setState({
      events: [...this.state.events,event]
    }, () => {
      storeItem('events', this.state.events)
    })
    this.openModal(event);
  }

  /* Remove element */
  removeEvent(event) {
    this.setState({
      events: this.state.events.filter(e => e.id !== event.id)
    }, () => {
      storeItem('events', this.state.events);
    })
    this.closeModal();
  }

  /* Change info of specific element */
  // Todo short & pretty
  changeEvent(changes) {
    // find id of event
    const idx = this.state.events.indexOf(this.state.modalEvent);
    // save event
    let event = {...this.state.events[idx]};
    event.title = changes.title;
    // delete event
    const events = this.state.events.filter(e => e.id !== event.id);
    // change date of event if changed
    if (typeof changes.start === 'string') {
      event.start = new Date(this.replaceAt(event.start.toString(), 16, 24, changes.start));
    }
    if (typeof changes.end === 'string') {
      event.end = new Date(this.replaceAt(event.end.toString(), 16, 24, changes.end));
    }
    // validates input, returns if error and updates message
    let {err, msg} = this.validateEvent(event.start, event.end);
    if (!err) return this.setState({error: msg});

    this.setState({
      events: [...events,event]
    }, () => {
      storeItem('events', this.state.events);
    })

    this.closeModal();
  }

  render() {
    return (
      <section id='calender'>
        <div className='container'>
          <div className='calendar-nav'>
            <div>
              <BigCalendar
                selectable
                popup
                style={{
                height: 500
              }}
                events={this.state.events}
                defaultView='month'
                onSelectEvent={this.openModal}
                onSelectSlot={this.addEvent}/>
              <EventModal
                ref='child'
                show={this.state.showModal}
                error={this.state.error}
                modalEvent={this.state.modalEvent}
                handleSave={this.changeEvent}
                handleRemove={this.removeEvent}
                handleClose={this.closeModal}/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

Calender.propTypes = {
  events: PropTypes.array,
  update: PropTypes.func
}

export default Calender
