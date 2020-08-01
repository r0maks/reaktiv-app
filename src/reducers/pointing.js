export const pointingModes = {
  SETUP: 'setup',
  POINTING: 'pointing'
}

const initialState = {
  roomId: null,
  roomName: null,
  users: [],
  pointingMode: pointingModes.SETUP,
  pointingTopic: '',
};

const pointing = (state = initialState, action) => {
  switch (action.type) {
    case 'TRY_JOIN_ROOM':
      return {
        ...state,
        roomId: action.roomId,
        roomName: action.roomName
      }
    default:
      return state;
  }
}

export default pointing;
