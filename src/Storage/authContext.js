import React, { useState } from "react";

const AuthContext =React.createContext({
        token:'',
        isLoggedin:false,
        login:(token)=>{},
        logout:()=>{}
    
})

export  const AuthContextProvider=(props)=>{
    const intitaltoken=localStorage.getItem('token')
    const [token,setToken]=useState(null)

    let userLoggedIn= !!token
    console.log(token)
    function loginHandler(token){
        setToken(token)
        localStorage.setItem('token',token)
    }

    function logoutHandler(){
        setToken(null)
    }
    const ctx={
        token:token,
        isLoggedin:true,
        login:loginHandler,
        logout:logoutHandler
    }
    return(
        <AuthContext.Provider  value={ctx}> {props.children}</AuthContext.Provider>
    )
}

export default AuthContext