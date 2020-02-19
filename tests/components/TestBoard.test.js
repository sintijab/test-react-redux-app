import { shallow } from 'enzyme';
import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import TestBoard from '../../src/components/TestBoard';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureMockStore();
const store = mockStore({});

describe('<TestBoard />', () => {
    it('should render TestBoard component without data', () => {
      const wrapper = shallow(
        <Provider store={store}>
          <TestBoard />
        </Provider>
      );
      expect(wrapper).toMatchSnapshot();
    });
});
