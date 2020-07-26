export const showNewRoom = () => ({
  type: 'SHOW_NEW_ROOM_CREATE',
})
export const goBackHome = () => ({
  type: 'GO_BACK_HOME',
})
export const createNewRoom = (name, code) => ({
  type: 'CREATE_NEW_ROOM',
  name,
  code
})
export const joinRoom = () => ({
  type: 'JOIN_ROOM',
})

