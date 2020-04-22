import React from 'react'
import styled from 'styled-components'

//this is the individual friend card that renders when you map across the friends array
const Friend = props => {

    //grab our props for easy access
    const {friend, deleteFriend, editFriend} = props

    //this handles our delete and uses deleteFriend from props
    const handleDelete = event => {
        event.preventDefault()
        deleteFriend(friend.id)
    }


    //this handles our age button, allows us to edit a friend by submitting a payload with the age increased by 10
    const handleAge = event => {
        event.preventDefault()
        editFriend(friend.id, {...friend, age: friend.age + 10 })
    }

    //render each friend!
    return (
        <>
            <h2>{friend.name}</h2>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
            <p>Liked? {friend.doyoulikethem}</p>
            <button onClick = {handleDelete}>Delete!</button>
            <button onClick = {handleAge} >Age them!</button>
        </>
    )
    

}

export default Friend