import React, { Component } from "react";
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import {storeItem, loadFromLocalStorage} from '../../localStorage';
import List from './List';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const textInput = document.getElementById('textInput');
    if (textInput.value === '') {
      return null
    };
    storeItem('todo_' + new Date(), [this.state.value, false]);
    textInput.value = '';
  }

  render() {
    const test = Object.keys(localStorage).map(key => {
      const todoValue = loadFromLocalStorage(key);
      return <List {...{key, todoValue}}/>
    });

    return (
      <section id="todo" className="bg-light">
        <div className="container">
          <Row>
            <div className="col-lg-8 mx-auto">
              <h2>Todo</h2>
              <p className="lead">All of your todo’s for today: Friday 22.03.2017</p>
              <br></br>
              <form onSubmit={this.handleSubmit}>
                <label>
                  What to do:
                  <input id="textInput" type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
              </form>
            </div>
            {test}
          </Row>
        </div>
      </section>
    );
  }
}

export default Todo;
