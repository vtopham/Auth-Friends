import React from 'react'

const Friend = (props) => {



    const {friend, deleteFriend} = props

    const handleDelete = event => {
        event.preventDefault()
        deleteFriend(friend.id)
    }
    return (
        <>
            <h2>{friend.name}</h2>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
            <button onClick = {handleDelete}>Delete!</button>
        </>
    )
    

}

export default Friend