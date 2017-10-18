import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import renderer from 'react-test-renderer';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { Link } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom'

import Nav from './Nav';

const jestExpect = global.expect;

beforeEach(() => {
  localStorage.getItem.reset();
  localStorage.setItem.reset();
});

it('renders without crashing', () => {
  shallow(<Nav />);
});

it('renders correctly', () => {
  const navWrappedInRouter = (
      <BrowserRouter>
        <Nav/>
      </BrowserRouter>
  );
  const tree = renderer.create(navWrappedInRouter).toJSON();
  jestExpect(tree).toMatchSnapshot();
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
