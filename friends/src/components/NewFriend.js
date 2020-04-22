import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import styled from 'styled-components'


const NewFriendDiv = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    * {
        width: 45%;
    }
    
    width: 100%;
    height: 300px;
    margin: 2%;
    padding: 1%;
    
    background-color: #ffffff;
    background-image: url("/assets/smoke.jpg");
    background-repeat: no-repeat, repeat;
    background-size: 100%;

    color: white;
    // color: black;
    h2 {
        font-size: 48px;
        margin-left: 10%;
    }

    form {
        .new-input {
            margin: 2% 0;
            padding: 1% 0;

            display: flex;
            justify-content: space-between;

            label {
                margin-right: 5%;
            }

            input {
                border: none;
                width: 80px;
                
            }
        }

        button {
            background: none;
            padding: 2% 1%;
            width: 150px;
            height: 30px;
            font-size: 14px;
            border-radius: 5px;
            border: 2px solid white;
            margin-top: 5%;
            color: white;
            font-weight: bold;

            &:hover {
                color: #85beff;
                border: 2px solid #85beff;
            }
            
        }
    }




`
//This is our form for creating a new friend
class NewFriend extends React.Component{
    //state mirrors what is needed in the api call
    state = {
        name: "",
        age: "",
        email: ""
    }
    

    //this will handle form changes and save them in state
    handleChange = event => {
        event.preventDefault()
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    //this will add our new friend to the API
    addFriend = event => {
        event.preventDefault()
        axiosWithAuth()
            .post('/api/friends',this.state)
            .then(res => {
                this.props.addFriend(res)
            })
            .catch(err => {
                console.log(err)
            })

    }

    //render our form to the dom
    render() {
        return (
            <NewFriendDiv>
                <h2>Add A New Friend</h2>
                <form>
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
                    <div className = "new-input last-input">
                        <label htmlFor = "doyoulikethem">Liked? </label>
                        <input onChange = {this.handleChange} type = "text" name = "doyoulikethem" value = {this.state.doyoulikethem}/>
                    </div>
                    <div className = "new-friend-button">
                        <button onClick = {this.addFriend}>Add Friend</button>
                    </div>
                </form>
            </NewFriendDiv>
        )
    }
}

export default NewFriend