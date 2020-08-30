import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { addUserAndSubscribe, goBackHome } from '../actions';

const Pointing = ({ dispatch, state, roomName, userName, isHost, roomId, users, roomCode }) => {

    useEffect(() => {
        dispatch(addUserAndSubscribe(roomId, userName, isHost))
    }, []);

    return (
        <div className="pointing-room">
            <div className="room-header">
                Welcome <strong>{userName}</strong>, you are in room: <strong>{roomName}</strong> (Code: {roomCode})
            </div>
            <div className="room-content">
                {renderCards()}
            </div>
            <div className="room-controls">
                <button className="btn" onClick={() => dispatch(goBackHome())}>Leave</button>
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
        users: planning.users,
    }
}

const renderCards = () => {

    const options = [
        '1', '2', '3', '5', '8', '13', '21', '?'
    ];

    return (
        <div className="cards">
            {options.map(option => (
                <div className="option" key={option}>
                    {option}
                </div>
            ))}
        </div>
    )
}

export default connect(mapStateToProps)(Pointing)
