import React, { useEffect } from "react";

const User = React.memo((props) => {
  useEffect(() => {
    console.log('user 값이 설정됨');
    console.log(props.user);
    return () => {
      console.log('user 가 바뀌기 전..');
      console.log(props.user);
    }
  }, [props.user])

  return (
    <div>
      <b
      style={{
        cursor: 'pointer',
        color: props.user.active ? 'green' : 'black'
      }}
      onClick={() => props.onToggle(props.user.id)}
      >
        {props.user.username}
      </b>
      <span>
        | {props.user.email}
      </span>
      <button onClick={() => props.onRemove(props.user.id)}>삭제</button>
    </div>
  )
})

const UserList = (props) => {
  // 배열 반복에서 key가 중요한 이유?
  // 키가 없다면 ["a", "b", "c", "d"] 배열에서 "b"와 "c" 사이에 "z"를 삽입한다 했을 때
  // 기존의 "c"가 "z"로 바뀌고, "d"가 "c"로 바뀌고 최종적으로 "d"를 끝에 삽입하게 됨
  // 삽입이라는 수행작업 하나만 하면 될 것을 여러 번의 다른 작업을 통해 이를 달성하므로 비효율적임
  // 반면 만약에 키가 있다면, 기존값은 그대로 두면서 원하는 곳에 삽입 또는 삭제를 바로 실행함
  return (
    <div>
      {props.users.map((user, index) => (
        <User user={user} key={index} onRemove={props.onRemove} onToggle={props.onToggle}></User>
      ))}
    </div>
  )
}

export default React.memo(UserList);