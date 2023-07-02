import React,{useEffect, useState} from "react";
import './PlaceOrder.css'
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import DisplayOrder from './DisplayOrder'
const base_url ="https://e-com-24a3.onrender.com"



const ViewOrder= ()=>{

    let [orders, setOrders] = useState()

    useEffect(()=>{
        axios.get(`${base_url}/orders`)
        .then((res)=>
        {setOrders(res.data)})
    },[])


    return(
        <div className="Product_listing_section text-black">
        <div className=" container-fluid">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-12">
                    <div className="products_main_container">
                        
                        <div className="form_input_container px-0">
                            
                            <div className="row heading_section py-2 mt-3 ">
                                <div className=" col-12 text-white">
                                    Order Details
                                </div>
                            </div>
                           
                        
                        </div>
                        <DisplayOrder order={orders} />
                    </div>
                </div>
                
            </div>
        </div>
      </div>
    )
}

export default ViewOrder