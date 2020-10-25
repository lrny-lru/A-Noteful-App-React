import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import store from '../../dummy-store';
import SidebarSection from './SidebarSection';

describe(`SidebarSection component`, () => {
    const props = {
      store: store
    }
  
    it('renders SidebarSection by default', () => {
      const wrapper = shallow(<SidebarSection />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  
    it('renders Sidebar section with store when in props', () => {
      const component = shallow(<SidebarSection {...props} />)
        .find('.section--sidebar')
      expect(toJson(component)).toMatchSnapshot()
    })
  })
  