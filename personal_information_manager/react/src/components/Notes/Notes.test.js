import React from 'react';
import sinon from 'sinon';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import Notes from './Notes';

const jestExpect = global.expect;

it('renders without crashing', () => {
  shallow(<Notes />);
});

it('renders correctly', () => {
  const tree = renderer.create(<Notes />).toJSON();
  jestExpect(tree).toMatchSnapshot();
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
