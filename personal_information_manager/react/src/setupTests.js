import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

configure({ adapter: new Adapter() });

const localStorageMock = {
  getItem: sinon.spy(),
  setItem: sinon.spy(),
  clear: sinon.spy()
};
global.localStorage = localStorageMock;
