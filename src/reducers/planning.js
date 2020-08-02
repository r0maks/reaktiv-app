export const states = {
  HOME: 'home',
  CREATE: 'create',
  JOINING: 'joining',
  POINTING: 'pointing',
}

export const pointingModes = {
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
  userName: null,
  isHost: false,
  users: [],
  pointingMode: pointingModes.SETUP,
  pointingTopic: '',
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
          userName: action.name
        }
      }

      return {
        ...state,
      }
    default:
      return state;
  }
}

export default planning;
