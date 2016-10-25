const trail = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_TRAIL':
      return {
        title: action.title,
        description: action.description,
        distance: action.distance,
        elevation: action.elevation,
        notes: action.notes,
      };

    default:
      return state;
  }
};

const trails = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case 'CREATE_TRAIL':
      return [...state, trail(undefined, action)];

    default:
      return state;
  }
};

export default trails;
