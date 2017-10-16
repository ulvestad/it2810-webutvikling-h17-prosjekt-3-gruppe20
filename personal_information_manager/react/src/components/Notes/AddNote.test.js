import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import AddNote from './AddNote';

it('renders without crashing', () => {
  shallow(<AddNote handleClick={() => {}} />);
});
