/* Saves data to localstorage */
export const storeItem = (key, val) => {
  try {
    localStorage.setItem(key, JSON.stringify(val))
  } catch (e) {
    console.err(e)
  }
}

/* Returns data from localstorage */
export const loadFromLocalStorage = (key, defaultValue) => {
  try {
    return JSON.parse(localStorage[key])
  } catch (e) {
    return defaultValue
  }
}

/* Returns the events in localstorage */
export const getEvents = () => {
  const data = loadFromLocalStorage('events', [])
  let events = []
  for (let event of data) {
    events.push({
      id: event.id,
      title: event.title,
      start: new Date(event.start),
      end: new Date(event.end)
    })
  }
  return events
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
  return (lastVisit === today) ? false : true
}