import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Note from './Note';

it('renders without crashing', () => {
  shallow(<Note />);
});

it('calls handler when clicked', () => {
  const handler = sinon.spy();
  const wrapper = shallow(<Note handleDelete={handler} id={2} />);

  wrapper.find('button').simulate('click');
  expect(handler).to.have.property('callCount', 1);
});

it('calls handler with correct id', () => {
  const handler = sinon.spy();
  const wrapper = shallow(<Note handleDelete={handler} id={2} />);

  wrapper.find('button').simulate('click');
  expect(handler.args[0][0]).to.equal(2);
});
