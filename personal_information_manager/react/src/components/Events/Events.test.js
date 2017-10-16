import React from 'react';
import ReactDOM from 'react-dom';
import EventModal from "./EventModal";
let assert = require('chai').assert;

let domref = null;
it('renders without crashing', () => {
    const div = document.createElement('div');
    domref = ReactDOM.render(<EventModal/>, div);
});

it('starts with empty title', () => {
    assert.equal(domref.state.title, '', 'initial title is empty');
});

it('starts with empty start', () => {
    assert.equal(domref.state.start, '', 'initial start is empty');
});

it('starts with empty end', () => {
    assert.equal(domref.state.end, '', 'initial end is empty');
});
