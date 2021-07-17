import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from './types'
import streams from '../apis/streams'
import history from '../history'

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const createStream = (formValues) => async (dispatch, getState) => {
    const { userId } = getState().auth
    console.log('userId',userId)
    const response = await streams.post('/streams', {...formValues, userId})
    //console.log(response.data)
    dispatch({
        type: CREATE_STREAM,
        payload: response.data
    })
    history.push('/')
}

export const fetchStreams = () => async (dispatch) => {
    const response = await streams.get('/streams')
    console.log('fetchStreams',response.data)
    dispatch({
        type: FETCH_STREAMS,
        payload: response.data
    })
}

export const fetchStream = (id) => async (dispatch) => {
    const response = await streams.get(`/streams/${id}`)
    console.log(response.data)
    dispatch({
        type: FETCH_STREAM,
        payload: response.data
    })
}

export const editStream = (id, formValues) => async (dispatch) => {
    const response = await streams.put(`/streams/${id}`, formValues)

    dispatch({
        type: EDIT_STREAM,
        payload: response.data
    })
}

export const deleteStream = (id) => async (dispatch) => {
    await streams.delete(`/streams/${id}`)

    dispatch({
        type: DELETE_STREAM,
        payload: id
    })
}

/*
ALL http axios methods - Video 340 - Bulk Action Creators 1:30
-getState function can reach into global state and pull out the userId from the auth
piece of state.
-with the userId we can decide what to show the authenticated user and what not to show

-soon as we create a stream, history.push('/') programmatically takes the user to the 
streams list(home page)

*/
