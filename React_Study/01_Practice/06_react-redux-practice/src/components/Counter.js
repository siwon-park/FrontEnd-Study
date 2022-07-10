import { useSelector, useDispatch } from 'react-redux'

import { counterActions } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  // useSelector를 쓰면 자동으로 subscription을 지정해줌
  const counter = useSelector(state => state.counter)
  const toggle = useSelector(state => state.showCounter)

  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(5)) // 5는 payload 속성으로 전달됨 => {type: 'UNIQUE_IDENTIFIER', payload: 5}
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>+ Increment</button>
        <button onClick={increaseHandler}>+5 Increment by 5</button>
        <button onClick={decrementHandler}>- Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
