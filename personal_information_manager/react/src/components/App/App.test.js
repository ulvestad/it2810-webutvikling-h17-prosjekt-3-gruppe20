import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});
