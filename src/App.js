import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store";

function App() {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);

  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };

  const add = () => {
    dispatch(actions.add(20));
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>

      <button onClick={increment} style={{ marginRight: "10px" }}>
        Increment
      </button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={add}>add 10</button>
    </div>
  );
}

export default App;
