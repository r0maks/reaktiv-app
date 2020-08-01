import React from 'react'
import { connect } from 'react-redux'
import { showNewRoom, searchRooms, tryJoinRoom } from '../actions'

const Controls = ({ dispatch, state, rooms, searchTerms }) => {

    return (
        <div className="main-controls-container">
            <div className="main-controls">
                <div className="title-message">
                    Welcome to Sprint Planner
                    <span>by <a href="http://romaks.me/">@romaks</a></span>
                </div>
                <button onClick={() => dispatch(showNewRoom())}>Create a Room</button>
            </div>
            {renderRoomsList(rooms, searchTerms, dispatch)}
        </div>
    )
}

const renderRoomsList = (rooms, searchTerms, dispatch) => {
    if (rooms.length) {
        const filteredRooms = filterRooms(rooms, searchTerms)
        return (
            <div className="room-list-container">
                <input type="text" onChange={e => dispatch(searchRooms(e.target.value))} placeholder="Search Rooms" />
                <div className="room-list">
                    {filteredRooms.map(room => (
                        <div className="room" key={room.id}>
                            <p>
                                <strong>{room.name}</strong><br />
                                <span>{new Date(room.created).toDateString()} {new Date(room.created).toLocaleTimeString()}</span>
                            </p>
                            <button onClick={() => dispatch(tryJoinRoom(room.id, room.name))} className="btn">Join</button>
                        </div>
                    ))}
                </div>
                <span className="no-results-message">{!filteredRooms.length ? ('No results found') : null}</span>
            </div>
        )
    }
    return null
}

const filterRooms = (rooms, searchTerms) => {
    if (searchTerms && rooms && rooms.length) {
        const allTerms = searchTerms.toLowerCase().split(' ')
        rooms = rooms.filter(room => {
            return allTerms.every(term => room.name.toLowerCase().includes(term))
        })
    }
    return rooms
}

const mapStateToProps = ({ planning }) => {
    return {
        rooms: planning.rooms,
        searchTerms: planning.searchTerms
    }
}

export default connect(mapStateToProps)(Controls)
