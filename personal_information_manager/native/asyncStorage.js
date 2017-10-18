import {AsyncStorage} from 'react-native';

/* Saves data to asyncstorage */
export const storeItem = (key, val) => {
  AsyncStorage.setItem(key, JSON.stringify(val));
}

/* Returns data from asyncstorage */
export const loadFromAsyncStorage = (key, defaultValue, callback) => {
  AsyncStorage.getItem(key, (err, value) => {
    console.log("loadFromAsyncStorage: ", value)
    if (err) return callback(defaultValue)
    return callback(JSON.parse(value))
  })
}

/* Returns the todos in asyncStorage */
export const getTodos = (callback) => {
  return loadFromAsyncStorage('todos', [], callback);
}

/* Returns the notes in asyncStorage*/
export const getNotes = (callback) => {
  console.log('getting notes!');
  return loadFromAsyncStorage('notes', [], callback);
}
