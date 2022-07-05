import {useState} from 'react'
import NewExpenseForm from "./NewExpenseForm"
import './NewExpense.css'

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false)

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  // NewExpenseForm(자식) => NewExpense(부모)로 데이터를 전달받기 위한 핸들러 선언
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
    setIsEditing(false) // 수정 완료 후에 창을 닫기 위해 설정
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && 
      <NewExpenseForm 
      onSaveExpenseData={saveExpenseHandler}
      onCancel={stopEditingHandler}
      ></NewExpenseForm>}
    </div>
  )
}

export default NewExpense