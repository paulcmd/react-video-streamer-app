import React from 'react'
import Modal from '../Modal'
import history from '../../history'

const StreamDelete = () => {
    const actionButtons =  (
            <>
                <button className='ui button negative'>Delete</button>
                <button className='ui button'>Cancel</button>
            </>
    )
    
    const onDissmiss = () => history.push('/')
    

    return (
        <div>
            <Modal
                title="Delete Stream"
                content="Are you sure you want to delete this stream?"
                actionButtons={actionButtons}
                onDissmiss={onDissmiss}
            />
        </div>
    )
}

export default StreamDelete

/*
reat fragment is an invisible element that doesnt have any impact on the DOM
-this saves us from having to introduce a new div that changes button styling(
    the buttons were right against the edge of the modal
)
*/