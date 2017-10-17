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


it('updates state with title', () => {
  const wrapper = shallow(<EventModal/>);
  let value = 'testTitle';
  let target = {value};
  let event = {target};
  wrapper.instance().handleTitle(event);

  expect(wrapper.state()).to.have.property('title', value);
});

it('updates state with startDate', () => {
    const wrapper = shallow(<EventModal/>);
    let value = '10.15.2017';
    let target = {value};
    let event = {target};
    wrapper.instance().handleStart(event);

    expect(wrapper.state()).to.have.property('start', value);
});

it('updates state with endDate', () => {
    const wrapper = shallow(<EventModal/>);
    let value = '10.15.2018';
    let target = {value};
    let event = {target};
    wrapper.instance().handleEnd(event);

    expect(wrapper.state()).to.have.property('end', value);
});

it('formats date correctly', () => {
    const wrapper = shallow(<EventModal/>);

    expect(wrapper.instance().formatDateToDay(
        new Date('10.10.2010')
    )).to.equal('Sun Oct 10 2010');
});
