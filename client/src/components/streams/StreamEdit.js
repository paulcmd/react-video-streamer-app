import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'

const StreamEdit = ({ stream }) => {
    console.log('stream being edited', stream)

    useEffect(() => {
        fetchStream()
    }, [])

    return (
        <div>
            {!stream ? (
                <div>Loading...</div>
            ) : (
                <div>
                    {stream.title}
                    <br />
                    {stream.description}
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    console.log('ownProps', ownProps)
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream })(StreamEdit)

/*
- the props are coming from the Route component, from react-router-dom
- useParams can also be used here to extract id directly from match object
*/
