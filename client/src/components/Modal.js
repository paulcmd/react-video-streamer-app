import React from 'react'
import ReactDOM from 'react-dom'
import history from '../history'

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div
            onClick={()=> history.push('/')}
            className="ui dimmer modals visible active">
            <div
                onClick={(e)=> e.stopPropagation()}
                className="ui standard modal visible active">
                <div className="header">Delete Stream</div>
                <div className="content">
                    Are you sure you want to delete this stream?
                </div>
                <div className="actions">
                    <button className="ui primary button">Delete</button>
                    <button className="ui button">Cancel</button>
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal

/*
The modal is rendered on the body element, but not on the root div, but in the modal div in
the public html file. This avoids having to render the modal in the sreamDelete component
because we'd have to render in all parent elements
-on clicking parent modal div, go home. on clicking the child to main modal parent div( anywhere in
    the modal that is not a button) we want to stop bubbling up of that click event to the 
    parent div(ie the one thats taking us back to home)
*/
