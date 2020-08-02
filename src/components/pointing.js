import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { addUserAndSubscribe } from '../actions';

const Pointing = ({ dispatch, state, roomName, userName, isHost, roomId }) => {

    useEffect(() => {
        dispatch(addUserAndSubscribe(roomId, userName, isHost))
      }, []);

    return (
        <div className="pointing-room">
            {roomName}
        </div>
    )
}

const mapStateToProps = ({ planning }) => {
    return {
        mode: planning.pointingMode,
        roomName: planning.roomName,
        roomId: planning.roomId,
        userName: planning.userName,
        isHost: planning.isHost
    }
}

export default connect(mapStateToProps)(Pointing)
