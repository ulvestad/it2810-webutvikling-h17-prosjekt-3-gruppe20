import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Button, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {storeItem, getTodos} from '../asyncStorage';

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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeStorage = this.changeStorage.bind(this);
    this.removeStorageItem = this.removeStorageItem.bind(this);
  }

  /* Handles submit of add todo form */
  handleSubmit(event) {
    if (this.state.value === '') return;
    const todo = {
      id: (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(-1),
      value: this.state.value,
      check: false
    };
    this.setState({
      todos: [...this.state.todos, todo],
      value: ''
    }, () => {
      storeItem('todos', this.state.todos)
    });
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
    this.setState({
      todos: todosList
    }, () => {
      storeItem('todos', todosList);
    });
  }

  /* Removes todo item by updating storage list */
  removeStorageItem(id) {
    this.setState({
      todos: this.state.todos.filter(e => e.id !== id)
    }, () => {
      storeItem('todos', this.state.todos);
    });
  }


 render() {
    const {value, todos} = this.state;

    const styles = StyleSheet.create({
      container: {
        backgroundColor: 'lightgrey',
        padding: 10,
        width: 400,
        marginTop: 300
      },
      inputfield: {
        borderColor: 'dodgerblue',
        borderWidth: 1,
        borderRadius: 5,
        padding: 2
      }
    });

    const inputForm = <View style={styles.container}>
      <Text>What to do:</Text>
      <TextInput
        style={styles.inputfield}
        value={value}
        onChangeText={value => this.setState({value})}
        onSubmitEditing={this.handleSubmit}
        placeholder="Your todo here"
        maxLength={75}/>
      <Button onPress={this.handleSubmit} title="Submit"/>
    </View>;

    const list = <View>
      {todos.length ? <Text>All of your todo’s:</Text> : null}
      <ScrollView>
        {todos.map(key => <View id={key.id} key={key.id}>
          <Text onClick={() => this.changeStorage(key.id)}>{key.value}</Text>
          <Button onPress={() => this.removeStorageItem(key.id)} title="x"/>
        </View>)}
      </ScrollView>
    </View>;

    return (
      <View>{inputForm}{list}</View>
    );
  };
};

Todo.propTypes = {
  todos: PropTypes.array
};

export default Todo;
