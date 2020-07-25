import React from 'react'
import { connect } from 'react-redux'
import { showNewRoom } from '../actions'

const Planning = ({ dispatch }) => {

    return (
        <div className="app-container">
            <div className="main-container">
                <div className="main-controls">
                    <button onClick={() => dispatch(showNewRoom())}>Create a Room</button>
                    <button>Join a Room</button>
                </div>
            </div>
        </div>
    )
}

export default connect()(Planning)
