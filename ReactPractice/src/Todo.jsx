import React, { useState } from 'react'

function Todo() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count+1)}>Increase Counter {count}</button>
        </div>
    )
}

export default Todo