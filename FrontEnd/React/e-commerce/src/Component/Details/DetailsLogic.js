import React,{useState, useEffect} from 'react';
import './Details.css'
import { useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

const base_url ="https://e-com-24a3.onrender.com"

const Details=()=>{

    let param=useParams();
    let [prodDetails, setProdDetails]=useState();
    let productId=param.prodId;
    let navigate =useNavigate();

    useEffect(() => {
       
        sessionStorage.setItem('prodId',productId)
        axios.get(`${base_url}/details/${productId}`)
        .then((res) => {
            setProdDetails(res.data[0])
        })
    },[])

    // for navigate to buy
    const proceedToBuy=()=>{
        navigate(`/placeOrder/${productId}`)
    }
    // for navigate to add to cart
    const proceedToCart=()=>{
        navigate(`/cartDetails`)
    }



    const renderSpec=(data)=>{
        if(data){
            return data.map((item)=>{
                return (
                    
                        <tr>
                            <th scope="row">{item}</th>
                                                        
                        </tr>
                    
                )
            })
        }

    }

    const renderDetails=()=>{
        if(prodDetails){
            return(
                <div className="container-fluid product_container">
                    <div className="row ">
                        <div className="col-md-5 col-sm-12 col-12">
                            <div className="row">
                                <div className="col-md-12 col-sm-8 col-12">
                                    <div className="product_img text-center border my-2">
                                        <img src={prodDetails.product_img} alt="Product img"/>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-4 col-12 ">
                                    <div className="product_buy_options text-center mb-2 d-flex flex-column justify-content-center align-items-center">
                                        <div className=" align-self-center">
                                            <button className="btn btn_addtocart rounded-0 buy_button text-center text-white py-md-2 py-1"
                                            onClick={proceedToCart}>
                                                <i className="fa-solid fa-cart-shopping mx-2 " style={{color: "#ffffff"}}></i>
                                                ADD TO CART
                                            </button>
                                            <button className="btn btn_buynow rounded-0 buy_button text-center text-white py-md-2 py-1"
                                            onClick={proceedToBuy}>
                                                <i className="fa-sharp fa-solid fa-bolt-lightning mx-2" style={{color: "#ffffff"}}></i>
                                                BUY NOW
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-12 col-12 ">
                            <div className="prod_details_container">
                                <div className="prod_navigations w-lighter ">
                                    Home &gt; <span>{prodDetails.category}</span>&gt; {prodDetails.subcategory[0].subcat_name}&gt; {prodDetails.product_name}
                                </div>
                                
                                <div className="mt-2">
                                    <div className="prod_heading">
                                        {prodDetails.product_name}
                                        
                                    </div>
                                    <div className="prod_subheading mt-1">
                                        <button className="rating btn btn-success py-0 text-white">Hi</button>
                                        {prodDetails.description}
                                    </div>
                                </div>
                                <div className="prod_price_container mt-2 ">
                                    <div className="price_heading ">
                                        <div className="">
                                            <span className="text-success text-end">Extra ₹{ Math.floor(parseInt(prodDetails.price.replace(/[,]+/g, ''))*parseInt(prodDetails.discount.replace(/ ^\D+/g, ''))/100)}  Off</span>

                                        </div>
                                        <div className="mt-1">
                                        <span className="price ">₹{prodDetails.price}</span>

                                        <span className="text-decoration-line-through text-secondary ms-2">₹{parseInt(prodDetails.price.replace(/[,]+/g, ''))+ Math.floor(parseInt(prodDetails.price.replace(/[,]+/g, ''))*parseInt(prodDetails.discount.replace(/ ^\D+/g, ''))/100)} </span>
                                        <span className="text-success text-end ms-2">{prodDetails.discount}</span>
                                        </div>
                                        <div className="">
                                            <span>+ ₹29 Secured Packaging Fee</span>
                                        </div>
                                        {/* <!-- <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt=""> --> */}
                                    </div>
                                    
                                </div>



                                <div className="offers_container mt-3">
                                    <div className="Offer_title fw-bold mt-2 fs-6">Available offers</div>
                                    <div className="offers mt-2">
                                        <span className=""><i className="fa-sharp fa-solid fa-tag text-success me-2"></i><span className="fw-bold">Bank Offer</span>Get 10% Cashback on  Axis bank Credit Card</span>
                                    </div>
                                    <div className="offers mt-2">
                                        <span className=""><i className="fa-sharp fa-solid fa-tag text-success me-2"></i><span className="fw-bold">Bank Offer</span>5% Cashback on Flipkart Axis Bank Card</span>
                                    </div>
                                    <div className="offers mt-2">
                                        <span className=""><i className="fa-sharp fa-solid fa-tag text-success me-2"></i><span className="fw-bold">Special Price</span>Get extra ₹{ Math.floor(parseInt(prodDetails.price.replace(/[,]+/g, ''))*parseInt(prodDetails.discount.replace(/ ^\D+/g, ''))/100)} off (price inclusive of cashback/coupon)</span>
                                    </div>
                                </div>

                                <div className="specs_details mt-4 ">
                                    <div className="heading_spec">
                                        <h5>Product Details</h5>
                                    </div>
                                    <table className="table table-bordered mt-3">
                                            
                                            <tbody>
                                            
                                            {renderSpec(prodDetails.product_details)}
                                            
                                            </tbody>
                                        </table>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    {/* <div className=" simailar_prod_container">
                        <div className="fs-5">You might be interested in</div>
                        <div className="similar_prods_container d-flex justify-content-start mb-3">
                            <div className="similar_item my-3 border py-2  mx-2">
                                <div className="prod_imgs text-center">
                                <img src="https://i.ibb.co/znmLYDH/pocco-c50.webp" alt=""/>
                                </div>
                                <div className="similar_desc mt-3 text-center">
                                    POCO C50 (Royal Blue, 32 GB)  (2 GB RAM)
                                </div>
                            </div>
                            
                            
                        </div>
                    </div> */}
                </div>
            )
        }
    }
    return (
            <section className="product_details_main_container">
                {renderDetails()}
             </section>
    )
}
export default Details