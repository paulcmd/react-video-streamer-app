import React from 'react'
import { Form, Field } from 'react-final-form'

const StreamForm = ({ initialValues, onSubmitCallback }) => {
    //   console.log('streamForm props', props)

    const renderError = ({ error, touched }) =>
        touched && error ? (
            <div className="ui error message">
                <div className="header">{error}</div>
            </div>
        ) : null

    const renderInput = ({ input, label, meta }) => {
        // console.log('meta', meta)
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {renderError(meta)}
            </div>
        )
    }

    const onSubmit = (formValues) => {
        console.log('formValues', formValues)
        onSubmitCallback(formValues)
    }

    const validate = (formValues) => {
        const error = {}
        if (!formValues.title) {
            error.title = 'You must enter a Title'
        }
        if (!formValues.description) {
            error.description = 'You must enter a description'
        }

        return error
    }

    const render = ({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="ui form error">
            <Field name="title" component={renderInput} label="Enter Title" />
            <Field
                name="description"
                component={renderInput}
                label="Enter Description"
            />
            <button className="ui button primary">Submit</button>
        </form>
    )

    return (
        <Form
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={validate}
            render={render}
        />
    )
}

export default StreamForm

/*
Field is a react component, reduxForm is a function that works similar to the connect 
function

reduxForm() is going to return a function, and we're going to call that function with (StreamCreate)

form: 'streamCreate' is the name of the form

The Field component can be a dropdown or checkbox or radio button or text input, anything 
that solicits input from the user

component={} can either be a react component or a function for Field to call

<input
                onChange={formProps.input.onChange}
                value={formProps.input.value}
            />

we can instead do <input {...formProps.input} /> to access all properties of the input object
or destructure and have {...input} 

At renderInput we are destructuring formProps

The Field element doesnt know what to do with the 'label' prop, so it will instead pass it into the 
renderInput function. thats the reason we destructure label and pass it down.

this.props.handleSubmit handles e.preventDefault. all it needs is the formValues from onSubmit

validate: validate has been reduced to just validate

if the name of the Field matches the property of the title object eg error.title and title in Field component,
redux-form will automatically pass that error msg to renderInput function

add error to form className so semantic ui can display errors

formWrapped is wrapping up reduxForm so the connect funtion below is neater

previous export default: -

const formWrapped = reduxForm({
    form: 'streamForm',
    validate
})(StreamForm)

export default connect(null, { createStream })(formWrapped)

- no need for connect function. StreamCreate will call fetchStream by itself
*/
