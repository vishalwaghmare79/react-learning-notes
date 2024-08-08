import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './action';

function App() {
  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter);
  const islogged = useSelector(state => state.islogged);

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={()=> dispatch(increment(5))}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      {islogged ? <h1>user is logged</h1> : ''}
    </div>
  );
}

export default App;
