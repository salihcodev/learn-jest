import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import TodoList from './TodoList.comp.jsx';

describe('Render what it gets correctly', () => {
  let component;
  Enzyme.configure({
    adapter: new Adapter(),
  });

  it('check render correctly.', () => {
    component = shallow(<TodoList />);

    expect(component).toMatchSnapshot();
  });

  it("render section list wrapper & it's contents.", () => {
    component = shallow(<TodoList />);

    expect(component.find('section').length).toBe(1);
  });
});
