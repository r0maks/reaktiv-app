import { roomsRef, databaseRef } from '../firebase'

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
      payload: recordsDict ? Object.keys(recordsDict).map(id => {
        const record = recordsDict[id]
        return {
          ...record,
          id
        }
      }).sort((a, b) => (b.created - a.created)) : []
    });
  });
}
export const joinRoom = (name, code, isHost) => {
  return {
    type: 'JOIN_ROOM',
    name,
    code,
    isHost,
  };
}
export const tryJoinRoom = (roomId, roomName, roomCode) => ({
  type: 'TRY_JOIN_ROOM',
  roomId,
  roomName,
  roomCode
})
export const roomUpdated = (room) => ({
  type: 'ROOM_UPDATED',
  room
})
export const addUserAndSubscribe = (roomId, userName, isHost) => async dispatch => {
  const userId = localStorage.getItem('sp-userid')
  let user = {
    userName,
    isHost,
  }
  databaseRef.child('rooms/' + roomId + '/users/' + userId).set(user)
  databaseRef.child('rooms/' + roomId).on('value', snapshot => {
    dispatch(roomUpdated(snapshot.val()))
  });
}

