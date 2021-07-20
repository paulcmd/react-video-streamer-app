import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm'

const StreamEdit = ({ stream, match, fetchStream, editStream }) => {
    console.log('stream being edited', stream)

    useEffect(() => {
        fetchStream(match.params.id)
    }, [])

    const onSubmit = (formValues) => {
        
    }

    return (
        <div>
            <h3>Edit a Stream</h3>
            <StreamForm
                initialValues={_.pick(stream, 'title', 'description')}
                onSubmitCallback={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    console.log('ownProps', ownProps)
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit)

/*
- the props are coming from the Route component, from react-router-dom
- useParams can also be used here to extract id directly from match object
-initialValues are coming from the values with the same name in the 
Field component
- we only want to pick title and desc and not the id. 
*/
