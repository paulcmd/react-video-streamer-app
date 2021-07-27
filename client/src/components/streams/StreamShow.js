import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'
import flv from 'flv.js'
import { useParams } from 'react-router-dom'

const StreamShow = ({ fetchStream, stream }) => {
    const { id } = useParams()

    // console.clear()
     console.log('stream from streamShow props', stream)

    useEffect(() => {
        fetchStream(id)
    }, [])

    if (!stream) {
        <div>Loading...</div>
    }
    const { title, description } = stream
    return (
        <div>
            <video />
            <h1>{title}</h1>
            <h3>{description}</h3>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow)
