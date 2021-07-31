import React, { useEffect, Component } from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'
import flv from 'flv.js'
import { useParams } from 'react-router-dom'

class StreamShow extends Component {
    constructor(props) {
        super(props)

        this.videoRef = React.createRef()
    }
    // const { id } = useParams()

    // console.clear()
    //  console.log('stream from streamShow props', stream)

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    render() {
        if (!stream) {
            <div>Loading...</div>
        }
        const { title, description } = stream
        return (
            <div>
                <video ref={this.videoRef}/>
                <h1>{title}</h1>
                <h3>{description}</h3>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow)


/* ref in react gives us reference to a dom element in the dom tree
- a constructor method is needed to create an instance of ref
*/