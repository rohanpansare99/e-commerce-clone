import React,{useEffect, useState} from 'react'
import './cart.css'
import axios from 'axios';

const base_url ="https://e-com-24a3.onrender.com"




const CartDetails =()=>{

    let [cart, setCart] = useState()
    let [cartItem, setCartItem] = useState()
    useEffect( () => {
        fetch(`${base_url}/cartDetails`, {method:'GET'})
        .then((cart) => cart.json())
        .then((data)=>{
            setCart(data)
        } )
    },[])

    useEffect( () => {
        fetch(`${base_url}/cartDetails`, {method:'GET'})
        .then((cart) => cart.json())
        .then((data)=>{
            setCart(data)
        } )
    },[])


    // products dissplay
    const cartItems=(data)=>{
        if(data){
            return data.map((item)=>{
               
                return(
                    <>
                    </>
                )

                })
        }
        
    }

//console.log(cart)
    return(
      
            <div className="Product_listing_section text-black">
                <div className=" container-fluid">
                    <div className="row">
                        <div className="col-md-8 col-sm-8 col-12">
                            <div className="products_main_container">
                                <div className="product_item_container border border-end-0 border-start-0 border-top-0">
                                    <div className="row">
                                        <div className="ht col-md-3 col-sm-3 col-4">
                                            <div className="prod_img img-fluid text-center ">
                                                <img src="https://i.ibb.co/5n7B68F/vivoT2x.webp" alt=""/>
                                            </div>
                                        </div>
                                        <div className=" ht col-md-5 col-sm-5 col-5">
                                            <div className="prod_details_container">
                                                <div className="">
                                                    <div className="prod_heading">
                                                        vivo T2x 5G (Marine Blue, 128 GB)  (4 GB RAM)
                                                    </div>
                                                    <div className="prod_subheading">
                                                    Seller: MarudharTextile
                                                    </div>
                                                </div>
                                                
                                                <div className="prod_price_container ">
                                                    
                                                    <div className="price_subhead">
                                                        <span className="text-decoration-line-through text-secondary">₹32,000</span>
                                                        <span className="fs-5">₹30,000</span>
                                                        <span className="text-success text-end">12% Off</span>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                        <div className="ht col-md-4 col-sm-4 col-3 ">
                                            <div className="prod_price_container ">
                                            
                                                <div className="">
                                                    <span className="text-black text-end">Delivery by Sat</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="quantity col-12 mx-5 mb-2 d-flex justify-content-start">
                                            <div className="quantity_btn border mx-3 rounded-circle text-center">
                                                <i className="fa-solid fa-minus"></i>
                                            </div>
                                            <div>
                                                <input type="text" className="quantity_field text-center" value="1"/>
                                            </div>
                                            <div className="quantity_btn border mx-3 rounded-circle text-center">
                                                <i className="fa-solid fa-plus"></i>
                                            </div>
                                            <div className="btn">
                                                Remove
                                            </div>
                                        </div>
                                    </div>
                                
                                </div>
                                
                                <div className="product_item_container border border-end-0 border-start-0 border-top-0">
                                    <div className="row">
                                        <div className="ht col-md-3 col-sm-3 col-4">
                                            <div className="prod_img img-fluid text-center ">
                                                <img src="https://i.ibb.co/5n7B68F/vivoT2x.webp" alt=""/>
                                            </div>
                                        </div>
                                        <div className=" ht col-md-5 col-sm-5 col-5">
                                            <div className="prod_details_container">
                                                <div className="">
                                                    <div className="prod_heading">
                                                        vivo T2x 5G (Marine Blue, 128 GB)  (4 GB RAM)
                                                    </div>
                                                    <div className="prod_subheading">
                                                    Seller: MarudharTextile
                                                    </div>
                                                </div>
                                                
                                                <div className="prod_price_container ">
                                                    
                                                    <div className="price_subhead">
                                                        <span className="text-decoration-line-through text-secondary">₹32,000</span>
                                                        <span className="fs-5">₹30,000</span>
                                                        <span className="text-success text-end">12% Off</span>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                        <div className="ht col-md-4 col-sm-4 col-3 ">
                                            <div className="prod_price_container ">
                                            
                                                <div className="">
                                                    <span className="text-black text-end">Delivery by Sat</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="quantity col-12 mx-5 mb-2 d-flex justify-content-start">
                                            <div className="quantity_btn border mx-3 rounded-circle text-center">
                                                <i className="fa-solid fa-minus"></i>
                                            </div>
                                            <div>
                                                <input type="text" className="quantity_field text-center" value="1"/>
                                            </div>
                                            <div className="quantity_btn border mx-3 rounded-circle text-center">
                                                <i className="fa-solid fa-plus"></i>
                                            </div>
                                            <div className="btn">
                                                Remove
                                            </div>
                                        </div>
                                    </div>
                                
                                </div>
                                
                                <div className=" text-end mx-4 pb-4 rounded-0 d-flex justify-content-end align-items-center">
                                    <div className="btn place_order_btn align-self-center fw-bold py-2">PLACE ORDER</div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Amount Details --> */}
                        <div className="col-md-4 col-sm-4 col-12 ">
                            <div className="filter_main_container">
                                <div className=" filter_heading  border border-end-0 border-start-0 border-top-0">
                                    <div className="filter_container m-3 d-flex justify-content-between">
                                        <div className="filter_title px-md-2">
                                            <span className="filter_name filter_1">PRICE DETAILS</span>
                                        </div>
                                        
                                    </div>
                                </div>
                                {/* <!-- price --> */}
                                <div className="border border-end-0 border-start-0 border-top-0">
                                    <div className="filter_container m-3 justify-content-between">
                                        <div className="d-flex justify-content-between px-md-2 my-3">
                                            <span className="">Price(1 item)</span>
                                            <span className=" ">₹30,000</span>
                                        </div>
                                        <div className="d-flex justify-content-between px-md-2 my-3">
                                            <span className="">Discount</span>
                                            <span className="text-success  ">-₹2,000</span>
                                        </div>
                                        <div className="d-flex justify-content-between px-md-2 pb-3 border border-end-0 border-start-0 border-top-0">
                                            <span className="">Delivery Charges</span>
                                            <span className="text-success">Free</span>
                                        </div>
                                        <div className="fs-6 fw-bold border border-end-0 border-start-0 border-top-0">
                                            <div className="d-flex justify-content-between px-md-2 my-3 ">
                                                <span className="">Total Amount</span>
                                                <span className=" ">₹30,000</span>
                                            </div>
                                        </div>
                                        <div className="fs-6 fw-bold">
                                            <div className="d-flex justify-content-between px-md-2 my-3 ">
                                                <span className="text-start text-success">You will save ₹620 on this order</span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
       
    )
}

export default CartDetails