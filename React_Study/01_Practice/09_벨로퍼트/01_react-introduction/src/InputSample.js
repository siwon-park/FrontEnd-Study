import React, { useState, useRef } from "react";

const InputSample = () => {
  const [inputData, setInputData] = useState({
    name: '',
    nickname: '',
  })

  const {name, nickname} = inputData // 구조분해 할당을 통해 name, nickname 변수 선언

  const inputChangeHandler = (event) => {
    const {value, name} = event.target // event.target에서 value와 name을 뽑아냄
    setInputData({
      ...inputData, // 기존에 inputData에 있는 내용을 복사한 뒤
      [name]: value // name 변수를 키로 가진 값을 value로 설정함
    })
    // 이런식으로 복사를 해서 새로운 객체를 만드는 이유는 불변성을 지켜주어 리액트 컴포넌트에서 변화가 발생했을 경우
    // 이를 감지하여 재렌더링하는 것임
  }

  const nameInput = useRef() // useRef를 활용해 특정 DOM을 선택함

  const resetInputHandler = () => {
    setInputData({
      name: "",
      nickname: ""
    })
    nameInput.current.focus()
  }

  return (
    <div>
      {/* 여러 개의 인풋을 관리하기 위해선 인풋 태그에 name 속성이 반드시 필요함 */}
      <input name="name" placeholder="이름" value={name} onChange={inputChangeHandler} ref={nameInput}></input>
      <input name="nickname" placeholder="나이" value={nickname} onChange={inputChangeHandler}></input>
      <button onClick={resetInputHandler}>초기화</button>
      <div>
        <b>값: </b>
        {name} {nickname}
      </div>
    </div>
  )
}

export default InputSample;