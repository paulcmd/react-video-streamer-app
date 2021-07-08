import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {
    renderInput({ input, label }) {
        console.log(input)
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
            </div>
        )
    }

    render() {
        console.log(this.props)
        return (
            <form>
                <Field
                    name="title"
                    component={this.renderInput}
                    label="Enter a Title"
                />

                <Field
                    name="description"
                    component={this.renderInput}
                    label="Enter a description"
                />
            </form>
        )
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate)

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

The Field element doesnt know what to do with the 'label' prop, so it will instead pass it into the 
renderInput function. thats the reason we destructure label and pass it down.
*/
