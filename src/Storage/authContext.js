import React, { useState } from "react";

const AuthContext =React.createContext({
        token:'',
        isLoggedin:false,
        login:(token)=>{},
        logout:()=>{}
    
})

export  const AuthContextProvider=(props)=>{

    const [token,setToken]=useState(null)

    let userLoggedIn= !!token
    console.log(token)
    console.log(userLoggedIn)
    function loginHandler(token){
        setToken(token)
    }

    function logoutHandler(){
        setToken(null)
    }
    const ctx={
        token:token,
        isLoggedin:userLoggedIn,
        login:loginHandler,
        logout:logoutHandler
    }
    return(
        <AuthContext.Provider  value={ctx}> {props.children}</AuthContext.Provider>
    )
}

export default AuthContext