import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false, // 기본값을 설정할 경우 Provider를 지정하면 충돌이 남
  onLogout: () => {},
  onLogin: (email, password) => {}
})

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn')
    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true)
    }
  }, [])

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLogin: loginHandler, onLogout: logoutHandler}}>{props.children}</AuthContext.Provider>
  )
}


export default AuthContext

