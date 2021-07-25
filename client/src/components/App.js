import React from 'react'
import { Router, Route, useHistory } from 'react-router-dom'

import StreamList from './streams/StreamList'
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamShow from './streams/StreamShow'
import Header from './Header'
import history from '../history'


const App = () => {

    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit/:id" exact component={StreamEdit} />
                    <Route
                        path="/streams/delete/:id"
                        exact
                        component={StreamDelete}
                    />
                    <Route path="/streams/show" exact component={StreamShow} />
                </div>
            </Router>
        </div>
    )
}

export default App


/*
- switched from using BrowserRouter to just Router so that we can pass our own
history object

-useHistory can now be used instead of creating a history file/object
*/