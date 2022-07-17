import React, {useCallback, useMemo, useRef, useState} from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';


function App() {
  const name = "React"

  const style = {
    backgroundColor: 'black',
    color: '#61dafb',
    fontSize: 24,
    padding: '1rem,'
  }

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ])

  const nextId = useRef(4)
  const onCreate = useCallback(() => {
    // 배열에 추가하는 로직(push, splice, sort를 사용하려면 값을 새로 만든 후 사용해야함)
    const newUser = {
      id: nextId.current,
      username,
      email
    }

    setUsers([...users, newUser]) // push를 쓰지 않고 spread 연산자를 사용해서 추가 가능

    setInputData({
      username: "",
      email: ""
    })
    nextId.current += 1
  }, [username, email]) // users는 React.memo를 적용했기 때문에 deps에서 빼도 됨

  const [inputData, setInputData] = useState({
    username: "",
    email: "",
  })

  const {username, email} = inputData

  const onChange = useCallback((event) => {
    const {name, value} = event.target
    setInputData({
      ...inputData,
      [name]: value
    })
  }, [inputData])

  const onRemove = useCallback((id) => {
    setUsers(users.filter(user => user.id !== id))
  }, []) // users를 deps에서 빼도 됨

  const onToggle = useCallback((id) => {
    // user.id가 id와 일치하면 user.active를 토글링하여 객체를 집어넣고, 아니면 그대로 넣음
    setUsers(users.map(user => user.id === id ? {...user, active: !user.active} : user))
  }, []) // users를 deps에서 빼도 됨

  const countActiveUsers = (users) => {
    console.log("활성화된 사용자를 세는 중")
    return users.filter(user => user.active).length
  }

  const count = useMemo(() => countActiveUsers(users), [])

  return (
    <Wrapper>
      <Hello name={name} color="red" isSpecial={true}></Hello>
      <Hello color="pink"></Hello>
      <div style={style}>{name}</div>
      <Counter></Counter>
      <InputSample></InputSample>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}></CreateUser>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}></UserList>
      <div>활성화된 사용자 수: {count}</div>
    </Wrapper>
  );
}

export default App;
