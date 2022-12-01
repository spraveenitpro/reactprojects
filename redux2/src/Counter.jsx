import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/counter'

import './App.css'

function Counter() {
    const { count } = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    return (
        // react component to render a counter
        <>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </>
    )
}

export default Counter
