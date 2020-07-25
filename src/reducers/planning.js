const initialState = {
  mode: 'home'
};

const planning = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_NEW_ROOM_CREATE':
      return {
        ...state,
        mode: 'create',
      }
    case 'GO_BACK_HOME':
    default:
      return initialState;
  }
}

export default planning;
