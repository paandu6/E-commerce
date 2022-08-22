import Navbar from "./Navbar";
import classes from './Navbar.module.css'


function Header(props){
    return(
        <header>
            <Navbar onClick={props.onClick}/>
        </header>
    )
}
export default Header