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

export const createStream = (formValues) => async (dispatch) => {
    const response = await streams.post('/streams', formValues)
    //console.log(response.data)
    dispatch({
        type: CREATE_STREAM,
        payload: response.data
    })
}

export const fetchStreams = async dispatch => {
    const response = await streams.get('/streams')
    console.log(response.data)
}

/*
ALL http axios methods - Video 340 - Bulk Action Creators 1:30
*/
