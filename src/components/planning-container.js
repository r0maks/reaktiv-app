import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import Controls from './controls'
import Create from './create'
import Pointing from './pointing'
import { fetchRooms } from '../actions';

const Planning = ({ mode, dispatch }) => {

    useEffect(() => {
        dispatch(fetchRooms())
      });

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
        case 'pointing':
            return <Pointing />;
        case 'create':
            return <Create />;
        case 'home':
        default:
            return <Controls />;
    }
}

export default connect(mapStateToProps)(Planning)
