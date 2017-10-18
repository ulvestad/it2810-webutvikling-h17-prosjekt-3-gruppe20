import {AsyncStorage} from 'react-native';

/* Saves data to asyncstorage */
export const storeItem = async (key, val) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(val));
  } catch (error) {
    // Error saving data
  }
}

/* Returns data from asyncstorage */
export const loadFromAsyncStorage = async (key, defaultValue) => {
  try {
    await JSON.parse(AsyncStorage.getItem(key));
  } catch (error) {
    // Error retrieving data
    return defaultValue;
  }
}

/* Filters to get todays notis */
export const getNotis = () => {
  const today = new Date().toDateString()
  return getEvents().filter(d => d.start.toDateString() === today)
}

/* Returns the todos in asyncStorage */
export const getTodos = () => {
  return loadFromAsyncStorage('todos', []);
}

/* Returns the notes in asyncStorage*/
export const getNotes = () => {
  return loadFromAsyncStorage('notes', []);
}

/* Is it the first visit of the day */
export const isFirstVisitOfDay = () => {
  const today = new Date().toDateString()
  const lastVisit = loadFromAsyncStorage('lastVisit')
  storeItem('lastVisit', today)
  return (lastVisit === today)
    ? false
    : true
}
