import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"

// React・Reduxのサンプルを動かしたい場合
ReactDOM.createRoot(document.getElementById('root')).render( // 強いて言うならReactでUIを構築する上での「どのように」を唯一記述する部分
  <React.StrictMode>
    <App text="aiueo"/>
  </React.StrictMode>,
)


// DOM APIを直接使ったサンプルを動かしたい場合
// let count = 0

// const span = document.createElement("span"); // 「どのように」にあたる部分
// span.innerText = count; // 「何を」にあたる部分

// const button = document.createElement("button"); // 「どのように」
// button.innerText = "+1"; // 「何を」
// button.addEventListener("click", () => { // 「何を」
//   span.innerText = ++count; // 「何を」
// })

// document.getElementById("root").appendChild(span) // 「どのように」
// document.getElementById("root").appendChild(button) // 「どのように」

