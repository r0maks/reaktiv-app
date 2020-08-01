import React, { useState } from 'react'
import { connect } from 'react-redux'
import { goBackHome } from '../actions';

const Joining = ({ dispatch, state, roomName }) => {

    const [
        name, setName,
    ] = useState()

    const [
        code, setCode,
    ] = useState()

    return (
        <div className="joining-controls">
            <form>
                <span>Joining: <strong>{roomName}</strong></span>
                <input type="text" onChange={e => setName(e.target.value)} placeholder="Your Name" />
                <input type="text" onChange={e => setCode(e.target.value)} placeholder="Access Code" />
                <div className="checkbox">
                    <input type="checkbox" id="host" />
                    <label> I am the host</label>
                </div>
            </form>
            <div className="grid-2">
                <button className="btn" onClick={() => dispatch(goBackHome())}>Cancel</button>
                <button disabled={!(name && code) ? true : false} onClick={() => { }} className="btn">Join</button>
            </div>
        </div>
    )
}

const mapStateToProps = ({ pointing }) => {
    return {
        roomName: pointing.roomName
    }
}

export default connect(mapStateToProps)(Joining)
