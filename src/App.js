import React, { useRef, useState } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    id:""
  });

  const { username, email, id } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "soonyong",
      email: "tnsdyd10@naver.com",
      active: true,
    },
    {
      id: 2,
      username: "seonyoung",
      email: "seonyoung@naver.com",
      active: false,
    },
    {
      id: 3,
      username: "soonwoo",
      email: "tnsdn10@naver.com",
      active: false,
    },
  ]);
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers(users.concat(user));
    //
    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };
  const onModify = (user) => {
    setInputs({
      username: user.username,
      email: user.email,
      id: user.id,
    });
  };
  const onUpdate = () => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, username: username, email: email } : user
      )
    );
    setInputs({
      username: "",
      email: "",
      id: "",
    });
  };
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
        onUpdate={onUpdate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} onModify={onModify} />
    </>
  );
}

export default App;
