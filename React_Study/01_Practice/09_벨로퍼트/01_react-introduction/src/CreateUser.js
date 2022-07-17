import React from "react";

const CreateUser = (props) => {
  return (
    <div>
      <input
      name="username"
      placeholder="유저이름"
      onChange={props.onChange}
      value={props.username}>
      </input>
      <input
      name="email"
      placeholder="이메일"
      onChange={props.onChange}
      value={props.email}>
      </input>
      <button onClick={props.onCreate}>등록</button>
    </div>
  )
}

export default React.memo(CreateUser);