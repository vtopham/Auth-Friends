import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

class NewFriend extends React.Component{
    
        state = {
            name: "",
            age: "",
            email: ""
        }
    

    handleChange = event => {
        event.preventDefault()
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    addFriend = event => {
        event.preventDefault()
        axiosWithAuth()
            .post('/api/friends',this.state)
            .then(res => {
                this.props.getData()
            })
            .catch(err => {
                console.log(err)
            })

    }

    render() {
        return (
            <>
                <h2>Add A New Friend</h2>
                <div className = "new-input">
                    <label htmlFor = "name">Name: </label>
                    <input onChange = {this.handleChange} type = "text" name = "name" value = {this.state.name}/>
                </div>
                <div className = "new-input">
                    <label htmlFor = "age">Age: </label>
                    <input onChange = {this.handleChange} type = "text" name = "age" value = {this.state.age}/>
                </div>
                <div className = "new-input">
                    <label htmlFor = "email">Email: </label>
                    <input onChange = {this.handleChange} type = "text" name = "email" value = {this.state.email}/>
                </div>
                <div className = "new-input">
                    <label htmlFor = "doyoulikethem">Liked? </label>
                    <input onChange = {this.handleChange} type = "text" name = "doyoulikethem" value = {this.state.doyoulikethem}/>
                </div>
                <div className = "new-friend-button">
                    <button onClick = {this.addFriend}>Add Friend</button>
                </div>
            </>
        )
    }
}

export default NewFriend