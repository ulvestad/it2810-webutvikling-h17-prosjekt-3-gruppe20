import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import Todo from './Todo';




it('renders without crashing', () => {
  shallow(<Todo />);
});




/*
it('calls submit handler when submitted with new note', () => {
  const wrapper = shallow(<Todo />);
  const handler = sinon.spy();

  const target = {
    value: 'noe'
  }


  //wrapper.instance().handleChange();

  const preventDefault = sinon.spy();
  const querySelector = sinon.spy();
  
  wrapper
    .find('.todoMargin')
    .simulate('onchange', { target });

  //expect(wrapper.state()).to.have.property('value', 'noe');
    
  expect()

  //wrapper.instance().handleChange();

  
  wrapper
    .find('form')
    .simulate('submit', { preventDefault, target: { querySelector } });
});
*/



/*

this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeStorage = this.changeStorage.bind(this);
    this.removeStorageItem = this.removeStorageItem.bind(this);

*/