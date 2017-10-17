import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Footer from './Footer';




it('Footer renders without crashing', () => {
  shallow(<Footer />);
});