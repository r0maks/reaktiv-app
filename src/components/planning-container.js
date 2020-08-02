import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Controls from './controls'
import Create from './create'
import Pointing from './pointing'
import Joining from './joining'
import { fetchRooms } from '../actions';
import { states } from '../reducers/planning'

const Planning = ({ state, dispatch }) => {

    useEffect(() => {
        dispatch(fetchRooms())
    }, [])

    return (
        <div className="main-container">
            {getComponentForMode(state)}
        </div>
    )
}

const mapStateToProps = ({ planning }) => {
    return {
        state: planning.state
    }
}

const getComponentForMode = (state) => {
    switch (state) {
        case states.POINTING:
            return <Pointing />
        case states.CREATE:
            return <Create />
        case states.JOINING:
            return <Joining />
        case states.HOME:
        default:
            return <Controls />
    }
}

export default connect(mapStateToProps)(Planning)
