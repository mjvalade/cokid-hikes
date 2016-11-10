/* globals describe, it, expect */

import * as actions from '../../../actions';

import { startListeningToAuth, logIn, logOut } from  '../../../actions/auth';
import { createTrail, fetchAllTrails, setSelectedTrail, receiveCurrentLocalWeather, fetchLocalWeather } from  '../../../actions';


describe('Auth actions', () => {
  it('should create an action', () => {
    expect(true).toEqual(true);
  });

  xit('should create an action to start listening for login', () => {

  });


});

describe('Main actions', () => {
  it('should create an action', () => {
    expect(true).toEqual(true);
  });

  it('should create an action to create a new trail', () => {
    const trailData = 'Flower trail';
    const expectedAction = {
      type: 'CREATE_NEW_TRAIL',
      trail: trailData
    };
    expect(createTrail(trailData)).toEqual(expectedAction);
  });

  it('should create an action to fetch all the trails', () => {
    
  });
});
