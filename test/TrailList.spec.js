/* globals describe, it */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert, expect } from 'chai';

import TrailList from '../lib/components/TrailList';

describe('Trail List', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<TrailList />);
    assert.equal(wrapper.type(), 'div');
  });

  it('', () => {

  });
});
