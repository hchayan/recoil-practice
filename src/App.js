import { useRecoilState } from "recoil"
import { counterState, thousandWonState } from "./modules/counterRecoil"

function App() {
  // 3. 컴포넌트가 atom 읽고 쓰게 하기 위해서 userRecoilState를 사용한다
  const [counter, setCounter] = useRecoilState(counterState)

  // 5. selector의 state도 동일하게 사용되지만, 쓰기는 안되기 때문(순수함수의 형태)에 변수 하나로만 받는다
  const money = useRecoilState(thousandWonState)

  const increase = () => {
    setCounter(counter + 1)
  }

  const decrease = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <h2>{counter}</h2>
      <h4>{money}</h4>
      <div>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
      </div>
    </>
  )
}

export default App
