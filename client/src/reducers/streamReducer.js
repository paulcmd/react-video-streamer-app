import _ from 'lodash'
import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case DELETE_STREAM:
            return _.omit( state, action.payload )
        default:
            return state
    }
}

/*
...state returns a new state object from state. redux requires that a new state
object be returned. 
omit does not change the state object. it creates a new state object without whatever we
passed in as action.payload
- { ...state, ..._.mapKeys(action.payload, 'id') } concat the new object from mapkeys
into the newly created state object with all the state objects in it. mapkeys will use
the ids as the new keys. check redux tools to see the newly created keys.

Example to explain es6 syntax for adding a new item to an object:

const animalSounds = { cat: 'meow', dog: 'bark'}

const animal = 'lion'

const sound = 'roar'

{ ...animalSounds, [animal] : sound }

you'll get:

{cat: 'meow', dog: 'bark', lion: 'roar'}

thus [animal]: sound creates a new key : value pair with whatever [animal] 
and sound are referencing
*/
