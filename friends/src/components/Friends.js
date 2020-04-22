import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import axios from 'axios'
import Friend from './Friend'
import NewFriend from './NewFriend'

//This will render all of our friends, but you'll only be able to see it if you're logged in!
class Friends extends React.Component {
    
    //state is just our array of friends. It will get updated from the API
    state = {
        friends: []
    }

    //call getData once everything is mounted
    componentDidMount() {
        this.getData();
    }

    //initially get what's in the API
    getData = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                console.log(res)
                this.setState({friends: res.data})
            })
            .catch(err => {
                console.log(err)
            })
    }

    //this will allow us to add a friend based on response from a post request
    addFriend = (res) => {
        this.setState({friends: res.data})
    }

    //this will allow us to delete our friends and then reset based on the API response 
    deleteFriend = (id) => {
        axiosWithAuth()
            .delete(`/api/friends/${id}`)
            .then(res => {
                this.setState({friends: res.data})
            })
            .catch(err => {
                console.log(err)
            })
    }

    //allows you to edit a friend with any payload as long as you know the ID!
    editFriend = (id, payload) => {
        axiosWithAuth()
            .put(`api/friends/${id}`,payload)
            .then(res => {
                this.setState({friends: res.data})
            })
            .catch(err => {
                console.log(err)
            })
    }


    //render the list of friends as well as the form to add a new friend
    render() {
        return (
        <>
            
            <NewFriend addFriend = {this.addFriend}/>
            <h2>Your Friends</h2>
            {this.state.friends.map(friend => {
                return <Friend key = {friend.id} friend = {friend} deleteFriend = {this.deleteFriend} editFriend = {this.editFriend}/>
            })}

            
        </>
        )
    }
}

export default Friends