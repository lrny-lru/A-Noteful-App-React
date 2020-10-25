import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import store from '../../dummy-store';
import MainSection from './MainSection';

describe(`MainSection component`, () => {
    const props = {
      store: store
    }
  
    it('renders MainSection by default', () => {
      const wrapper = shallow(<MainSection />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  
    it('renders main section with store when in props', () => {
      const component = shallow(<MainSection {...props} />)
        .find('.section--main')
      expect(toJson(component)).toMatchSnapshot()
    })
  })
  