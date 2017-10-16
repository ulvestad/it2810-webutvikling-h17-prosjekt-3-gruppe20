import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import AddNote from './AddNote';

it('renders without crashing', () => {
  shallow(<AddNote />);
});

it('calls handler when clicked', () => {
  const handler = sinon.spy();
  const wrapper = shallow(<AddNote handleClick={handler} />);

  wrapper.find('.panel').simulate('click');
  expect(handler).to.have.property('callCount', 1);
});
