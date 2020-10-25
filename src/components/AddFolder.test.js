import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import store from '../dummy-store';
import AddFolder from './AddFolder';

describe(`AddFolder component`, () => {
    const props = {
      store: store
    }
  
    it('renders AddFolder by default', () => {
      const wrapper = shallow(<AddFolder />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  
    it('renders form from store when in props', () => {
      const component = shallow(<AddFolder {...props} />)
        .find('form')
      expect(toJson(component)).toMatchSnapshot()
    })
  })
  