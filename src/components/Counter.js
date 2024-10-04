// src/components/Counter.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../actions/counterActions';
import '../styles.css';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div className="counter-container">
            <h1>Counter App</h1>
            <h2>{count}</h2>
            <button onClick={() => dispatch(increment())} className="btn">Increment</button>
            <button onClick={() => dispatch(decrement())} className="btn">Decrement</button>
            <button onClick={() => dispatch(reset())} className="btn">Reset</button>
        </div>
    );
};

export default Counter;
