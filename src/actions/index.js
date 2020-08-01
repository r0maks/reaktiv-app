import { roomsRef } from '../firebase'

export const showNewRoom = () => ({
  type: 'SHOW_NEW_ROOM_CREATE',
})
export const searchRooms = (searchTerms) => ({
  type: 'SEARCH_ROOMS',
  searchTerms
})
export const goBackHome = () => ({
  type: 'GO_BACK_HOME',
})
export const addRoom = (name, code) => async dispatch => {
  roomsRef.push().set({
    name,
    code,
    created: Date.now(),
    updated: Date.now()
  }, error => {
    if (!error) {
      dispatch(goBackHome())
    }
  })
}
export const fetchRooms = () => async dispatch => {
  roomsRef.orderByChild('created').on('value', snapshot => {
    const recordsDict = snapshot.val();
    dispatch({
      type: 'FETCH_ROOMS',
      payload: Object.keys(recordsDict).map(id => {
        const record = recordsDict[id]
        return {
          ...record,
          id
        }
      }).sort((a, b) => (b.created - a.created))
    });
  });
}
export const joinRoom = (roomId, roomName) => ({
  type: 'JOIN_ROOM',
  roomId,
  roomName
})
export const tryJoinRoom = (roomId, roomName) => ({
  type: 'TRY_JOIN_ROOM',
  roomId,
  roomName
})

