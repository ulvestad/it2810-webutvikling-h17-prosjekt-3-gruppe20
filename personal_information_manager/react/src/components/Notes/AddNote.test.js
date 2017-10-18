import React from 'react';
import sinon from 'sinon';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import AddNote from './AddNote';

const jestExpect = global.expect;

it('renders without crashing', () => {
  shallow(<AddNote />);
});

it('renders correctly without props', () => {
  const tree = renderer.create(<AddNote />).toJSON();
  jestExpect(tree).toMatchSnapshot();
});

it('renders correctly with props', () => {
  const handleClick = () => {console.log('clicked')};

  const addNoteComponent =
      <AddNote handleClick={handleClick} />;

  const tree = renderer.create(addNoteComponent).toJSON();

  jestExpect(tree).toMatchSnapshot();
});

it('calls handler when clicked', () => {
  const handler = sinon.spy();
  const wrapper = shallow(<AddNote handleClick={handler} />);

  wrapper.find('.panel').simulate('click');
  expect(handler).to.have.property('callCount', 1);
});
