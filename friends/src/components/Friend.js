import React from 'react'
import styled from 'styled-components'


const FriendCard = styled.div`
    
    width: 25%;
    margin: 2% 0%;
    padding: 1% 2%;
    
    border-radius: 5px;
    border: 2px solid #FEC0E9;
    color: #FEC0E9;

    button {
        color: #FEC0E9;
        margin: 2%;
        border: 1px solid #FEC0E9;
        border-radius: 5px;
        height: 30px;
        width: 80px;

        &:hover {
            background: #FEC0E9;
            color: white;
        }
    }

    .buttons {
        
        display: flex;
        justify-content: space-around;

    }


`

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
        <FriendCard>
            <h2>{friend.name}</h2>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
            <p>Liked? {friend.doyoulikethem}</p>
            <div className = "buttons">
                <button onClick = {handleDelete}>Delete!</button>
                <button onClick = {handleAge} >Age them!</button>
            </div>
            
        </FriendCard>
    )
    

}

export default Friend