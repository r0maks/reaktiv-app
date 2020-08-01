import React, { useState } from 'react'
import { connect } from 'react-redux'
import { goBackHome, createNewRoom, addRoom } from '../actions'


const Create = ({ dispatch, state }) => {

    const [
        name, setName,
    ] = useState();

    const [
        code, setCode,
    ] = useState();

    return (
        <div className="create-controls">
            <form>
                <input type="text" onChange={e => setName(e.target.value)} placeholder="Room Name" />
                <input type="text" onChange={e => setCode(e.target.value)} placeholder="Access Code" />
            </form>
            <div className="grid-2">
                <button className="btn" onClick={() => dispatch(goBackHome())}>Cancel</button>
                <button disabled={!(name && code) ? true : false} onClick={() => dispatch(addRoom(name, code))} className="btn">Create</button>
            </div>
        </div>
    )
}

export default connect()(Create)
