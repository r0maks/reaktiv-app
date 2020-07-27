const initialState = {
  mode: 'home',
  rooms: []
};

const planning = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_NEW_ROOM_CREATE':
      return {
        ...state,
        mode: 'create',
      }
    case 'CREATE_NEW_ROOM':
      return {
        ...state,
        mode: 'home',
        rooms:
          [
            ...state.rooms,
            {
              name: action.name
            }
          ]
      }
    case 'GO_BACK_HOME':
      return {
        ...state,
        mode: 'home',
      }
    default:
      return initialState;
  }
}

export default planning;
