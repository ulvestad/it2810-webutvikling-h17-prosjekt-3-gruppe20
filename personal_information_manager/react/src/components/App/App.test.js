import React from 'react';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import {BrowserRouter} from 'react-router-dom'

import App from './App';

const jestExpect = global.expect;

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders correctly', () => {
  const appWrappedInRouter = (
      <BrowserRouter>
        <App/>
      </BrowserRouter>
  );
  const tree = renderer.create(appWrappedInRouter).toJSON();
  jestExpect(tree).toMatchSnapshot();
});
