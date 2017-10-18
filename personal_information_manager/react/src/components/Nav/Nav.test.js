import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { Link } from 'react-router-dom';

import Nav from './Nav';

beforeEach(() => {
  localStorage.getItem.reset();
  localStorage.setItem.reset();
});

it('renders without crashing', () => {
  shallow(<Nav />);
});

it('runs updateNotificationBadge when clicked', () => {
  const update = sinon.spy(Nav.prototype, 'updateNotificationBadge');
  const wrapper = shallow(<Nav />);

  wrapper
    .find(Link)
    .first()
    .simulate('click');
  expect(update).to.have.property('calledOnce', true);
});
