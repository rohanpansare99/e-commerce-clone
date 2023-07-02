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

    
    const Order=({order})=>{
        if(order){
            return order.map((item)=>{
                return(
                    <div className="product_item_container border border-end-0 border-start-0 border-top-0">
                            
                    <OrderItems prod={item.product_id}/>
                   
                </div> 

                )
            })
        }
    }


    const renderData = ({order}) => {
        if(order){
            return order.map((item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.product_id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        {/* <td>Rs. {item.cost}</td> */}
                        <td>{item.phone}</td>
                    </tr>
                )
            })
        }}

    return(
        // <>
        
        // {Order(props)}

        //  </>


        <div className="container">
            <center><h3>Orders</h3></center>
            <table className="table">
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>ProductId</th>
                        <th>Name</th>
                        <th>Email</th>
                        {/* <th>Cost</th> */}
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {renderData(props)}
                </tbody>
            </table>
        </div>

    )
}

export default DisplayOrder