export const createTrail = (payload) => {
  return {
    type: 'CREATE_TRAIL',
    trailsObject: payload
  };
};
