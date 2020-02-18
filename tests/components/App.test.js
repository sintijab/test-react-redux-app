import { shallow } from 'enzyme';
import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TestBoard from '../../src/components/TestBoard';

Enzyme.configure({ adapter: new Adapter() });

describe('<TestBoard />', () => {
    it('should render App component without data', () => {
      const wrapper = shallow(
          <TestBoard />
      );
      expect(wrapper).toMatchSnapshot();
    });
});
