import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import axios from 'axios'

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
            })
            .catch(err => {
                console.log(err)
            })
    }



    render() {
        return (
        <>
            <h2>Your Friends</h2>
            
        </>
        )
    }
}

export default Friends