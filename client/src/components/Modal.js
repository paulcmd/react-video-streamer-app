import React from 'react'
import ReactDOM from 'react-dom'

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
            <div className="ui standard modal visible active">
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
*/
