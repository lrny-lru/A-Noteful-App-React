import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import store from '../../dummy-store';
import NoteRoute from './NoteRoute';

describe(`NoteRoute component`, () => {
    const props = {
      store: store
    }
  
    it('renders NoteRoute by default', () => {
      const wrapper = shallow(<NoteRoute />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  
    it('renders note route from store when in props', () => {
      const component = shallow(<NoteRoute {...props} />)
        .find('.App')
      expect(toJson(component)).toMatchSnapshot()
    })
  })
  