import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import NoteModal from './NoteModal';

it('renders without crashing', () => {
  shallow(<NoteModal />);
});

it('calls submit handler when submitted', () => {
  const handler = sinon.spy();
  const preventDefault = sinon.spy();
  const querySelector = sinon.spy();
  const wrapper = shallow(<NoteModal id={2} open handleSubmit={handler} />);

  wrapper
    .find('form')
    .simulate('submit', { preventDefault, target: { querySelector } });

  expect(handler).to.have.property('callCount', 1);
});

it('calls submit handler when submitted with new note', () => {
  const handler = sinon.spy();
  const preventDefault = sinon.spy();
  const querySelector = sinon.spy();
  const wrapper = shallow(<NoteModal id={2} open handleSubmit={handler} />);

  wrapper
    .find('form')
    .simulate('submit', { preventDefault, target: { querySelector } });

  expect(handler.args[0][0]).to.have.property('id');
  expect(handler.args[0][0]).to.have.property('title');
  expect(handler.args[0][0]).to.have.property('body');
});

it('calls submit preventDefault on event', () => {
  const handler = sinon.spy();
  const preventDefault = sinon.spy();
  const querySelector = sinon.spy();
  const wrapper = shallow(<NoteModal id={2} open handleSubmit={handler} />);

  wrapper
    .find('form')
    .simulate('submit', { preventDefault, target: { querySelector } });

  expect(preventDefault).to.have.property('callCount', 1);
});
