import { combineReducers } from 'redux'
import { reducer as formReducer} from 'redux-form'
import authReducer from './authReducer'

export default combineReducers({
    auth: authReducer,
    form: formReducer
})



/*
reducer is a named export from the redux form lib. we can instead change it to 
formReducer using 'as' so the name is more descriptive
*/