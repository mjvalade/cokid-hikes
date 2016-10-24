const trailsReducer = ( state=[], action ) => {
  console.log(action);
  switch (action.type) {
    case 'CREATE_TRAIL':
      return [...state, action.payload]

    default:
      return state;
  }
};

export default trailsReducer;
