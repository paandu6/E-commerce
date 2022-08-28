import classes from './Products.module.css'
import ProductList from './ProductList'
import Card from '../UI/Card'
import { Link } from 'react-router-dom'
const productsArr = [
    {
    id:1,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
    id:2,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
    id:3,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
    id:4,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',}
]

function Products(){
    const items=productsArr.map((items)=>(
        <li className={classes.item}><Link to={`/products/${items.id}`}>
        <ProductList title={items.title} price={items.price} img={items.imageUrl} id={items.id} />
        </Link>
        </li>
    ))
    return(
        <Card className={classes.section}>
            <div>
                <h1>Products</h1>
            </div>
        <ul className={classes.list}>
            {items}
        </ul>
        </Card>
    )
}
export default Products