import classes from './Button.module.css'
function Button(props){
    return(
        <button onClick={props.onClick} className={classes.button}>Add</button>
    )
}
export default Button