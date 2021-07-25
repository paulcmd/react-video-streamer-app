import React from 'react'
import Modal from '../Modal'

const StreamDelete = () => {
    const actionButtons =  (
            <div>
                <button className='ui button negative'>Delete</button>
                <button className='ui button'>Cancel</button>
            </div>
        )
    
    return (
        <div>
            <Modal
                title="Delete Stream"
                content="Are you sure you want to delete this stream?"
                actionButtons={actionButtons}
            />
        </div>
    )
}

export default StreamDelete

/*reat fragment is an invisible element that doesnt have any impact on the DOM*/