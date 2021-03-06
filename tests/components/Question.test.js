import { shallow } from 'enzyme';
import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import Question from '../../src/components/TestBoard';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureMockStore();
const store = mockStore({});

describe('<Question />', () => {
    it('should render Question component with valid data', () => {
      const mockedProps = {
        title: 'Test  example',
        answer: 'B',
        options: ['A', 'C', 'D'],
      };
      const wrapper = shallow(
        <Provider store={store}>
          <Question mockedProps />
        </Provider>
      );
      expect(wrapper).toMatchSnapshot();
    });
});
