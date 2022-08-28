import CartButton from './CartButton'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
function Navbar(props){
    return(
        <div>
        <div className={classes.nav}> 
        <ul className={classes.list}>
            <NavLink activeClassName={classes.active} to='home' className={classes.link}>Home</NavLink>
            <NavLink activeClassName={classes.active} to='products' className={classes.link}>Store</NavLink>
            <NavLink activeClassName={classes.active} to='about' className={classes.link}>About</NavLink>
            <NavLink activeClassName={classes.active} to='contactus' className={classes.link}>Contact Us</NavLink>
            
        </ul>
        <CartButton className={classes.list} onClick={props.onClick}/>
        </div>
        
        </div>
        
    )
}
export default Navbar