import React from 'react'

const Friend = (props) => {



    const {friend, deleteFriend, editFriend} = props

    const handleDelete = event => {
        event.preventDefault()
        deleteFriend(friend.id)
    }
    
    const handleAge = event => {
        event.preventDefault()
        editFriend(friend.id, {...friend, age: friend.age + 10 })
    }
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