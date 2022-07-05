import React from 'react'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';


const ExpenseItem = (props) => {
  // 배열 구조 분해할당
  // useState의 첫번째 인자는 값, 두번째 인자는 함수임
  // const [title, setTitle] = useState(props.title) // title이라는 변수명으로 사용 가능
  // const clickHandler = () => {
  //   setTitle('Updated') // setTitle함수를 통해 title값을 업데이트함
  // }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
        {/* <button onClick={() => {console.log('clicked!')}}></button> */}
        {/* <button onClick={clickHandler}>click this</button> */}
      </Card>
    </li>
  )
}

export default ExpenseItem