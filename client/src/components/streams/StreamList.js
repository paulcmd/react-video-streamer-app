import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions'
import { Link } from 'react-router-dom'

const StreamList = ({ fetchStreams, streams, currentUserId, isSignedIn }) => {
    useEffect(() => {
        fetchStreams()
    }, [])

    const renderAdmin = (stream) => {
        if (stream.userId === currentUserId) {
            return (
                <div className="right floated content">
                    <Link
                        to={`/streams/edit/${stream.id}`}
                        className="ui button primary"
                    >
                        Edit
                    </Link>
                    <Link
                        to={`/streams/delete/${stream.id}`}
                        className="ui button negative"
                    >
                        Delete
                    </Link>
                </div>
            )
        }
    }

    const renderList = () => {
        return streams.map((stream) => {
            return (
                <div className="item" key={stream.id}>
                    {renderAdmin(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            )
        })
    }

    const renderCreate = () => {
        if (isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/streams/new" className="ui button primary">
                        Create Stream
                    </Link>
                </div>
            )
        }
    }

    return (
        <div>
            <h2>Streams</h2>
            <div className="ui celled list">{renderList()}</div>
            {renderCreate()}
        </div>
    )
}

const mapStateToProps = (state) => {
    //console.log('state', state)
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}
export default connect(mapStateToProps, { fetchStreams })(StreamList)

/*
Object.values takes all the values from the streams object and makes an array out
of them. an array is easier to map over than an object.
- the auth piece of state has the current user's id. we are comparing that to the userId
in the stream object to find out whether this is the user that created it
-comparing the streams and streamList objects shows the keys have been changed in streamList
during creation of the array(ie the numbers). The old keys were removed when we ran Object.values()
-placing renderAdmin() just after the first div ensures the html in the function are rendered
correctly in render() because it makes the decision whether to render buttons or not

*/
