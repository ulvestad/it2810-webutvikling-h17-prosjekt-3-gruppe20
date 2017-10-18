import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import Todo from './Todo';
import FormControl from 'react-bootstrap/lib/FormControl';
import Form from 'react-bootstrap/lib/Form';

const jestExpect = global.expect;

it('renders without crashing', () => {
  shallow(<Todo />);
});

it('renders correctly', () => {
  const tree = renderer.create(<Todo />).toJSON();
  jestExpect(tree).toMatchSnapshot();
});

it('calls submit handler when form submitted', () => {
  const handleSubmit = sinon.spy(Todo.prototype, 'handleSubmit');
  const wrapper = mount(<Todo />);

  wrapper.find(Form).simulate('submit');

  expect(handleSubmit.calledOnce).to.equal(true);

  handleSubmit.restore();
});

it('adds new note when form submitted', () => {
  const wrapper = mount(<Todo />);
  const preventDefault = sinon.spy();

  wrapper.setState({ value: 'foo' });

  wrapper.instance().handleSubmit({ preventDefault });

  expect(wrapper.state('todos')).to.have.length(1);
});

it('does not add new note when form submitted if value is empty', () => {
  const wrapper = mount(<Todo />);
  const preventDefault = sinon.spy();

  wrapper.instance().handleSubmit({ preventDefault });

  expect(wrapper.state('todos')).to.have.length(0);
});

it('updates value in state when input changed', () => {
  const wrapper = mount(<Todo />);

  wrapper.find(FormControl).simulate('change', { target: { value: 'foo' } });

  expect(wrapper.state()).to.have.property('value', 'foo');
});
