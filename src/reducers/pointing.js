const initialState = {
  roomId: null,
  roomName: null,
  users: [],
  pointingMode: 'setup',
  pointingTopic: '',
};

const pointing = (state = initialState, action) => {
  switch (action.type) {
    case 'JOIN_ROOM':
      return {
        ...state,
        roomId: action.roomId,
        roomName: action.roomName
      }
    default:
      return {
        ... state
      };
  }
}

export default pointing;
