import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import BigCalendar from 'react-big-calendar';

import Calender from './Calender';

beforeEach(() => {
  localStorage.getItem.reset();
  localStorage.setItem.reset();
});

it('renders without crashing', () => {
  shallow(<Calender />);
});

// Needs to mount due to ref beeing used
it('sets modal to open when calling openModal', () => {
  const wrapper = mount(<Calender />);

  wrapper.instance().openModal();

  expect(wrapper.state()).to.have.property('showModal', true);
});

it('sets modal to false when calling closeModal', () => {
  const wrapper = shallow(<Calender />);

  wrapper.instance().setState({ showModal: true });
  wrapper.instance().closeModal();

  expect(wrapper.state()).to.have.property('showModal', false);
});

it('replaces string correctly', () => {
  const wrapper = shallow(<Calender />);
  const replaceAt = wrapper.instance().replaceAt;

  [
    ['Foooooozie', 3, 5, 'bar', 'Foobaroozie'],
    ['Foooozie', 3, 5, 'bar', 'Foobarzie'],
    ['Foozie', 3, 5, 'bar', 'Foobare'],
    ['Foozi', 3, 5, 'bar', 'Foobar'],
    ['Foozi', 0, 5, 'bar', 'bar']
  ].map(([string, head, tail, replace, expected]) => {
    expect(replaceAt(string, head, tail, replace)).to.equal(expected);
  });
});
it('validates event correctly', () => {
  const wrapper = shallow(<Calender />);
  const validateEvent = wrapper.instance().validateEvent;

  [
    [1000, 2000, true],
    [3000, 2000, false],
    [false, false, true],
    [false, 2000, false],
    [3000, 2000, false]
  ].map(([start, end, expected]) => {
    expect(validateEvent(start, end)).to.have.property('err', expected);
  });
});

describe('addEvent', () => {
  it('do not add event if previous day', () => {
    const wrapper = shallow(<Calender />);
    let start = new Date();
    start.setDate(start.getDate() - 3);

    const data = {
      start,
      end: new Date()
    };

    wrapper.instance().addEvent(data);

    expect(wrapper.state()).to.have.property('events');
    expect(wrapper.state('events').length).to.equal(0);
  });

  it('adds event to state', () => {
    const wrapper = mount(<Calender />);

    const data = {
      start: new Date(),
      end: new Date() + 500000
    };

    wrapper.instance().addEvent(data);

    expect(wrapper.state()).to.have.property('events');
    expect(wrapper.state('events').length).to.equal(1);
  });

  it('adds event to localStorage', () => {
    const wrapper = mount(<Calender />);

    const data = {
      start: new Date(),
      end: new Date() + 500000
    };

    wrapper.instance().addEvent(data);

    expect(localStorage.setItem).to.have.property('callCount', 1);
    expect(localStorage.setItem.args[0][0]).to.equal('events');
  });
});

describe('remove event', () => {
  it('removes event from state when already in state', () => {
    const wrapper = mount(<Calender />);

    const id = 5;

    wrapper.setState({ events: [{ id }, { id: 2 }] });

    wrapper.instance().removeEvent({ id });

    expect(wrapper.state('events').length).to.equal(1);
  });

  it('does not remove event from state when not there', () => {
    const wrapper = mount(<Calender />);

    const id = 5;

    wrapper.setState({ events: [{ id: 4 }, { id: 2 }] });

    wrapper.instance().removeEvent({ id });

    expect(wrapper.state('events').length).to.equal(2);
  });
  it('removes event from localStorage', () => {
    const wrapper = mount(<Calender />);
    const id = 5;

    wrapper.instance().removeEvent({ id });

    expect(localStorage.setItem).to.have.property('callCount', 1);
    expect(localStorage.setItem.args[0][0]).to.equal('events');
  });
});
