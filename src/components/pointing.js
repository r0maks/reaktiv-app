import React from 'react'
import { connect } from 'react-redux'

const Pointing = ({ dispatch, state, roomName }) => {

    return (
        <div className="pointing-room">
        {roomName}
        </div>
    )
}

const mapStateToProps = ({ pointing }) => {
    return {
        mode: pointing.pointingMode,
        roomName: pointing.roomName
    }
}

export default connect(mapStateToProps)(Pointing)
