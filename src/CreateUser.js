import React from "react";

function CreateUser({ username, email, onChange, onCreate, onUpdate }) {
  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
      <button onClick={onUpdate}>Update</button>
    </div>
  );
}

export default CreateUser;