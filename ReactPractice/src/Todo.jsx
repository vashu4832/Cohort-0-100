import React from 'react'

function Todo({title, desc}) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    )
}

export default Todo