import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import store from '../dummy-store';
import FolderItem from './FolderItem';

describe(`FolderItem component`, () => {
    const props = {
        id: 'testid',
        name: 'testname',
        store: store
    }
  
    it('renders FolderItem by default', () => {
      const wrapper = shallow(<FolderItem />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  
    it('renders fodler with name testname when in props', () => {
      const component = shallow(<FolderItem {...props} />)
        .find('testname')
      expect(toJson(component)).toMatchSnapshot()
    })
  })
  