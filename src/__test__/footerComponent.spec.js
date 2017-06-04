import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router';

function setup() {
  const enzymeWrapper = mount(<Footer />);

  return {
    enzymeWrapper
  }
}
describe('Footer', () => {
  it('should render footer component', () => {
    const { enzymeWrapper } = setup();
    const footer = enzymeWrapper.find('nav.footer');
    const link = shallow(<Link className="navbar-brand text-center navbar-footer" href="https://github.com/cresponline">Salvador Crespo 2017</Link>);
    expect (footer.length).toEqual(1);
    expect (link.length).toEqual(1);
    expect (link.text()).toEqual( 'Salvador Crespo 2017');
  });
});
