import Cart from './Cart'
import classes from './Navbar.module.css'
function Navbar(props){
    return(
        <div>
        <div className={classes.nav}> 
        <ul className={classes.list}>
            <li className={classes.link}>Home</li>
            <li className={classes.link}>Store</li>
            <li className={classes.link}>About</li>
        </ul>
        <Cart className={classes.list} />
        </div>
        <div className={classes.banner}>    
        <h1>Project-E</h1>
        </div>
        </div>
        
    )
}
export default Navbar