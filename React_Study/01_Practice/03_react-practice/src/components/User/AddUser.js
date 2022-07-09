import React, {useState, useRef} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import classes from "./AddUser.module.css"

const AddUser = (props) => {
  const nameInputRef = useRef()
  const ageInputRef = useRef()
  // const [enteredUsername, setEnteredUsername] = useState('')
  // const [enteredAge, setEnteredAge] = useState('')
  const [hasError, setHasError] = useState()

  const addUserHandler = (event) => {
    event.preventDefault()
    const enteredUsername = nameInputRef.current.value
    const enteredAge = ageInputRef.current.value
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
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
    // setEnteredUsername('')
    // setEnteredAge('')
  }

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value)
  // }

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value)
  // }

  const errorHandler = () => {
    setHasError(null)
  }
  
  return (
    <Wrapper>
      {hasError && <ErrorModal title={hasError.title} message={hasError.message} onConfirm={errorHandler}></ErrorModal>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef}/>
          <label htmlFor="age">Age</label>
          <input id="age" type="number" ref={ageInputRef}/>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  )
}

export default AddUser