const frame = document.querySelector('#frame')
const card = document.querySelector('#card')
const light = document.querySelector('#light')

let { x, y, width, height } = frame.getBoundingClientRect()

function mouseMove(e) {
  const left = e.clientX - x
  const top = e.clientY - y
  const centerX = left - width/2
  const centerY = top - height/2
  const d = Math.sqrt(centerX**2 + centerY**2)
  // card의 style의 transform 속성에 부여?
  // rotate3d(수평축 기준 회전, 수직축 기준 회전, z축 기준 회전, 각도)
  card.style.transform = `rotate3d(${-centerY/100}, ${centerX/100}, 0, ${d/10}deg)`
  // 그림자 설정(box-shadow속성에 -를 쓸 수 없으니 카멜케이스로 쓰는 듯)
  card.style.boxShadow = `${-centerX/10}px ${-centerY/10}px 10px rgba(0, 0, 0, 0.1)`


  // light에 대해 스타일 지정
  light.style.backgroundImage = `radial-gradient(circle at ${left}px ${top}px, #00000010, #ffffff00, #ffffff70)`
}

// mouseEnter이벤트 지정
frame.addEventListener('mouseenter', () => {
  frame.addEventListener('mousemove', mouseMove)
})

// mouseLeave이벤트 지정
frame.addEventListener('mouseleave', () => {
  // 마우스를 뗐을 때 원위치로 복구
  frame.removeEventListener('mousemove', mouseMove)
  card.style.boxShadow = ''
  card.style.transform = ''
  light.style.backgroundImage = ''
})

window.addEventListener('resize', () => {
  rect = frame.getBoundingClientRect()
  x = rect.x
  y = rect.y
})
