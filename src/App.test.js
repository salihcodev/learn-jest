import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

describe("Check for 'App'", () => {
  let component;
  let props;

  Enzyme.configure({
    adapter: new Adapter(),
  });

  it("Should have 'appTitle' prop", () => {
    props = {
      appTitle: 'Add todo item.',
    };
    component = shallow(<App appTitle={props.appTitle} />);

    expect(component).toMatchSnapshot();
  });
});
