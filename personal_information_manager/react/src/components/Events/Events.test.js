import React from 'react';
import ReactDOM from 'react-dom';
import EventModal from "./EventModal";
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
let assert = require('chai').assert;

let domref = null;
const div = document.createElement('div');
it('renders without crashing', () => {
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

/*
it('calls handler when form is submitted', () => {
    const handler = sinon.spy();
    const wrapper = shallow(<EventModal/>);
    wrapper.find('button').simulate('click');
    expect(handler.args[0][0]).to.equal(2);
    expect(handler).to.have.property('callCount', 1);
});
*/