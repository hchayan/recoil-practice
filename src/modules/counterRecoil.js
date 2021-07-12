// recoil은 정형화된 방법이 없다

import { atom, selector } from "recoil"

// 2. atom은 상태(state)의 일부를 나타낸다
// 어떤 컴포넌트에서든 atom을 읽고 쓸 수 있다.
// atom 값을 읽는 컴포넌트들은 암묵적으로 atom을 구독한다 (변화시 자동 재랜더링)
export const counterState = atom({
  key: "counterState", // 유니크 키값 - selector(선택자)로 사용된다
  default: 0, // 기본값 (초기값)
})

// 4. selector는 '파생된 상태(=상태의 변화)' 의 일부
// 즉, 파생된 상태를 어떤 방법으로든 주어진 상태를 수정하는 순수 함수에 전달된 상태의 결과물로 생각할 수 있다.
// 쉽게말해서, 어떤 state(atom의) 를 가지고 수정되는 결과물 - 굳이 필요한지는 모르겠다
export const thousandWonState = selector({
  key: "thousandWonState", // 유니크 키값
  get: ({ get }) => {
    const amount = get(counterState)

    return String(amount * 1000) + "원"
  },
})
