import { useState } from "react";


// ReactではDOMをどのように更新するのかという処理を自分で書かなくていい
// 引数と状態をもとになにを表示するのかを記述していく

export default function CounterWithOnlyReact() {
  const [count, setCount] = useState(0);
  const addOne = () => {
    setCount((prev) => prev + 1);
  };
  const addArbitrary = (val) => {
    setCount((prev) => prev + val);
  };

  const [input, setInput] = useState("0");
  return (
    <div className="container">
      <div>only React</div>
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
