import classes from './ProductDetails.module.css'
import {useParams } from 'react-router-dom'
import Header from '../Compnents/Layout/Header'
import CartContextProvider from '../Storage/CartContextProvider'
import Card from '../Compnents/UI/Card'
import Footer from '../Compnents/Layout/Footer'
import Button from '../Compnents/UI/Button'
import { useContext } from 'react'
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
function ProductDetails(props){

    const params =useParams()
    const product = productsArr.find(products => products.id == params.productId)
    const img=product.imageUrl
    return(
        <CartContextProvider>
            <Header/>
            <Card>
            <h1 className={classes.title}>Product Details</h1>
            <div className={classes.details}>
            <img src={img} />
            <div>
            <h2>{product.title}</h2>
            <p className={classes.price}> Price : ${product.price}</p>
            <h4>User reviews</h4>
            <p>its a great product</p>
            <p>quality wise its good product and price is also reasonable. worth it.</p>
            <p>poor packagin but quality was good there as some other products also available with price tag but this one looks 
                better when compared with that products.
            </p>
            </div>
            <div>
                <Button />
            </div>
            </div>
            </Card>
            <Footer />
        </CartContextProvider>
    )
}
export default ProductDetails