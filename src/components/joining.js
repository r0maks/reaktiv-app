import React, { useState } from 'react'
import { connect } from 'react-redux'
import { goBackHome, joinRoom } from '../actions';

const Joining = ({ dispatch, state, roomName }) => {

    const [
        name, setName,
    ] = useState()

    const [
        code, setCode,
    ] = useState()

    const [
        host, setHost,
    ] = useState()

    return (
        <div className="joining-controls">
            <form>
                <span>Joining room: <strong>{roomName}</strong></span>
                <input type="text" onChange={e => setName(e.target.value)} placeholder="Your Name" />
                <input type="text" onChange={e => setCode(e.target.value)} placeholder="Access Code" />
                <div className="checkbox">
                    <input type="checkbox" onChange={e => setHost(e.target.value)} id="host" />
                    <label> I am the host</label>
                </div>
            </form>
            <div className="grid-2">
                <button className="btn" onClick={() => dispatch(goBackHome())}>Cancel</button>
                <button disabled={!(name && code) ? true : false} onClick={() => dispatch(joinRoom(name, code,!!host, dispatch))} className="btn">Join</button>
            </div>
        </div>
    )
}

const mapStateToProps = ({ planning }) => {
    return {
        roomName: planning.roomName
    }
}

export default connect(mapStateToProps)(Joining)
