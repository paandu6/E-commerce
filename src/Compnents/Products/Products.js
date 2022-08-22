import classes from './Products.module.css'
import Button from '../UI/Button'
const productsArr = [
    {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',}
]

function Products(){
    
    const items=productsArr.map(items=>(
        <li className={classes.item}>{items.title} {items.price}
        <img src={items.imageUrl} />
        <Button />
        </li>
        
    ))
    return(
        <div>
        <ul className={classes.list}>
            {items}
        </ul>
        </div>
    )
}
export default Products