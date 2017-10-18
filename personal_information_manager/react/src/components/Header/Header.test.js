import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Header from './Header';

const jestExpect = global.expect;

it('Header renders without crashing', () => {
  shallow(<Header />);
});

it('renders correctly', () => {
  const tree = renderer.create(<Header />).toJSON();
  jestExpect(tree).toMatchSnapshot();
});
