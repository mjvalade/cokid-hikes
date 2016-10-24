export const createTrail = (payload) => {
  console.log('in action' + payload);
  return {
    type: 'CREATE_TRAIL',
    payload
  };
};
