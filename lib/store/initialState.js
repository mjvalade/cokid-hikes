export const initialState = {
  auth: {
    status: 'ANONYMOUS',
    username: null,
    uid: null,
    starTrail: []
    // allow user to select "favorites" and render those titles on dashboard
    // favorites: []
  },

  trails: {
    data: [],
    selectedTrail: null,
  }
};
