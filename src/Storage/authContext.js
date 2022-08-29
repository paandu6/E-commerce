import React, { useState } from "react";

const AuthContext =React.createContext(()=>{
    return({
        isLoggedin:false,
        login:()=>{},
        logout:()=>{}
    })
})

export  const AuthContextProvider=(props)=>{
    const [token,setToken]=useState(null)

    let loggedin= !! token

    function loginHandler(token){
        setToken(token)
        localStorage.setItem('token',token)
    }

    function logoutHandler(){
        setToken(null)
        localStorage.removeItem('token')
    }
    const ctx={
        isLoggedin:loggedin,
        login:loginHandler,
        logout:logoutHandler
    }
    return(
        <AuthContext.Provider  value={ctx}>{props.children}</AuthContext.Provider>
    )
}

export default AuthContext