export const modes = {
  HOME: 'home',
  CREATE: 'create',
  JOINING: 'joining',
  POINTING: 'pointing',
}

const initialState = {
  mode: modes.HOME,
  rooms: [],
  searchTerms: '',
}

const planning = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_NEW_ROOM_CREATE':
      return {
        ...state,
        mode: modes.CREATE,
      }
    case 'GO_BACK_HOME':
      return {
        ...state,
        mode: modes.HOME,
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
        mode: modes.JOINING
      }
    case 'JOIN_ROOM':
      return {
        ...state,
        mode: modes.POINTING
      }
    default:
      return initialState;
  }
}

export default planning;
