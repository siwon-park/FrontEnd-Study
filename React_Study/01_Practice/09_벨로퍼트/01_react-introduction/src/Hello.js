import React from "react";

const Hello = (props) => {
  return (
    <div style={{color: props.color}}>
      {/* JSX에서 null, false, undefined를 렌더링하면 아무것도 나타나지 않는다 */}
      {props.isSpecial ? <b>★</b> : null}
      {!props.isSpecial && <b>△</b>}
      안녕하세요?? {props.name}
    </div>
  )
}

// defaultProps
Hello.defaultProps = {
  name: "이름없음"
}


export default Hello;