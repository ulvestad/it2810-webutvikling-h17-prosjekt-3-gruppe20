import React, { Component } from "react";
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
import {storeItem} from '../../localStorage';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.todos,
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeStorage = this.changeStorage.bind(this);
    this.removeStorageItem = this.removeStorageItem.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.value === '') return;
    const todo = {
      id: new Date().toTimeString(),
      value: this.state.value,
      check: false
    };
    this.setState({todos: [...this.state.todos, todo,], value: ''}, () => {
      storeItem('todos', this.state.todos)
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

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
                  <span className={key.check ? "line" : null}>{key.value}</span>
                  <Button className="xButton" bsSize="xs" onClick={() => this.removeStorageItem(key.id)}>x</Button>
                </Checkbox>
              </ListGroupItem>)}
          </div>
        </ListGroup>
      </div>;

    const inputForm =
      <Form inline onSubmit={this.handleSubmit}>
        <span className="todoMargin">What to do:</span>
        <FormGroup className="todoMargin" controlId="formInlineTodo">
          <FormControl type="text" {...{value}} maxLength="75" placeholder="Your todo" onChange={this.handleChange}/>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>;

    return (
      <section id="todo" className="bg-light">
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
  }
}

export default Todo;
