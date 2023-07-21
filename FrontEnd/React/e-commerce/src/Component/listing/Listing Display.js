import React from "react";
import Listing from "./ListingLogic";
import { Link } from "react-router-dom";

const ListingDispl =(props) =>{

    const renderOffers=(data)=>{
        if(data){
            return data.map((item)=>{
                return(
                    <li key={item.offer_id}><p>{item.offer_name}
                        </p></li>
                )
            })
        }

    }
    const renderData = ({listData}) => {
        if(listData){
            if(listData.length > 0){
                return listData.map((item) => {
                    return(
                        <div className="product_item_container border border-end-0 border-start-0 border-top-0" key={item._id}>
                            {/* <Link to={`/details/${item.product_id}`}> */}
                            
                                    <div className="row">
                                        <div className="ht col-md-3 col-sm-3 col-4 d-flex justify-content-center align-items-md-top">
                                            <div className="prod_img img-fluid text-center ">
                                                <img src={item.product_img} alt=""/>
                                            </div>
                                        </div>
                                        <div className=" ht col-md-9 col-sm-9 col-8">
                                            <div className="row">
                                                <div className=" ht col-md-8 col-sm-8 col-12">
                                                    <div className="prod_details_container">
                                                        <div className="">
                                                            <Link to={`/details/${item.product_id}`}>

                                                                <div className="prod_heading text-dark">
                                                                    {item.product_name}
                                                                </div>
                                                            </Link>
                                                            <div className="prod_subheading">
                                                                <div className="rating btn btn-success py-0 text-white">
                                                                {item.ratings} <i class="fa fa-star"></i>
                                                                </div>
                                                                {item.description}
                                                            </div>
                                                        </div>
                                                        <div className=" prod_specs">
                                                            <ul>
                                                                <li><p>{item.brand[0].brand_name}</p></li>
                                                                {renderOffers(item.offer)}
                                                                {/* <li><p>128 GB ROM</p></li>
                                                                <li><p>128 GB ROM</p></li> */}
                                                                
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ht col-md-4 col-sm-4 col-12 ">
                                                    <div className="prod_price_container ">
                                                        <div className="price_heading ">
                                                            <span className="price text-dark">₹{item.price}</span>
                                                            {/* <!-- <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt=""> --> */}
                                                        </div>
                                                        <div className="price_subhead">
                                                            <span className="text-decoration-line-through text-secondary">₹{parseInt(item.price.replace(/[,]+/g, ''))+ Math.floor(parseInt(item.price.replace(/[,]+/g, ''))*parseInt(item.discount.replace(/ ^\D+/g, ''))/100)} </span>
                                                            {/* <span className="text-decoration-line-through text-secondary">₹{parseInt(item.price.replace(/[,]+/g, ''))}</span> */}
                                                            <span className="text-success text-end">{item.discount}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            {/* </Link> */}

                            </div>
                                        )
                                    })
                                }else{
                                    return(
                                        <h2 className="text-dark">No Data Found</h2>
                                    )
                                }
                            }else{
                                return(
                                    <div>
                                        <h2>Loading</h2>
                                        {/* <img src="/images/loader.gif" alt="loader"/> */}
                                        <div className="d-flex justify-content-center align-items-center">
                    <div className="spinner-border text-dark" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    </div>
                </div>
            )
        }
    }





    return (
        <>
            {renderData(props)}
        </>
    )
}

export default ListingDispl