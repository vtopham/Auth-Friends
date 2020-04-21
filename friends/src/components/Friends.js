import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import axios from 'axios'
import Friend from './Friend'

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
                this.setState({friends: res.data})
            })
            .catch(err => {
                console.log(err)
            })
    }



    render() {
        return (
        <>
            <h2>Your Friends</h2>
            {this.state.friends.map(friend => {
                return <Friend key = {friend.id} friend = {friend} />
            })}

            
        </>
        )
    }
}

export default Friends