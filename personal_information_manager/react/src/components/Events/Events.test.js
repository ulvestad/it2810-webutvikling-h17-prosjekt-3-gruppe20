import React from 'react';
import ReactDOM from 'react-dom';
import EventModal from "./EventModal";

let domref = null;
it('renders without crashing', () => {
    const div = document.createElement('div');
    domref = ReactDOM.render(<EventModal/>, div);
});

it('starts with empty state with title, start and end', () => {
    expect(domref.state, { title: '', start: '', end: '' });
});

