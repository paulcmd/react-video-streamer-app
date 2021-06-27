import React from 'react'

class GoogleAuth extends React.Component {
    state = { isSignedIn: null }

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
                    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
                })
        })
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return (
                <div>
                    <p>I dont know if we are signed In</p>
                </div>
            )
        } else if (this.state.isSignedIn) {
            return (
                <div>
                    <p>I am signed In!</p>
                </div>
            )
        } else {
            return (
                <div>
                    <p>I am not Signed In</p>
                </div>
            )
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogleAuth

/*
- window.gapi - we have to indicate its for the window scope
- we are loading up the client portion of the library every time the app loads the first time
- the callback function ie window.gapi.client... is called after this clients auth2 library is loaded into gapi
- scope...we only need to access the user's email
- this.auth can be referenced from anywhere in the class to figure out if user is signed in or not
- line 12...we are updating component level state with users sign in status. it changes when users signs in or off
*/
