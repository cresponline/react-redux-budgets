import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../components/Header/Header';
import { Link } from 'react-router';

function setup() {
  const enzymeWrapper = mount(<Header />);

  return {
    enzymeWrapper
  }
}
describe('Header', () => {
  it('should render header component', () => {
    const { enzymeWrapper } = setup();
    const header = enzymeWrapper.find('nav.header');
    const link = shallow(<Link className="link navbar-brand navbar-title" to="/">React-Redux Front Challenge</Link>);
    expect (header.length).toEqual(1);
    expect (link.length).toEqual(1);
    expect (link.text()).toEqual('React-Redux Front Challenge');
  });
});
