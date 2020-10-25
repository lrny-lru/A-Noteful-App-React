import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import store from '../../dummy-store';
import MainRoute from './MainRoute';

describe(`MainRoute component`, () => {
    const props = {
      store: store
    }
  
    it('renders MainRoute by default', () => {
      const wrapper = shallow(<MainRoute />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  
    it('renders main route from store when in props', () => {
      const component = shallow(<MainRoute {...props} />)
        .find('.App')
      expect(toJson(component)).toMatchSnapshot()
    })
  })
  