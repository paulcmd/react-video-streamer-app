import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm'

const StreamEdit = ({ stream, fetchStream, match, editStream }) => {
    console.clear()
   console.log('stream from streamEdit props', stream)

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
   // console.log('ownProps', ownProps)
    //console.log('stream from streamEdit mapState',state.streams[ownProps.match.params.id])
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit)

/*
- fetchStream is loading our stream into props from mapStateToProps. this makes the component
 independent from streamList and other components. it can fetch its own data and edit it. 
 otherwise if a user bookmarked this page they'd come back and find no data.
- the props are coming from the Route component, from react-router-dom
- useParams can also be used here to extract id directly from match object
-initialValues are coming from the values with the same name in the 
Field component
- we only want to pick title and desc and not the id. 
*/
