import React, {Component} from 'react';
import Modal from 'react-modal';

class EventModal extends Component { 
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const title = e
    .target
    .querySelector('input[id="title"]')
    .value;

    const event = {
      title: title,
      start: this.props.start,
      end: this.props.end
    }

    this.props.handleSubmit(event);
  }

  makeTimeString(start, end) {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    var timeString = "";
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
    const timeString = this.makeTimeString(this.props.start, this.props.end);

    const modalStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };

    return (
        <div>
          <Modal style={modalStyles} 
            isOpen={this.props.open}
            onRequestClose={this.props.handleClose}>

            <h2>Add event:</h2>
            <form action="#" id="form" onSubmit={this.handleSubmit}>
              <input placeholder="Untiteled event" id="title" className="form-control"/>
              <hr />
              <h5>When:</h5> {timeString}
              <hr />
              <input type="submit" value="submit" className="btn btn-success"/>
            </form>
          </Modal>
        </div>
    );
  }
}

export default EventModal; 