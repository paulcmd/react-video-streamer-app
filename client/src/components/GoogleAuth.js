import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
                .init({
                    clientId:
                        '331603116082-vldkb06nb0kqfv11dars57hhiot4mumr.apps.googleusercontent.com',
                    scope: 'email'
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance()
                    this.onAuthChange(this.auth.isSignedIn.get())
                    this.auth.isSignedIn.listen(this.onAuthChange)

                    //console.log(this.auth.isSignedIn.get())
                })
        })
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut()
        }
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn === true) {
            console.log('You are Signed In')
            return (
                <button
                    onClick={this.onSignOutClick}
                    className="ui red google button"
                >
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        } else {
            console.log('You are Signed Out')
            return (
                <button
                    onClick={this.onSignInClick}
                    className="ui red google button"
                >
                    <i className="google icon" />
                    Sign In with Google
                </button>
            )
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)

/*
- window.gapi - we have to indicate its for the window scope
- we are loading up the client portion of the library every time the app loads the first time
- the callback function ie window.gapi.client... is called after this clients auth2 library is loaded into gapi
- scope...we only need to access the user's email
- this.auth can be referenced from anywhere in the class to figure out if user is signed in or not
- line 12...we are updating component level state with users sign in status. it changes when users signs in or out
- you can manually call - gapi.auth2.getAuthInstance().signIn() to sign in to googleAuth
- onAuthChange returns true or false to listen(), which then updates the state.
- the listen() object is in the __proto__
- 16 - this.auth.isSignedIn.get() returns true or false to this.onAuthChange
- listen receives true or false from this.props.signIn or this.props.signOut and updates the button on the page to 
  reflect the current sign in state.
- 24 - if(isSignIn) is true, then this.props.signIn() returns true as well (updates state to true)
- this.auth.currentUser.get().getId() has the user's id
*/
