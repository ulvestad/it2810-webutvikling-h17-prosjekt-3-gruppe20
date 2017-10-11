import React, { Component } from "react";
import PropTypes from 'prop-types';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import {storeItem, getTodos} from '../../localStorage';

/**
 * Todo component. Add, complete or remove todos.
 */
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: getTodos(),
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeStorage = this.changeStorage.bind(this);
    this.removeStorageItem = this.removeStorageItem.bind(this);
  }

  /* Handles submit of add todo form */
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.value === '') return;
    const todo = {
      id: (((1+Math.random())*0x10000)|0).toString(16).substring(-1),
      value: this.state.value,
      check: false
    };
    this.setState({todos: [...this.state.todos, todo,], value: ''}, () => {
      storeItem('todos', this.state.todos)
    });
  }

  /* Changes the value when writing in the input */
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  /* Stores the todos list in state in localstorage */
  changeStorage(id) {
    let todosList = [...this.state.todos];
    for (let todo in todosList) {
      let todos = this.state.todos[todo];
      if (todos.id === id) {
        todos.check = !todos.check;
      }
    }
    this.setState({todos: todosList}, () => {
      storeItem('todos', todosList);
    });
  }

  /* Removes todo item by updating storage list */
  removeStorageItem(id) {
    this.setState({todos: this.state.todos.filter(e => e.id !== id)}, () => {
      storeItem('todos', this.state.todos);
    });
  }

  render() {
    const {value, todos} = this.state;
    const listGroupItems =
      <div>
        {todos.length ? <h4 className="allTodos">All of your todo’s:</h4> : null}
        <ListGroup>
          <div className="box">
            {todos.map(key =>
              <ListGroupItem id={key.id} key={key.id}>
                <Checkbox defaultChecked={key.check} onClick={() => this.changeStorage(key.id)}>
                  <span className={key.check ? "line" : "checkboxMargin"}>{key.value}</span>
                  <Button className="xButton" bsStyle="primary" bsSize="sm" onClick={() => this.removeStorageItem(key.id)}>x</Button>
                </Checkbox>
              </ListGroupItem>)}
          </div>
        </ListGroup>
      </div>;

    const inputForm =
      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup controlId="formInlineTodo">
          <span className="rightMargin">What to do:</span>
          <FormControl className="todoMargin" type="text" {...{value}} maxLength="75" placeholder="Your todo here" onChange={this.handleChange}/>
          <Button bsStyle="primary" type="submit">Submit</Button>
        </FormGroup>
      </Form>;

    return (
      <section id="todo">
        <Grid bsClass="container">
          <Row>
            <Col lg={8} className="mx-auto">
              <h2>Todo</h2>
              {inputForm}
              {listGroupItems}
            </Col>
          </Row>
        </Grid>
      </section>
    );
  };
};

Todo.propTypes = {
  todos: PropTypes.array
};

export default Todo;
