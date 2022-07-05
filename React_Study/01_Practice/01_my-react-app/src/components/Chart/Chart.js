import './Chart.css'
import ChartBar from './ChartBar'


const Chart = (props) => {
  // totalMaximum 값을 얻기 위해 값만 존재하는 배열을 얻은 다음 max값을 구함
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value)
  const totalMaximum = Math.max(...dataPointValues)

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => 
      <ChartBar
      key={dataPoint.label}
      value={dataPoint.value} 
      maxValue={totalMaximum} 
      label={dataPoint.label}></ChartBar>
      )}
    </div>
  )
}

export default Chart