import React,{useState} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const base_url ="https://e-com-24a3.onrender.com"

const Header=()=>{
    const [prods, setProds]=useState("")
    const [res, setRes]=useState([])

    const fetchData=(value)=>{
        fetch(`${base_url}/products`, {method:'GET'})
        .then((cate) => cate.json())
        .then((data)=>{
            const result= data.filter((product)=>{
                return(
                    (value &&
                    product &&
                    product.product_name &&
                    product.product_name.toLowerCase().includes(value.toLowerCase()))
                    //  ||
                    // (product.brand[0].brand_name &&
                    //     product.brand[0].brand_name.toLowerCase().includes(value.toLowerCase()))
                )
            })
            console.log(result)
            setRes(result)
            console.log(res)
        } )
    }

    const handleChange=(value)=>{
        setProds(value)
        fetchData(value);

    }
    const DisplaySearchList=()=>{
            
            if(res){
               return res.map((item) => {
                    return(
                        <li className="list-group-item search_item">
                                        {/* <a href="#" className=""> */}
                                        <Link to={`/details/${item.product_id}`}>

                                           {item.product_name}
                                        {/* </a> */}
                                        </Link>
                        </li>      
                                        
                        
                    )
               })
            }
    }
    return(
        <>

            <div className="nav_bar container-fluid background_primary fixed-top ">
                
                <div className="row mx-md-5 mx-sm-3">
                    <div className="col-md-2 col-12 d-flex justify-content-md-end justify-content-sm-between justify-content-between mb-sm-2 mb-2 ">
                        <div className=" d-flex">
                        <button className="more_options bg-transparent fs-4 mx-3 d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            <i className="fa-solid fa-bars" style={{color: "#ffffff"}}></i>
                        </button>
                        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <div className="offcanvas-header background_primary">
                            <h5 className="offcanvas-title " id="offcanvasExampleLabel">User Name</h5>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body ">
                            <div className="text-dark">
                                <i className="fa-solid fa-bolt m-3" style={{color: "#050505"}}></i>
                                Super Coin Zone
                            </div>
                            <div className="text-dark">
                                <i className="fa-sharp fa-regular fa-star m-3" style={{color: "#0c0d0d"}}></i>
                                Ecom Plus Zone
                            </div>
                            <hr/>
                            <div className="text-dark">
                                <i className="fa-sharp fa-regular fa-star m-3" style={{color: "#0c0d0d"}}></i>
                                All Categories
                            </div>
                            
                            </div>
                        </div>
                        <div className="logo_container ">
                            <Link to={`/`}>
                                <div className="logo ">
                                    <img src="https://i.ibb.co/ZBzJ5gQ/flipkart-plus-logo.png" alt=""/>
                                    {/* <img src="https://i.ibb.co/8X727Dv/pngegg.png" alt=""/> */}
                                </div>
                            </Link>
                            <div className="logo_des">
                                <span className="fst-italic text-white">Explore</span>
                                <span className="fst-italic text-warning">Plus</span>
                                <span>
                                <img src="https://i.ibb.co/0KHycfv/plus-logoimg.png" alt=""/>
                                </span>
                            </div>
                        </div>
                        </div>
                        <div className="nav_icons d-md-none  ">
                            <a href="#"><i className="fa-solid fa-square-plus mx-3" style={{color: "#ffffff"}}></i></a>
                            <a href="#"><i className="fa-solid fa-cart-shopping mx-3" style={{color: "#ffffff"}}></i></a>
                            <a href="#"><i className="fa-solid fa-user-check mx-3" style={{color: "#ffffff"}}></i></a>
                        </div>
                    </div>
                    <div className="col-md-5 col-12 bg-light px-0 nav_field">
                        <div className="search_input  d-flex ">
                        <input className="SearchBar form-control border-0 mx-0 " type="search" placeholder="Search for products, brands and more" aria-label="Search"
                         value={prods.product_name} onChange={(e)=> handleChange(e.target.value)}/>
                        <button>
                            <i className="fa-solid fa-magnifying-glass p-2  fs-md-6"  style={{color: "#2874f0"}}></i>      
                        </button>
                        </div>
                        {/* Test for search result */}
                        <div className="search_result_Container">
                                <ul className="list-group search_list">
                                    {DisplaySearchList()}
                                    
                                </ul>
                            </div>

                    </div>
                    <div className="col-md-5 d-none d-md-block nav_field ">
                        <div className="row">
                        <div className="col-md-2 haspopover">
                            <div className=" mt-2">
                            <div className="mx-1">
                            <Link to={`/login`}>
                                <a href="#">
                                {/* <p className='text-white'> Raj
                                    <span className="drop_icon">
                                    <i className="fa-solid fa-angle-down" style={{color: "#ffffff"}}></i>
                                    </span>
                                </p> */}
                                <button className='bg-white btn-white px-5'> Login </button>
                                </a>
                                </Link>
                            </div>
                            {/* <div className="more_popover">
                                <ul className="list-group">
                                <li className="list-group-item">
                                    <a href="#" className="">
                                    <i className="fas fa-user-circle me-1" style={{color: "#2874f0"}}></i>
                                    My Profile
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#" className="">
                                    <i className="fas fa-table me-1" style={{color: "#2874f0"}}></i>
                                    Orders
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#" className="">
                                    <i className="fa-solid fa-power-off me-1" style={{color: "#2874f0"}}></i>                      Logout
                                    </a>
                                </li>
                                </ul>
                            </div> */}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="  mt-2">
                            {/* <a href="#">
                                <div className="mx-1 text-white">
                                Become a Seller
                                </div>
                            </a> */}
                            
                            </div>
                        </div>
                        <div className="col-md-3 haspopover">
                            <div className=" mt-2">
                            <div className="mx-1">
                                <a href="#">
                                <p className='text-white'>More
                                    <span className="drop_icon">
                                    <i className="fa-solid fa-angle-down me-1" style={{color: "#ffffff"}}></i>
                                    </span>
                                </p>
                                </a>
                            </div>
                            <div className="more_popover ">
                                <ul className="list-group">
                                <li className="list-group-item">
                                    <a href="#" className="">
                                    <i className="fas fa-bell me-1" style={{color: "#2874f0"}}></i>
                                    Notifications
                                    </a>
                                </li>
                                </ul>



                            </div>
                            </div>
                        </div>
                        
                        <div className="col-md-3">
                            <div className="  mt-2">
                            <a href="#">
                                <div className=" d-flex">
                                    <div className="">
                                    <i className="fa-solid fa-cart-shopping" style={{color: "#ffffff"}}></i>
                                    </div>
                                    <div className="mx-1 text-white">
                                    Cart
                                    </div>
                                </div>
                            </a>
                            
                            </div>
                        </div>
                    </div>

                    </div>
                </div>

            
            </div>
        </>
    )
}

export default Header