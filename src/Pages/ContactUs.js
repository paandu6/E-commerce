import { useRef } from 'react'
import Footer from '../Compnents/Layout/Footer'
import Navbar from '../Compnents/Layout/Navbar'
import CartContextProvider from '../Storage/CartContextProvider'
import classes from './Contactus.module.css'
function ContactUs(){

    const enteredname=useRef()
    const enteredmail=useRef()
    const enterednumber=useRef()

    function formSubmitHandler(event){
        const data={
            name:enteredname.current.value,
            mail:enteredmail.current.value,
            phone:enterednumber.current.value
        }
        event.preventDefault()
        fetch('https://ecommerce-a3018-default-rtdb.firebaseio.com/queries.json',{
            method:'POST',
            body:JSON.stringify(data)
        })
    }

    return(
        <CartContextProvider>
            <div>
            <Navbar />

            </div>
        <div className={classes.formdiv}>
            <form onSubmit={formSubmitHandler}>
                <h1>Contact US</h1>
                <p>Please share your feedback or you can also report issues we are always here to help you.</p>
                <div className={classes.fields}>
                    <div className={classes.label}>
                        <label>Name</label>
                    </div>
                    <div className={classes.input}>
                        <input type='text' ref={enteredname} />
                    </div>
                </div>
                <div className={classes.fields}>
                    <div className={classes.label}>
                        <label>Email</label>
                    </div>
                    <div className={classes.input}>
                        <input type='text' ref={enteredmail} />
                    </div>
                </div>
                <div className={classes.fields}>
                    <div className={classes.label}>
                        <label>Phone Number</label>
                    </div>
                    <div className={classes.input}>
                        <input type='number' ref={enterednumber} />
                    </div>
                </div>
                <button>Submit</button>
            </form>
        </div>
        <Footer />
        </CartContextProvider>
    )
}
export default ContactUs