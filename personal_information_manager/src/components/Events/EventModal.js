import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Modal from 'react-modal'

class EventModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      start: '',
      end: ''
    }

    this.handleTitle = this
      .handleTitle
      .bind(this)
    this.handleStart = this
      .handleStart
      .bind(this)
    this.handleEnd = this
      .handleEnd
      .bind(this)
    this.updateState = this
      .updateState
      .bind(this)
    this.formatDateToDay = this
      .formatDateToDay
      .bind(this)
    this.formatDateToTime = this
      .formatDateToTime
      .bind(this)

  }

  /* Merge these 3 methods? */
  handleTitle(e) {
    this.setState({title: e.target.value})
  }

  handleStart(e) {
    this.setState({start: e.target.value})
  }

  handleEnd(e) {
    this.setState({end: e.target.value})
  }

  /* Updates the modal with props */
  updateState() {
    this.setState({
      ...this.props.modalEvent
    })
  }

  formatDateToDay(date) {
    return date
      .toString()
      .substring(0, 15)
  }

  formatDateToTime(date) {
    return date
      .toString()
      .substring(16, 24)
  }

  render() {
    if (!this.props.modalEvent) {
      return (
        <div></div>
      )
    }

    // error div to add if error
    const error = <div>
      <label>
        Error:
      </label>
      {this.props.error}
    </div>

    // Putte i css? fucked up
    const modalStyles = {
      overlay: {
        zIndex: 10
      },
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
      }
    }

    const start = this.props.modalEvent.start
    const end = this.props.modalEvent.end
    const title = this.props.modalEvent.title

    return (
      <div>
        <Modal
          style={modalStyles}
          isOpen={this.props.show}
          onRequestClose={this.props.handleClose}>
          <h2>
            Event
          </h2>
          <hr/>
          <div>
            <label>
              Title:
            </label>
            {" " + title}
            <input
              className="form-control"
              id="title"
              type="text"
              defaultValue={title}
              placeholder='title'
              onChange={this.handleTitle}/>
            <br/>
          </div>
          <div>
            <label>
              Start:
            </label>
            {" " + this.formatDateToDay(start)}
            <input
              className="form-control"
              id="start"
              type="time"
              defaultValue={this.formatDateToTime(start)}
              onChange={this.handleStart}/>
            <br/>
          </div>
          <div>
            <label>
              End:
            </label>
            {" " + this.formatDateToDay(end)}
            <input
              className="form-control"
              id="end"
              type="time"
              defaultValue={this.formatDateToTime(end)}
              onChange={this.handleEnd}/>
            <br/>
          </div>
          <hr/>
          <div>
            <button
              className="btn btn-success"
              onClick={() => this.props.handleSave(this.state)}>
              Save
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.props.handleRemove(this.props.modalEvent)}>
              Delete
            </button>
            <button className="btn btn-warning" onClick={() => this.props.handleClose()}>
              Close
            </button>
          </div>
          {this.props.error
            ? error
            : null}
        </Modal>
      </div>
    )
  }
}

EventModal.propTypes = {
  modalEvent: PropTypes.object,
  error: PropTypes.string,
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  handleSave: PropTypes.func,
  handleRemove: PropTypes.func
}

export default EventModal
