import Navbar from "./Navbar";
import Banner from './Banner'



function Header(props){
    return(
        <header>
            <Navbar onClick={props.onClick}/>  
            <Banner />
        </header>
    )
}
export default Header