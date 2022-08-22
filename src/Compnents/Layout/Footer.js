import classes from './Footer.module.css'

function Footer(){
    return(
        <div className={classes.footer}>
            <div>
            <h1>Project-e</h1>
            </div>
            <div>
            <span className={classes.icons}>Youtube</span>
            <span className={classes.icons}>Facebook</span>
            <span className={classes.icons}>WhatsApp</span>
            </div>
        </div>
    )
}
export default Footer