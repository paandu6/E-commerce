import { Fragment } from "react";
import classes from './HomeBanner.module.css'

function HomeBanner(){
    return(
        <Fragment>
            <div className={classes.banner}>
                <h1>Ecommerce-1</h1>
                <div className={classes.bannerbutton}>
                <button>Get Latest Updates</button>
                </div>
            </div>
        </Fragment>
    )
}
export default HomeBanner