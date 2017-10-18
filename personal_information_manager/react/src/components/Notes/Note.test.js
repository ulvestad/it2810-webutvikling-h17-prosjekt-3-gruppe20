import React from 'react';
import sinon from 'sinon';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Note from './Note';

const jestExpect = global.expect;

it('renders without crashing', () => {
  shallow(<Note />);
});

it('renders correctly without props', () => {
  const tree = renderer.create(<Note />).toJSON();
  jestExpect(tree).toMatchSnapshot();
});

it('renders correctly with props', () => {
  const
      id = 1234,
      title = 'Title',
      bodyContent = 'This is the body',
      handleDelete = () => {console.log('deleted')};

  const noteComponent =
      <Note
          id={id}
          title={title}
          body={bodyContent}
          handleDelete={handleDelete}
      />;

  const tree = renderer.create(noteComponent).toJSON();

  jestExpect(tree).toMatchSnapshot();
});

it('calls handler when clicked', () => {
  const handler = sinon.spy();
  const wrapper = shallow(<Note handleDelete={handler} id={2} />);

  wrapper.find('button').simulate('click');
  expect(handler).to.have.property('callCount', 1);
});

it('calls handler with correct id', () => {
  const handler = sinon.spy();
  const wrapper = shallow(<Note handleDelete={handler} id={2} />);

  wrapper.find('button').simulate('click');
  expect(handler.args[0][0]).to.equal(2);
});

// React-modal uses portals, which are problematic at the current time
// Enzyme does not funny support them, and mount fails
// https://github.com/airbnb/enzyme/issues/1150
