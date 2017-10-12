/* Saves data to asyncstorage */
export const storeItem = (key, val) => {
  try {
    AsyncStorage.setItem(key, JSON.stringify(val));
  } catch (error) {
    // Error saving data
  }
}
/* Returns data from asyncstorage */
export const loadFromLocalStorage = (key, defaultValue) => {
  try {
    return AsyncStorage.getItem(JSON.parse([key]));
  } catch (e) {
    return defaultValue
  }
}

/* Filters to get todays notis */
export const getNotis = () => {
  const today = new Date().toDateString()
  return getEvents().filter(d => d.start.toDateString() === today)
}

/* Returns the todos in localstorage */
export const getTodos = () => {
  return loadFromLocalStorage('todos', [])
}

/* Returns the notes in localstorage*/
export const getNotes = () => {
  return loadFromLocalStorage('notes', []);
}

/* Is it the first visit of the day */
export const isFirstVisitOfDay = () => {
  const today = new Date().toDateString()
  const lastVisit = loadFromLocalStorage('lastVisit')
  storeItem('lastVisit', today)
  return (lastVisit === today)
    ? false
    : true
}
