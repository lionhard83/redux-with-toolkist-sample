import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, set } from './store/counter.actions';
import { selectCounter } from './store/counter.selector';

export default function Counter() {
    const dispatch = useDispatch();
    const counter = useSelector(selectCounter);

  return (
      <>
        <div>Counter: {counter}</div>
        <button onClick={() => dispatch(increment(3))}>Incrementa</button>
        <button onClick={() => dispatch(decrement(2))}>Decrementa</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(set(10))}>Set</button>
    </>
  )
}
