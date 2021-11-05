import React, { useEffect } from "react";

function User({ user, onRemove, onToggle, onModify }) {
  useEffect(() => {
    console.log("user값이 설정됨");
    console.log(user);
    return () => {
      console.log("user가 바뀌기전..");
      console.log(user);
    };
  }, [user]);
/*
useEffect
첫번째 파라미터 : 함수
두번째 파라미터: 의존값들어있는 배열(deps)
deps 배열 비우면 컴포넌트 처음 나타날때만 useEffect 등록 함수 호출

함수 반환가능 - cleanup 함수(useEffect에 대해 뒷정리를 해줌), deps 비어있는 경우 
컴포넌트 사라질때 cleanup 호출

deps에 특정값 넣으면
컴포너니트 처음 마운트 될때도 호출, 지정값 바뀔때도 호출
언마운트때도 호출, 값 바뀌기 직전에도 호출

useEffect 안에서 사용하는 상태나, 프롭스가 있다면 useEffect deps안에 넣어주기

deps 파라미터 생략하면, 컴포넌트 리렌더링 될때마다 호출
*/
  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      <span> ({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
      <button onClick={() => onModify(user)}>수정</button>
    </div>
  );
}
function UserList({ users, onRemove, onToggle, onModify }) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
          onModify={onModify}
        />
      ))}
    </div>
  );
}

export default UserList;
