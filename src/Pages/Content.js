import classes from './HomeContent.module.css'

function Content(props){
    return(
        <li className={classes.items}>
        <span>{props.date}</span>
        <spn>{props.title}</spn>
        <span>{props.description}</span>
        <button>But Tickets</button>
        </li>
    )
}
export default Content