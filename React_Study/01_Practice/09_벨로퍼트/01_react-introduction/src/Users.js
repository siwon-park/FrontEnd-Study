// axios api 요청을 위한 Users.js
import React from "react";
import axios from "axios";
import useAsync from "./useAsync";

// function reducer(state, action) {
//   switch (action.type) {
//     case 'LOADING':
//       return {
//         loading: true,
//         data: null,
//         error: null,
//       }
    
//     case 'SUCCESS':
//       return {
//         loading: false,
//         data: action.data,
//         error: null,
//       }
    
//     case 'ERROR':
//       return {
//         loading: false,
//         data: null,
//         error: action.error,
//       }
//     default:
//       throw new Error(`Unhandled action type: ${action.type}`)
//   }
// }

async function getUsers() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  return response.data
}

const Users = () => {
  const [state, refetch] = useAsync(getUsers, [], true)

  const { loading, data: users, error } = state // data: users의 의미: state.data를 users 키워드로 조회한다는 의미
  
  // async function fetchUsers() {
  //   dispatch({ type: 'LOADING'})
  //   try {
  //     const response = await axios.get(
  //       'https://jsonplaceholder.typicode.com/users'
  //     )
  //     dispatch({ type: 'SUCCESS', data: response.data})
  //     setUsers(response.data)
  //   } catch (error) {
  //     dispatch({type: 'ERROR', error: error})
  //   }
  // }

  // useEffect(() => {
  //   fetchUsers()
  // }, [])

  

  if (loading) return (
    <div>로딩중...</div>
  )
  if (error) return (
    <div>에러가 발생했습니다</div>
  )
  if (!users) return (
    <button onClick={refetch}>불러오기</button>
  )

  return (
    <React.Fragment>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={refetch}>다시 불러오기</button>
    </React.Fragment>
  )
}

export default Users;