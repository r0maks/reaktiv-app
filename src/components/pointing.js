import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { addUserAndSubscribe, goBackHome } from '../actions';

const Pointing = ({ dispatch, state, roomName, userName, isHost, roomId, users, roomCode, room }) => {

    useEffect(() => {
        dispatch(addUserAndSubscribe(roomId, userName, isHost))
    }, []);

    return (
        <div className="pointing-room">
            <div className="room-header">
                Welcome <strong>{userName}</strong>, you are in room: <strong>{roomName}</strong> (Code: {roomCode})
            </div>
            <div className="room-content">
                {renderPointingEvent()}
                {renderMyCards()}
            </div>
            <div className="room-controls">
                <button className="btn" onClick={() => dispatch(goBackHome())}>Leave Room</button>
            </div>
        </div>
    )
}

const mapStateToProps = ({ planning }) => {
    return {
        mode: planning.pointingMode,
        roomName: planning.roomName,
        roomId: planning.roomId,
        roomCode: planning.roomCode,
        userName: planning.userName,
        isHost: planning.isHost,
        room: planning.currentRoom,
    }
}
const renderHostControls = () => {
    return (
        <div className="container">
            <span className="title"><strong>Currently pointing:</strong></span>
        </div>
    )
}
const renderPointingEvent = () => {
    return (
        <div className="container">
            <span className="title"><strong>Currently pointing:</strong></span>
        </div>
    )
}

const renderMyCards = () => {

    const options = [
        '1', '2', '3', '5', '8', '13', '21', '?'
    ];

    return (
        <div className="container">
            <span className="title"><strong>Your estimate:</strong></span>
            <div className="my-cards">
                {options.map(option => (
                    <div className="option" key={option}>
                        {option}
                    </div>
                ))}
            </div>
        </div>
    )
}

const renderRoomUsers = (room) => {

    if (!room || !room.users || !room.users.length) {
        return null;
    }

    return (
        <div className="container room-users">
            <span className="title"><strong>Users</strong></span>
            {room.users.map(user => (
                <div className="user" key={user.id}>
                    -&nbsp;{user.userName}
                </div>
            ))}
        </div>
    )
}

export default connect(mapStateToProps)(Pointing)
