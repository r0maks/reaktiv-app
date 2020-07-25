import React from 'react'
import { connect } from 'react-redux'
import Controls from './controls'
import Create from './create'

const Planning = ({ mode }) => {

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
        case 'create':
            return <Create />;
        case 'home':
        default:
            return <Controls />;
    }
}

export default connect(mapStateToProps)(Planning)
