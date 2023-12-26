import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import { useState } from "react";
import counterReducer from "../reducers/counterReducer";
import { actionCreator as counterActionCreator } from "../actions/counterActions";

// Redux Toolkitが推奨されているのでエディタの設定によっては打ち消し線がついてるかも
const store = createStore(counterReducer);

// コンポーネントにpropsを通じてstore内の状態を渡す
const mapStateToProps = (state) => ({ count: state.count });
// 状態の更新用の関数を渡す
const mapDispatchToProps = (dispatch) => ({
  addOne: () => dispatch(counterActionCreator.add()),
  addArbitrary: (val) => dispatch(counterActionCreator.addArbitrary(val)),
});

function Counter({ count, addOne, addArbitrary }) {
  const [input, setInput] = useState("0");
  return (
    <div className="container">
      <div>with Redux</div>
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

// ReactとReduxの橋渡し
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

// Providerの子コンポーネント内でのみstoreを利用可能。
// withReduxToolkitのなかでもProviderを使っているがこことは別のstoreが使われる。

export default function CounterWithRedux() {
  return (
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  );
}
