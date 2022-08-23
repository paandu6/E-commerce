import Navbar from "./Navbar";



function Header(props){
    return(
        <header>
            <Navbar onClick={props.onClick}/>
        </header>
    )
}
export default Header