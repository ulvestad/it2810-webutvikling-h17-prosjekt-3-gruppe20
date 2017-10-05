import React, { Component } from "react";
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import {storeItem} from '../../localStorage';
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
    storeItem('todo_' + new Date(), {value: this.state.value, checked: false});
    textInput.value = '';
  }

  render() {
    const todoList = Object.keys(localStorage).map(key => {
      return <List key={key} keyName={key}/>
    });

    const date = todoList.length === 0 ? null :
      <div className="lead">All of your todo’s for <span>{new Date().toDateString()}</span></div>;

    return (
      <section id="todo" className="bg-light">
        <Grid bsClass="container">
          <Row>
            <Col lg={8} className="mx-auto">
              <h2>Todo</h2>
              <form onSubmit={this.handleSubmit}>
                <label>
                  What to do:
                  <input id="textInput" type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
              </form>
              {date}
              {todoList}
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default Todo;
