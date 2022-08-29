import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../Compnents/UI/Card'
import AuthContext from '../Storage/authContext';
function Login(){
    const emailinputref=useRef()
    const passwordinputref=useRef()
    const ctx=useContext(AuthContext)
    const histroy =useHistory()
    function formHandler(event){
        event.preventDefault();
        const enteredemail=emailinputref.current.value
        const eneteredpassword=passwordinputref.current.value
        
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDzSMKJ3LdN2ARk80zJafuU0T_aYyqU9Fk',{
            method:'POST',
            body:JSON.stringify({
                email:enteredemail,
                password:eneteredpassword,
                returnSecureToken:true
            }),
            headers:{
                'Content-Type':'application/json'
            }
            }).then(res=>{
            if(res.ok){
                res.json().then(data=>{
                ctx.login(data.idToken)
                histroy.replace('/products')
                })
            }else{
                return res.json().then(data =>{
                let errormessage='please check your mail or password'
                    if(data && data.error && data.error.message){
                    errormessage=data.error.message
                    } 
                    alert(errormessage)
                })
            }
        })
    }
    return(
        <Card>
            <form onSubmit={formHandler}>
                <label>Enter your mail id</label>
                <input type='text' ref={emailinputref} />
                <label>Enter your password</label>
                <input type='text' ref={passwordinputref} />
                <button>Log in</button>
            </form>
        </Card>
    )
}
export default Login