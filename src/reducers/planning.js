const initialState = {
  mode: 'home',
  rooms: [],
  searchTerms: '',
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
    default:
      return initialState;
  }
}

export default planning;
