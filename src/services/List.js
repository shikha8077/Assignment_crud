import React from 'react'

function List() {
    return (fetch('http://localhost:8000/users')
    .then(data => data.json())
    )
}

export default List
