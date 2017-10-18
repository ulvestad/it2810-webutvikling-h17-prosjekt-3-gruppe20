import React from 'react';
import sinon from 'sinon';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import Notifications from './Notifications';

const jestExpect = global.expect;

it('renders without crashing', () => {
  shallow(<Notifications />);
});

it('renders correctly', () => {
  const tree = renderer.create(<Notifications />).toJSON();
  jestExpect(tree).toMatchSnapshot();
});

/* Wont work unitl localStorage uses getItem
it('gets data from localStorage when constructed', () => {
  const wrapper = shallow(<Notifications />);

  expect(localStorage.getItem.called).to.equal(true);
});
*/
