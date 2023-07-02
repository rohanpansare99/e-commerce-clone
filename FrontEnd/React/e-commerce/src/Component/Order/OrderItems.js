import React,{useEffect, useState} from "react";
import './PlaceOrder.css'
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
const base_url ="https://e-com-24a3.onrender.com"



const OrderItems= (props)=>{
   


    let [item, setItem] = useState()
    
   
    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );

    //  useEffect(()=>{
        
    //     axios.get(`${base_url}/details/1`)
    //     .then((res)=>
    //     {setItem(res.data[0])})
    // },[])
    // useEffect(()=>{
    //     const timeout = setTimeout(() => {
    //         // setItem(true)
    //         axios.get(`${base_url}/details`)
    //         .then((res)=>
    //         {setItem(res.data[0])})
            
    //       }, 50000)
      
    //       return () => clearTimeout(timeout)
       
    // },[item])


const itemDetail = async() => {
    await delay(10000);
    const rdata = await axios.get(`${base_url}/details/${props.prod}`);
    setItem(rdata.data)
}


useEffect(() => {
    itemDetail() 
},[])

console.log(props)
console.log(item)
const  DisplayItem=({item})=>{
    delay(10000);

    if(item){
        console.log("hi")
            return(
                <div className="row">
                <div className="ht col-md-3 col-sm-3 col-4" >
                    <div className="prod_img img-fluid text-center ">
                        <img src={item.product_img} alt=""/>
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
                               {/* {item.product_name} */}
                            </div>
                        </div>
                        
                        <div className="prod_price_container ">
                            <div className="qty">Quantity:1</div>
                            <div className="price_subhead">
                                <span className="fs-5">₹30,000</span>
                            </div>
                        </div>
        
        
                    </div>
                </div>
                <div className="ht col-md-4 col-sm-4 col-3 ">
                    <div className="prod_price_container ">
                       
                        <div className=" d-flex  align-items-start  flex-column">
                            <div className="text-black text-end">Delivery by: test1</div>
                            <div className="text-black text-end">Name: test1</div>
                            <div className="text-black text-end">Phone: test1</div>
                            <div className="text-black text-end">Address: test1</div>
                        </div>
                    </div>
                </div>
                
            </div>
            )
        }
        else{
            return(
                <h3> No Data</h3>
            )
        }

    
    
}


const renderData = ({orderData}) => {
    if(orderData){
        return orderData.map((item) => {
            return(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.rest_name}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>Rs. {item.cost}</td>
                    <td>{item.phone}</td>
                </tr>
            )
        })
    }}



    return(
    //    <>
    //    {DisplayItem(props)}
    //    </>
    


    <div className="container">
            <center><h3>Orders</h3></center>
            <table className="table">
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>Rname</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Cost</th>
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

export default OrderItems