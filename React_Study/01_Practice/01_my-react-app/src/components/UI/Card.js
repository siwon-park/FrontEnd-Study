import './Card.css'

//셸 역할을 하는 컴포넌트
function Card(props) {
  const classes = 'card ' + props.className
  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}

export default Card