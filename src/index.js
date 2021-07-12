import React from "react"
import ReactDOM from "react-dom"
import { RecoilRoot } from "recoil"

import App from "./App"

ReactDOM.render(
  <React.StrictMode>
    {/* 1. 리코일 상태를 사용하기 위해서 부모 트리 어딘가에 RecoilRoot가 필수 */}
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
)
