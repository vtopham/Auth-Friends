import React from 'react'
import axios from 'axios'

//This is the login page, which we'll default to if the user isn't logged in
class Login extends React.Component {

    //state shape mirrors what the API needs for the post request
    state = {
        credentials: {
            username: "",
            password: ""
        }
    }

    //handle form changes to save them in state
    handleChange = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        })
    }

    //handle the login with a post request
    login = event => {
        event.preventDefault()
        axios
            .post('http://localhost:5000/api/login', this.state.credentials)
            .then(res => {
                //res.data.payload is the token, we'll set it to local storage to access whenever we make an api call (see axiosWithAuth)
                localStorage.setItem("token",res.data.payload)
                this.props.history.push("/friends")
            })
            .catch(err => {
                console.log(err)
            })
        

    }

    //render the login page
    render () {
        return (
        <>
            <div className = "input-value">
                <label htmlFor = "username" id = "username">Username: </label>
                <input 
                    onChange = {this.handleChange} 
                    type = "text" 
                    name = "username" 
                    value = {this.state.credentials.username}/>
            </div>
            <div className = "input-value">
                <label htmlFor = "password" id = "password">Password: </label>
                <input 
                    onChange = {this.handleChange} 
                    type = "password" 
                    name = "password" 
                    value = {this.state.credentials.password}/>
            </div>
            <div className = "button">
                <button onClick = {this.login}>Login</button>
            </div>

        </>
    )
    }
}

export default Login