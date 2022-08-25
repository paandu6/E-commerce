import Footer from "../Compnents/Layout/Footer"
import Navbar from "../Compnents/Layout/Navbar"
import CartContextProvider from "../Storage/CartContextProvider"
import HomeBanner from "./HomeBanner"
import HomeContent from "./HomeContent"


function Home(){

    return(
        <CartContextProvider>
        <Navbar />
        <HomeBanner />
        <HomeContent />
        <Footer />
        </CartContextProvider>
    )
}
export default Home