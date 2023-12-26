import CounterWithOnlyReact from "./components/onlyReact";
import CounterWithRedux from "./components/withRedux";
import CounterWithReduxToolkit from "./components/withReduxToolkit";

// 自分で定義したコンポーネントを他のコンポーネントから呼び出すことができる。
export default function App() {
  return (
    <>
      <CounterWithOnlyReact />
      <CounterWithRedux />
      <CounterWithReduxToolkit />
    </>
  );
}
