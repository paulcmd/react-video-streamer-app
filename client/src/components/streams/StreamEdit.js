import React from 'react'
import { connect } from 'react-redux'

const StreamEdit = ({stream}) => {
    console.log('stream being edited',stream)
    return (
        <div>
            {stream.title}
            <br />
            {stream.description}
        
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    console.log('ownProps', ownProps)
    return {
        stream: state.streams[ownProps.match.params.id]
    }
     
}

export default connect(mapStateToProps)(StreamEdit)

/*
- the props are coming from the Route component, from react-router-dom
- useParams can also be used here to extract id directly from match object
*/