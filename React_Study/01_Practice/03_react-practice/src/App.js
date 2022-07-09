import React, {useState} from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';

function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (username, age) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {id: Math.random.toString(), name: username, age: age}]
    })
  }

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </React.Fragment>
  );
}

export default App;
