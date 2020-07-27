const initialState = {
  roomId: null,
  roomName: null,
  users: [],
  pointingMode: 'setup',
  pointingTopic: '',
};

const pointing = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_NEW_ROOM':
      return {
        ...state,
        roomId: 1,
        roomName: action.name,
      }
    default:
      return initialState;
  }
}

export default pointing;
