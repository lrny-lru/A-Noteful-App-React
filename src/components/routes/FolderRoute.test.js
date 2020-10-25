import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import store from '../../dummy-store';
import FolderRoute from './FolderRoute';

describe(`FolderRoute component`, () => {
    const props = {
      store: store
    }
  
    it('renders FolderRoute by default', () => {
      const wrapper = shallow(<FolderRoute />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  
    it('renders folder route from store when in props', () => {
      const component = shallow(<FolderRoute {...props} />)
        .find('.App')
      expect(toJson(component)).toMatchSnapshot()
    })
  })
  