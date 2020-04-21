import React from 'react'

const Friend = (props) => {

    const {friend} = props
    return (
        <>
            <h2>{friend.name}</h2>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
        </>
    )
    

}

export default Friend