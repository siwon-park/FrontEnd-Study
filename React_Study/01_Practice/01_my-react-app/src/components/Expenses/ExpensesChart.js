import Chart from "../Chart/Chart"

const ExpensesChart = (props) => {
  const chartDataPoints = [
    {label: "Jan", value: 0},
    {label: "Feb", value: 0},
    {label: "Mar", value: 0},
    {label: "Apr", value: 0},
    {label: "May", value: 0},
    {label: "Jun", value: 0},
    {label: "Jul", value: 0},
    {label: "Aug", value: 0},
    {label: "Sep", value: 0},
    {label: "Oct", value: 0},
    {label: "Nov", value: 0},
    {label: "Dec", value: 0}
  ]

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth() // 1월은 0부터 시작하므로 0번 인덱스 접근 가능
    chartDataPoints[expenseMonth].value += expense.amount // 특정 달의 값을 증가시킴
  }

  return (
    <div>
      <Chart dataPoints={chartDataPoints}></Chart>
    </div>
  )

}

export default ExpensesChart