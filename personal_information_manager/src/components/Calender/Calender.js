import React, { Component } from "react"
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import {storeItem, loadFromLocalStorage} from '../../localStorage'

import EventModal from '../Events/EventModal'

BigCalendar.momentLocalizer(moment)

// TODO focus input title text when adding new event

// TODO Drag and drop functionality

// TODO Put styling in own file!

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
  }

  /* Replaces part of string from head to tale with input */
  replaceAt(string, head, tail, replace) {
    return string.substr(0, head) + replace + string.substr(tail, string.length)
  }

  /* Opens modal */
  openModal(event) {
    this.setState({ showModal: true, modalEvent: event})
    console.log(this.props.children)
  }

  /* Closes modal */
  closeModal() {
    this.setState({ showModal: false})
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
      end: slotInfo.end
    }
    // updates events state with the new event
    this.setState({
      events: [...this.state.events, event]
    }, () => {
      storeItem('events', this.state.events)
    })

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
    if (!changes) return this.setState({error: 'No changes?'})
    if (!changes.title) return this.setState({error: 'No title'})
    //if (!changes.start || !changes.end) return this.setState({error: 'missing one date'})
    // find id of event
    const idx = this.state.events.indexOf(this.state.modalEvent)
    // save event
    const event = {...this.state.events[idx]}
    // delete event
    const events = this.state.events.filter(e => e.id !== event.id)
    // modify event if values changed
    // TODO add restrictions
    if (changes.title) event.title = changes.title
    if (changes.start) event.start = new Date(this.replaceAt(event.start.toString(), 16, 24, changes.start))
    if (changes.end) event.end = new Date(this.replaceAt(event.end.toString(), 16, 24, changes.end))
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
                open={this.state.showModal}
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


