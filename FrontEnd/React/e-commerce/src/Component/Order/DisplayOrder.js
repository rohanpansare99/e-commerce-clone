import React,{useEffect, useState} from "react";
import './PlaceOrder.css'
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import OrderItems from './OrderItems'
const base_url ="https://e-com-24a3.onrender.com"



const DisplayOrder= (props)=>{

    let [orders, setOrders] = useState()
    let [item, setItem] = useState()

    useEffect(()=>{
        axios.get(`${base_url}/orders`)
        .then((res)=>
        {setOrders(res.data)})
    },[])

    
    


    const renderData = ({order}) => {
        if(order){
            return order.map((item) => {
                return(
                    
                    <div class="product_item_container border border-end-0 border-start-0 border-top-0">

                    <div class="row">
                                <div class="ht col-md-3 col-sm-3 col-4">
                                    <div class="prod_img img-fluid text-center ">
                                        <img src={item.product_img} alt=""/>
                                    </div>
                                </div>
                                <div class=" ht col-md-5 col-sm-5 col-5">
                                    <div class="prod_details_container">
                                        <div class="">
                                            <div class="prod_heading">
                                                {item.product}
                                            </div>
                                            {/* <div class="prod_subheading">
                                               Seller: MarudharTextile
                                            </div> */}
                                        </div>
                                        
                                        <div class="prod_price_container ">
                                            <div class="qty">Quantity:{item.quantity}</div>
                                            <div class="price_subhead">
                                                <span class="fs-5">₹{item.cost}</span>
                                            </div>
                                        </div>
    
    
                                    </div>
                                </div>
                                <div class="ht col-md-4 col-sm-4 col-3 ">
                                    <div class="prod_price_container ">
                                       
                                        <div class=" ">
                                            <table class="table">
                                                
                                                <tbody>
                                                    <tr>
                                                    <td>Name: {item.name}</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Phone: {item.phone}</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Address:{item.address}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                    </div>
                )
            })
        }}

    return(
       
                            
                            <>
                           {renderData(props)}

                            </>

    )
}

export default DisplayOrder