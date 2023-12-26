import { Provider, connect } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { useState } from "react";
import counterSlice from "../slices/counterSlice";

const store = configureStore({
  reducer: counterSlice.reducer,
});

const mapStateToProps = (state) => ({ count: state.count });
const mapDispatchToProps = (dispatch) => ({
  addOne: () => dispatch(counterSlice.actions.add()),
  addArbitrary: (val) => dispatch(counterSlice.actions.addArbitrary(val)),
});

function Counter({ count, addOne, addArbitrary }) {
  const [input, setInput] = useState("0");
  return (
    <div className="container">
      <div>with Redux Toolkit</div>
      <div>{count}</div>
      <div>
        <button onClick={addOne}>+1</button>
      </div>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => addArbitrary(parseInt(input))}>Submit</button>
      </div>
    </div>
  );
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default function CounterWithReduxToolkit() {
  return (
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  );
}
