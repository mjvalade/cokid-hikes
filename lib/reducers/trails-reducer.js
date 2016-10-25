const trail = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_TRAIL':
      return {
        title: action.payload.title,
        description: action.payload.description,
        distance: action.payload.distance,
        elevation: action.payload.elevation,
        notes: action.payload.notes,
      };

    default:
      return state;
  }
};

const trails = (state = [], action) => {
  console.log('in trails reducer: ' + action.type);
  switch (action.type) {
    case 'CREATE_TRAIL':
      // let newTrail = trail(undefined, action);
      // state = state.concat([newTrail])
      // return state;
      return [...state, trail(undefined, action)];
    default:
      return state;
  }
};

export default trails;
