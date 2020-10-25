import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ErrorBoundary from './ErrorBoundary';

describe(`ErrorBoundary component`, () => {
    const props = {
      message: "Test Error Message"
    }
  
    it('renders an ErrorBoundary by default', () => {
      const wrapper = shallow(<ErrorBoundary />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  
    it('renders an error message with message when in props', () => {
      const msg = shallow(<ErrorBoundary {...props} />)
        .find('Test Error Message')
      expect(toJson(msg)).toMatchSnapshot()
    })
  })
  