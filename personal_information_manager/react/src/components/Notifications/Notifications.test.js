import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import Notifications from './Notifications';

it('renders without crashing', () => {
  shallow(<Notifications />);
});

/* Wont work unitl localStorage uses getItem
it('gets data from localStorage when constructed', () => {
  const wrapper = shallow(<Notifications />);

  expect(localStorage.getItem.called).to.equal(true);
});
*/
