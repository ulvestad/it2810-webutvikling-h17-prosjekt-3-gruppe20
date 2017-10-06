import React, { Component } from "react"
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import {storeItem, loadFromLocalStorage} from '../../localStorage'
import EventModal from '../Events/EventModal'

BigCalendar.momentLocalizer(moment)

class Calender extends Component{
  constructor (props) {
    super(props)

    /* Fetches data and convert date strings to Date object */
    const data = loadFromLocalStorage('events', [])
    let events = []
    for (let event of data) {
      events.push({
        id: event.id,
        title: event.title,
        start: new Date(event.start),
        end: new Date(event.end)
      })
    }

    this.state = {
      events: events,
      showModal: false,
      modalEvent: null,
      error: ''
    }

    // bind functions
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.addEvent = this.addEvent.bind(this)
    this.removeEvent = this.removeEvent.bind(this)
    this.changeEvent = this.changeEvent.bind(this)
    this.validateEvent = this.validateEvent.bind(this)
  }

  /* Replaces part of string from head to tale with input */
  replaceAt(string, head, tail, replace) {
    return string.substr(0, head) + replace + string.substr(tail, string.length)
  }

  /* Opens modal */
  openModal(event) {
    this.setState({
      showModal: true,
      modalEvent: event
    }, () => { 
      this.refs.child.updateState()
    })
  }

  /* Closes modal */
  closeModal() {
    this.setState({ showModal: false, error: null})
  }

  validateEvent(start, end) {
    if (!end && !start) return {bool: true, err: null}
    if (!end || !start) return {bool: false, err: 'missing one date'}
    // validate start and end
    if (end < start) return {bool: false, err:'Start < End'}
    return {bool: true, err: null}
  }

  /* Adds a new element */
  addEvent(slotInfo) {
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    // cant add past dates
    if (slotInfo.start <= yesterday) return
    // Create a uniqe id 9^5 possible values.
    const id = (((1+Math.random())*0x10000)|0).toString(16).substring(-1)
    const event = {
      id: id,
      title: '',
      start: slotInfo.start,
      end: slotInfo.end,
    }
    // updates events state with the new event
    this.setState({
      events: [...this.state.events, event]
    }, () => {
      storeItem('events', this.state.events)
    })
    // opens modal
    this.openModal(event)
  }

  /* Remove element */
  removeEvent(event) {
    // Creates a new list without the given event
    this.setState({
      events: this.state.events.filter(e => e.id !== event.id)
    }, () => {
      storeItem('events', this.state.events)
    })
    this.closeModal()
  }

  /* Change info of specific element */
  changeEvent(changes) {

    // find id of event
    const idx = this.state.events.indexOf(this.state.modalEvent)
    // save event
    let event = {...this.state.events[idx]}
    event.title = changes.title
    // delete event
    const events = this.state.events.filter(e => e.id !== event.id)
    // change date of event if changed
    if (typeof changes.start === 'string') {
      event.start = new Date(this.replaceAt(event.start.toString(), 16, 24, changes.start))
    }
    if (typeof changes.end === 'string') {
      event.end = new Date(this.replaceAt(event.end.toString(), 16, 24, changes.end))
    }
    // validates input, returns if error and updates message
    let {bool, err} = this.validateEvent(event.start, event.end)
    if (!bool) return this.setState({error: err})
    
    // set state and store new list
    this.setState({
      events: [...events, event]
    }, () => {
      storeItem('events', this.state.events)
    })
    this.closeModal()
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
                onSelectEvent={this.openModal}
                onSelectSlot={this.addEvent}
              />
              <EventModal
                ref="child"
                show={this.state.showModal}
                error={this.state.error}
                modalEvent={this.state.modalEvent}
                handleSave={this.changeEvent}
                handleRemove={this.removeEvent}
                handleClose={this.closeModal}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Calender
