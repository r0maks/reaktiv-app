import React from 'react'
import { connect } from 'react-redux'
import { showNewRoom } from '../actions'


const Controls = ({ dispatch, state, rooms }) => {

    return (
        <div className="main-controls-container">
            <div className="main-controls">
                <div className="title-message">
                    Welcome to Sprint Planner
                    <span>by <a href="http://romaks.me/">@romaks</a></span>
                </div>
                <button onClick={() => dispatch(showNewRoom())}>Create a Room</button>
            </div>
            {renderRoomsList(rooms)}
        </div>
    )
}

const renderRoomsList = (rooms) => {
    if (rooms.length) {
        return (
            <div className="room-list">
                {rooms.map(room => (
                    <div className="room" key={room.name}>
                        <p>{room.name}</p>
                        <button className="btn">Join</button>
                    </div>
                ))}
            </div>
        )
    }
    return null;
}

const mapStateToProps = ({ planning }) => {
    return {
        rooms: planning.rooms
    }
}

export default connect(mapStateToProps)(Controls)
