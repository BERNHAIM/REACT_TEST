import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement } from '../modules/counter';

const CounterContainer = () => {

    const counter = useSelector(state => state.counter, []);

    const dispatch = useDispatch();
    const incrementCounter = useCallback(
        () => dispatch({ type : 'counter/INCREMENT' }),
        [dispatch]
    );
    const decrementCounter = useCallback(
        () => dispatch({ type : 'counter/DECREMENT' }),
        [dispatch]
    )

    return (
        <Counter number={counter} onIncrease={incrementCounter} onDecrease={decrementCounter} />
    );
};

export default CounterContainer;