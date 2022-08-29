import classes from './Products.module.css'
import ProductList from './ProductList'
import Card from '../UI/Card'
import { useContext } from 'react'
import CartContext from '../../Storage/cartContext'

function Products(){
    const ctx =useContext(CartContext)
    const items=ctx.productsArr.map((items)=>(
        <li className={classes.item}>
        <ProductList title={items.title} price={items.price} img={items.imageUrl} id={items.id}/>
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