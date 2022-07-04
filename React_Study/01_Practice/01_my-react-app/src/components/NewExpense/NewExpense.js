import NewExpenseForm from "./NewExpenseForm"
import './NewExpense.css'

const NewExpense = (props) => {
  // NewExpenseForm(자식) => NewExpense(부모)로 데이터를 전달받기 위한 핸들러 선언
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    // console.log(expenseData)
    // console.log('this is data from newexpenseform')
    props.onAddExpense(expenseData)
  }
  return (
    <div className="new-expense">
      {/* 자식에서는 onSaveExpenseData를 함수로서 호출 가능 */}
      <NewExpenseForm onSaveExpenseData={saveExpenseHandler}></NewExpenseForm>
    </div>
  )
}

export default NewExpense