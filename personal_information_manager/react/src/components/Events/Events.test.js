import React from 'react';
import ReactDOM from 'react-dom';
import EventModal from './EventModal';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

const jestExpect = global.expect;

it('renders without crashing', () => {
  shallow(<EventModal />);
});

it('renders correctly without props', () => {
  const tree = renderer.create(<EventModal />).toJSON();
  jestExpect(tree).toMatchSnapshot();
});

it('starts with empty intial data', () => {
  const wrapper = shallow(<EventModal />);
  expect(wrapper.state()).to.have.property('title', '');
  expect(wrapper.state()).to.have.property('start', '');
  expect(wrapper.state()).to.have.property('end', '');
});

it('updates state with title', () => {
  const wrapper = shallow(<EventModal />);
  const value = 'testTitle';

  wrapper.instance().handleTitle({ target: { value } });

  expect(wrapper.state()).to.have.property('title', value);
});

it('updates state with startDate', () => {
  const wrapper = shallow(<EventModal />);
  const value = '10.15.2017';

  wrapper.instance().handleStart({ target: { value } });

  expect(wrapper.state()).to.have.property('start', value);
});

it('updates state with endDate', () => {
  const wrapper = shallow(<EventModal />);
  const value = '10.15.2018';

  wrapper.instance().handleEnd({ target: { value } });

  expect(wrapper.state()).to.have.property('end', value);
});

it('formats date correctly', () => {
  const wrapper = shallow(<EventModal />);

  expect(wrapper.instance().formatDateToDay(new Date('10.10.2010'))).to.equal(
    'Sun Oct 10 2010'
  );
});
