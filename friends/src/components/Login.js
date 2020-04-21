import React from 'react'
import axios from 'axios'

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    }

    handleChange = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        })
    }

    login = event => {
        event.preventDefault()
        axios
            .post('http://localhost:5000/api/login', this.state.credentials)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        

    }

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