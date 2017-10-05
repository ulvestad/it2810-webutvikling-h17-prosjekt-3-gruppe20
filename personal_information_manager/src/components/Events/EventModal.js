import React, {Component} from 'react'
import Modal from 'react-modal'

class EventModal extends Component { 
  constructor(props){
    super(props)
    this.state = {
      title: '',
      start: '',
      end: ''
    }
    this.handleTitle = this.handleTitle.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handleEnd = this.handleEnd.bind(this)
    this.resetState = this.resetState.bind(this)
  }

  /* Handles input in new tab text input field */
  handleTitle(e) {
    this.setState({ title: e.target.value })
  }

  handleStart(e) {
    this.setState({ start: e.target.value })
  }

  handleEnd(e) {
    this.setState({ end: e.target.value })
  }

  resetState() {
    this.setState({
      title: '',
      start: '',
      end: ''
    })
  }

  // Todo fix
  makeTimeString(start, end) {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December']

    var timeString = ""
    timeString += days[start.getDay()] + ", "
    timeString += " " + months[start.getMonth()] + " " + start.getDay() + ", "
    timeString += start.getHours()+ ":" + start.getMinutes() + " - "

    if (start.getYear() === end.getYear() && start.getDay() === end.getDay()) {
      timeString += end.getHours()+ ":" + end.getMinutes()
    } else {
      timeString += days[end.getDay()] + ", "
      timeString += " " + months[end.getMonth()] + " " + end.getDay() + ", "
      timeString += end.getHours()+ ":" + end.getMinutes()
    }
    return timeString
  }

  render() {
    if (!this.props.modalEvent) return (<div> </div>)
    //const timeString = this.makeTimeString(this.props.modalEvent.start, this.props.modalEvent.end)

    const modalStyles = {
      overlay : {
        zIndex                : 10
      },
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
      }
    }

    return (
      <div>
        <Modal
          style={modalStyles} 
          isOpen={this.props.open}
          onRequestClose={this.props.handleClose}>

          <div>
            <h2> Event </h2>
            <label> title: </label> {this.state.title}
            <input className="form-control"  id="title" type="text"
              placeholder={this.state.title} 
              onChange={this.handleTitle}/>
          </div>
          <hr />
          <div>
            <label> start: </label>
            {this.props.modalEvent.start.toString().substring(0, 15)}
            <input className="form-control" id="start" type="time"
              defaultValue={this.props.modalEvent.start.toString().substring(16,24)}
              onChange={this.handleStart}
            />
          </div>
          <div>
            <label> end: </label> 
            {this.props.modalEvent.end.toString().substring(0, 15)}
            <input className="form-control" id="end" type="time"
              defaultValue={this.props.modalEvent.end.toString().substring(16,24)}
              onChange={this.handleEnd}
            />
          </div>
          <hr />
          <div>
            <button 
              className="btn btn-success"
              onClick={() => {
                this.props.handleSave(this.state)
                this.resetState()
              }}> Save
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.handleRemove(this.props.modalEvent)
                this.resetState()
              }}> Delete 
            </button>
            <button 
              className="btn btn-warning"
              onClick={() => {
                this.props.handleClose()
                this.resetState()
              }}> Close
            </button>
          </div>
          <div>
            {this.props.error}
          </div>
        </Modal>
      </div>
    )
  }
}

export default EventModal 