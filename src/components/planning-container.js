import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Controls from './controls'
import Create from './create'
import Pointing from './pointing'
import Joining from './joining'
import { fetchRooms } from '../actions';
import { modes } from '../reducers/planning'

const Planning = ({ mode, dispatch }) => {

    useEffect(() => {
        dispatch(fetchRooms())
    })

    return (
        <div className="main-container">
            {getComponentForMode(mode)}
        </div>
    )
}

const mapStateToProps = ({ planning }) => {
    return {
        mode: planning.mode
    }
}

const getComponentForMode = (mode) => {
    switch (mode) {
        case modes.POINTING:
            return <Pointing />
        case modes.CREATE:
            return <Create />
        case modes.JOINING:
            return <Joining />
        case modes.HOME:
        default:
            return <Controls />
    }
}

export default connect(mapStateToProps)(Planning)
