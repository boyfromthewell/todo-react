import React, { useRef, useReducer, useMemo, useCallback } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import useInputs from "./hooks/useInputs";
import produce from "immer";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중...");
  return users.filter((user) => user.active).length;
}
const initialState = {
  inputs: {
    username: "",
    email: "",
  },
  users: [
    {
      id: 1,
      username: "soonyong",
      email: "tnsdyd10@naver.com",
      active: true,
    },
    {
      id: 2,
      username: "seonyuong",
      email: "seonyoung@naver.com",
      active: false,
    },
    {
      id: 3,
      username: "soonwoo",
      email: "tnsdn10@naver.com",
      active: false,
    },
  ],
};
function reducer(state, action) {
  switch (action.type) {
    case "CREATE_USER":
      return produce(state, (draft) => {
        draft.users.push(action.user);
      });
    case "TOGGLE_USER":
      return produce(state, (draft) => {
        const user = draft.users.find((user) => user.id === action.id);
        user.active = !user.active;
      });
    case "REMOVE_USER":
      return produce(state, (draft) => {
        const index = draft.users.findIndex((user) => user.id === action.id);
        draft.users.splice(index, 1);
      });
    default:
      return state;
  }
}
export const userDispatch = React.createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { users } = state;

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <userDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성 사용자수 : {count}</div>
    </userDispatch.Provider>
  );
}

export default App;
/*
useMemo
성능을 최적화할 때 사용한다.
memo는 memorized의 약자이다.
첫번째 인수에는 함수, 두번째 인수에는 배열을 넣어주면 된다.
두번째 인수에 넣어준 배열의 값이 바뀔때만 함수가 실행된다.
그렇지 않다면 이전의 값을 재사용한다.
*/

/*
useReducer : 상태 업데이트 로직 분리

useState와 다르게 컴포넌트 바깥에 작성 & 다른 파일에 작성 후 불러와서 사용

function reducer(state, action) {
// 새로운 상태를 만드는 로직
// const nextState = ...
return nextState;
}
reducer 함수 : 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환
reducer 에서 반환하는 상태는 곧 컴포넌트가 지닐 새로운 상태

action 은 업데이트를 위한 정보 type 값을 지닌 객체 형태로 사용

const [state, dispatch] = useReducer(reducer, initialState);
state 는 우리가 앞으로 컴포넌트에서 사용 할 수 있는 상태
dispatch 는 액션을 발생시키는 함수

useReducer vs useState
useState: 컴포넌트에서 관리하는 값이 단순, 숫자, 문자열 , boolean 값
useReducer: 컴포넌트에서 관리하는 값이 여러개가 되어서 상태의 구조가 복잡
*/
