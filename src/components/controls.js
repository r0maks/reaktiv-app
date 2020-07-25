import React from 'react'
import { connect } from 'react-redux'
import { showNewRoom } from '../actions'


const Controls = ({ dispatch, state }) => {

    return (
        <div className="main-controls">
            <button onClick={() => dispatch(showNewRoom())}>Create a Room</button>
            <button>Join a Room</button>
        </div>
    )
}

export default connect()(Controls)
