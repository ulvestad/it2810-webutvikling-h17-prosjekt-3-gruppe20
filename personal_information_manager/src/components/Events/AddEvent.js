import React, {Component} from 'react';
import Modal from 'react-modal';

class AddEvent extends Component { 
  constructor(props){
    super(props);

    this.state = {
      modalOpen: false,
    }

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  open() {
    this.setState({modalOpen: true});
  }

  close() {
    this.setState({modalOpen: false});
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

    this.close();
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
          <button type="button" onClick={this.open} className="btn">
            Add Event
          </button>

          <Modal style={modalStyles} 
            isOpen={this.state.modalOpen}
            onRequestClose={this.close}>

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

export default AddEvent; 