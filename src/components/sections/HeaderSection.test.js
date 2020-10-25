import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import HeaderSection from './HeaderSection';

describe(`HeaderSection component`, () => {
    it('renders HeaderSection by default', () => {
      const wrapper = shallow(<HeaderSection />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })
  