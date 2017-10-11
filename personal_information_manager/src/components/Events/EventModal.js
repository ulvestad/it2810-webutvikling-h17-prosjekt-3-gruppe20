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
    this.updateState = this.updateState.bind(this)
  }

  /* Merge these 3 methods? */
  handleTitle(e) {
    this.setState({ title: e.target.value })
  }

  handleStart(e) {
    this.setState({ start: e.target.value })
  }

  handleEnd(e) {
    this.setState({ end: e.target.value })
  }

  /* Updates the modal with props */
  updateState() {
    this.setState({...this.props.modalEvent})
  }

  render() {
    if (!this.props.modalEvent) return (<div> </div>)
    // error div to add if error
    const error = <div> <label> Error: </label> {this.props.error} </div>

    // Putte i css? fucked up
    const modalStyles = {
      overlay:{zIndex:10},
      content:{top:'50%',left:'50%',right:'auto',bottom:'auto',marginRight:'-50%',transform:'translate(-50%, -50%)'}
    }
    return (
      <div>
        <Modal
          style={modalStyles} 
          isOpen={this.props.show}
          onRequestClose={this.props.handleClose}>

          <div>
            <h2> Event </h2>
          </div>
          <hr />
          <div>
            <label> title: </label> {this.props.modalEvent.title}
            <input className="form-control"  id="title" type="text"
              defaultValue={this.props.modalEvent.title} 
              placeholder='title'
              onChange={this.handleTitle}/>
          </div>
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
              onClick={() => this.props.handleSave(this.state)}> Save
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.props.handleRemove(this.props.modalEvent)}> Delete 
            </button>
            <button 
              className="btn btn-warning"
              onClick={() => this.props.handleClose()}> Close
            </button>
          </div>
          { this.props.error ? error : null }
        </Modal>
      </div>
    )
  }
}

export default EventModal 