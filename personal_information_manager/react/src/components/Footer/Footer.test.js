import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Footer from './Footer';

const jestExpect = global.expect;

it('Footer renders without crashing', () => {
  shallow(<Footer />);
});

it('renders correctly', () => {
  const tree = renderer.create(<Footer />).toJSON();
  jestExpect(tree).toMatchSnapshot();
});
