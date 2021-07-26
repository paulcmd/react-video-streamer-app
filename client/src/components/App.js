import React from 'react'
import { Router, Route, Switch} from 'react-router-dom'

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
                    <Switch>
                        <Route path="/" exact component={StreamList} />
                        <Route
                            path="/streams/new"
                            exact
                            component={StreamCreate}
                        />
                        <Route
                            path="/streams/edit/:id"
                            exact
                            component={StreamEdit}
                        />
                        <Route
                            path="/streams/delete/:id"
                            exact
                            component={StreamDelete}
                        />
                        <Route
                            path="/streams/:id"
                            exact
                            component={StreamShow}
                        />
                    </Switch>
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

-switch will only show one route, regardless of whether other routes match it eg
/streams/new and streams/:id
*/