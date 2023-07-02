import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from './Main'
import Header from './Header'
import Home from './Home/Home'
import Footer from './Footer'
import Listing from './listing/ListingLogic'
import Details from './Details/DetailsLogic'
import CartDetails from './Cart/CartDisplay'
import PlaceOrder from './Order/PlaceOrder'
import ViewOrder from './Order/ViewOrder'

const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}>
                        <Route index element={<Home/>}/>
                        <Route path="home" element={<Home/>}/>
                        <Route path="listing/:subCatId" element={<Listing/>}/>
                        <Route path="details/:prodId" element={<Details/>}/>
                        <Route path="CartDetails" element={<CartDetails/>}/>
                        <Route path="PlaceOrder/:prodId" element={<PlaceOrder/>}/>
                        <Route path="Orders" element={<ViewOrder/>}/>
                    </Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}
export default Routing