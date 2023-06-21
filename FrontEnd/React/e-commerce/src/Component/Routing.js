import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from './Main'
import Header from './Header'
import Home from './Home/Home'
import Footer from './Footer'



const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}>
                        <Route index element={<Home/>}/>
                        <Route path="home" element={<Home/>}/>

                    </Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}
export default Routing