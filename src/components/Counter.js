import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, toggleCounter } from "../store/reducers/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(toggleCounter());
  };

  const incrementCounter = () => {
    dispatch(increment());
  };
  const incrementCounterByFive = () => {
    dispatch(increment(5));
  };
  const decrementCounter = () => {
    dispatch(decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={incrementCounterByFive}>Increase by 5</button>
        <button onClick={decrementCounter}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
