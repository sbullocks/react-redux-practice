import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../actions/counterActions';
import { increment, decrement } from '../reducers/counterReducer';

const Counter = () => {
    // const count = useSelector((state) => state); 
    const count = useSelector((state) => state.Counter); // Need to access the 'Counter' slice

    const dispatch = useDispatch();

    return (
        <div>
            <h2>Counter: {count} </h2>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default Counter;

