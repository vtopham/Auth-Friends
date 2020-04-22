import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import axios from 'axios'
import Friend from './Friend'
import NewFriend from './NewFriend'

class Friends extends React.Component {
    
    state = {
        friends: []
    }

    componentDidMount() {
        this.getData();
    }

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


    render() {
        return (
        <>
            
            <NewFriend getData = {this.getData}/>
            <h2>Your Friends</h2>
            {this.state.friends.map(friend => {
                return <Friend key = {friend.id} friend = {friend} deleteFriend = {this.deleteFriend} editFriend = {this.editFriend}/>
            })}

            
        </>
        )
    }
}

export default Friends