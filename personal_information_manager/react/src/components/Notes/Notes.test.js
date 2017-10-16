import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import Notes from './Notes';

it('renders without crashing', () => {
  shallow(<Notes />);
});

it('opens modal when triggered', () => {
  const wrapper = shallow(<Notes />);

  wrapper.instance().openModal();

  expect(wrapper.state()).to.have.property('modalOpen', true);
});

it('closes modal when triggered', () => {
  const wrapper = shallow(<Notes />);

  wrapper.instance().closeModal();

  expect(wrapper.state()).to.have.property('modalOpen', false);
});
