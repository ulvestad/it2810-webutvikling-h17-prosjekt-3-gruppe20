import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, FlatList} from 'react-native';
import {CheckBox, Button} from 'react-native-elements';
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
      h1: {
        fontSize: 30,
        fontWeight: '300',
        marginBottom: 10,
        textAlign: 'center'
      },
      h2: {
        fontSize: 22,
        fontWeight: '300',
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center'
      },
      inputfield: {
        borderColor: 'dodgerblue',
        borderWidth: 1,
        borderRadius: 3,
        padding: 2,
        margin: 15
      },
      line: {
        borderBottomColor: '#000',
        borderBottomWidth: 1
      },
      checkbox: {
        flexDirection: 'row',
        marginLeft: 6
      }
    });

    const inputForm = <View>
      <TextInput
        style={styles.inputfield}
        value={value}
        onChangeText={value => this.setState({value})}
        onSubmitEditing={this.handleSubmit}
        placeholder='Your todo here'
        maxLength={75}/>
      <Button
        onPress={this.handleSubmit}
        title='Submit'
        backgroundColor='dodgerblue'
        borderRadius={3}/>
    </View>;

    const list = <View>
      {todos.length ? <Text style={styles.h2}>All of your todo’s:</Text> : null}
      <FlatList data={todos} keyExtractor={(item, index) => index} renderItem={key =>
        <View style={styles.checkbox} id={key.item.id} key={key.item.id}>
          <CheckBox
            containerStyle={{flex: 1}}
            title={key.item.value}
            checked={key.item.check}
            onPress={() => this.changeStorage(key.item.id)}
            checkedColor='dodgerblue'/>
          <Button
            containerViewStyle={{alignSelf: 'center'}}
            onPress={() => this.removeStorageItem(key.item.id)}
            title='X'
            backgroundColor='dodgerblue'
            borderRadius={3}/>
        </View>}/>
    </View>;

    return (
      <View>
        <Text style={styles.h1}>Todo</Text>
        <View>{inputForm}{list}</View>
      </View>
    );
  };
};

Todo.propTypes = {
  todos: PropTypes.array
};

export default Todo;
