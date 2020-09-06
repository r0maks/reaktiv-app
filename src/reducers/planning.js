export const states = {
  HOME: 'home',
  CREATE: 'create',
  JOINING: 'joining',
  POINTING: 'pointing',
}

export const roomStates = {
  SETUP: 'setup',
  POINTING: 'pointing'
}

const initialState = {
  state: states.HOME,
  rooms: [],
  searchTerms: '',
  roomId: null,
  roomName: null,
  roomCode: null,
  currentRoom: null,
  userName: null,
  isHost: false,
  pointingMode: roomStates.SETUP,
  pointingTopic: '',
  joiningError: null,
}

const planning = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_NEW_ROOM_CREATE':
      return {
        ...state,
        state: states.CREATE,
      }
    case 'GO_BACK_HOME':
      return {
        ...state,
        state: states.HOME,
        searchTerms: '',
        joiningError: null,
        currentRoom: null,
        roomId: null,
        roomName: null,
        roomCode: null,
      }
    case 'SEARCH_ROOMS':
      return {
        ...state,
        searchTerms: action.searchTerms,
      }
    case 'FETCH_ROOMS':
      return {
        ...state,
        rooms: action.payload,
      }
    case 'ROOM_UPDATED':
      return {
        ...state,
        currentRoom: action.room
      }
    case 'TRY_JOIN_ROOM':
      return {
        ...state,
        state: states.JOINING,
        roomId: action.roomId,
        roomName: action.roomName,
        roomCode: action.roomCode
      }
    case 'JOIN_ROOM':

      if (action.code === state.roomCode) {

        return {
          ...state,
          state: states.POINTING,
          isHost: action.isHost,
          userName: action.name,
          joiningError: null,
        }
      }

      return {
        ...state,
        joiningError: 'Incorrect access code'
      }
    default:
      return state;
  }
}

export default planning;
