import React, {useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css"

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [hasError, setHasError] = useState()

  const addUserHandler = (event) => {
    event.preventDefault()
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setHasError({
        title: 'Invalid Input',
        message: 'Please Enter a valid name and age'
      })
      return
    }
    if (+enteredAge < 1) {
      setHasError({
        title: 'Invalid Age',
        message: 'Please Enter a valid age ( > 0)'
      })
      return
    }
    props.onAddUser(enteredUsername, enteredAge)
    setEnteredUsername('')
    setEnteredAge('')
  }

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  const errorHandler = () => {
    setHasError(null)
  }
  
  return (
    <div>
      {hasError && <ErrorModal title={hasError.title} message={hasError.message} onConfirm={errorHandler}></ErrorModal>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <lable htmlFor="username">Username</lable>
          <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
          <lable htmlFor="age">Age</lable>
          <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser