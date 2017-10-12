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

/* Adding dummy data for testing day! :) */
export const storeDummyItems = () => {
  if (!loadFromLocalStorage('events', null)) {
    let events = '[{"id":"1cadb","title":"Grade me","start":"2017-10-12T08:00:00.000Z","end":"2017' +
        '-10-12T12:00:00.000Z"},{"id":"1ed06","title":"Send snap","start":"2017-10-12T11:' +
        '37:00.000Z","end":"2017-10-12T11:38:00.000Z"},{"id":"12b7f","title":"Yaaacht","s' +
        'tart":"2017-10-12T16:00:00.000Z","end":"2017-10-13T00:00:00.000Z"},{"id":"12f81"' +
        ',"title":"Delete","start":"2017-10-11T12:00:00.000Z","end":"2017-10-11T13:00:00.' +
        '000Z"}]'
    let lastVisit = 'Wed Oct 11 2017'
    let notes = '[{"id":1507753516097,"title":":)","body":"You are awesome"},{"id":1507753472368,' +
        '"title":"Important","body":"Do stuff"}]'
    let todos = '[{"id":"1b5f3","value":"Homework","check":true},{"id":"16812","value":"Sleep","c' +
        'heck":false},{"id":"1e5a3","value":"Sleep more","check":false}]'
    localStorage.setItem('events', events)
    localStorage.setItem('lastVisit', lastVisit)
    localStorage.setItem('notes', notes)
    localStorage.setItem('todos', todos)
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
  return (lastVisit === today)
    ? false
    : true
}