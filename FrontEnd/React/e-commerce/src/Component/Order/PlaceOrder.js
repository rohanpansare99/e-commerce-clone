import React,{useState, useEffect} from 'react'
import './PlaceOrder.css'
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
const base_url ="https://e-com-24a3.onrender.com"

const PlaceOrder=()=>{

    let param=useParams();
    let [prodDetails, setProdDetails]=useState();
    let productId=param.prodId;
    let navigate =useNavigate();

    useEffect( () => {
        // sessionStorage.setItem('prodId',productId)
        axios.get(`${base_url}/details/${productId}`)
        .then((res) => {
            setProdDetails(res.data[0])
        })
    },[])
    let name= prodDetails;
// console.log(name)
    const initialValues = {
        //...prodDetails,
        id:Math.floor( Math.random()*100000),
        // rest_name: params.restName,
        //name: "data.name",
        name: "test1",
        //email: 'data.email',
        email: 'test@gmail.com',
        //cost: Math.floor(Math.random()*1000),
        //phone: "data.phone",
        phone: "1234567890",
        
        address: "Hno 23 Sector 15, Navi Mumbai, Asalpa, Maharashtra, 411435",
        cost: sessionStorage.getItem('prodPrice'),
        // product_id: `${prodDetails.product_id}`,
        product_id: productId,
        product :sessionStorage.getItem('prodName'),
        quantity:1,
        // product_name:prodDetails.product_name,
         product_img: sessionStorage.getItem('prodImg') 
        
    };

    const [values, setValues] = useState(initialValues);
        
    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          //...prodDetails,
          [name]: value,
          
        });
    };

    const checkout = () => {
        
        
        fetch(`${base_url}/placeOrder`,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values  )
        })
        .then(navigate(`/Orders`))
    }

    const onChangeQty=(sign) => {
        let qty=values.quantity;
        if (sign === '+') {
            setValues( {...values, "quantity":qty+1})
        } else if (sign === '-') {
        if(qty>1){

            setValues( {...values, "quantity":qty-1})

        }
        console.log(values)
    }
    }
 const RenderDetails=()=>{
 if(prodDetails){
    return(
        <div className=" container-fluid">
        <div className="row">
            <div className="col-md-8 col-sm-8 col-12">
                <div className="products_main_container">
                    <div className=" border border-end-0 border-start-0 border-top-0">
                        
                        <div className="form_input_container pb-3 ">
                        
                            <div className="row heading_section py-2 mx-0">
                                <div className=" col-12 text-white">
                                    Enter Details
                                </div>
                            </div>
                        
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label col-form-label-sm">Name</label>
                                    <input type="Text" className="form-control form-control-sm" name='name' defaultValue={values.name} id="inputname1" onChange={handleInputChange}/>
                                </div>
                                <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label col-form-label-sm">Email</label>
                                <input type="email" className="form-control form-control-sm" name='email' defaultValue={values.email} id="inputEmail4" onChange={handleInputChange}/>
                                </div>
                                
                                <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label col-form-label-sm">Address</label>
                                <input type="text" className="form-control form-control-sm" name='address' defaultValue={values.address} id="inputAddress" placeholder="1234 Main St" onChange={handleInputChange}/>
                                </div>
                                <div className="col-12">
                                <label htmlFor="inputAddress2" className="form-label col-form-label-sm">Mobile Number</label>
                                <input type="text" className="form-control form-control-sm" name='phone' defaultValue={values.phone} id="inputAddress2" placeholder="Apartment, studio, or floor" onChange={handleInputChange}/>
                                </div>
                                
                            
                            </form>
                        
                        </div>
                        
                    
                    </div>
                    <div className="form_input_container ">
                        
                        <div className="row heading_section py-2 mt-3 mx-0">
                            <div className=" col-12 text-white">
                                Order Summary
                            </div>
                        </div>
                    
                    
                    </div>
                    <div className="product_item_container border border-end-0 border-start-0 border-top-0">
                        
                        <div className="row">
                            <div className="ht col-md-3 col-sm-3 col-4">
                                <div className="prod_img img-fluid text-center ">
                                    <img src= {prodDetails.product_img} alt=""/>
                                </div>
                            </div>
                            <div className=" ht col-md-5 col-sm-5 col-5">
                                <div className="prod_details_container">
                                    <div className="">
                                        <div className="prod_heading">
                                        {prodDetails.product_name}
                                        </div>
                                        <div className="prod_subheading">
                                        Seller: {prodDetails.brand[0].brand_name}
                                        </div>
                                    </div>
                                    
                                    <div className="prod_price_container ">
                                        
                                        <div className="price_subhead">
                                            <span className="text-decoration-line-through text-secondary">₹{parseInt(prodDetails.price.replace(/[,]+/g, ''))+ Math.floor(parseInt(prodDetails.price.replace(/[,]+/g, ''))*parseInt(prodDetails.discount.replace(/ ^\D+/g, ''))/100)} </span>
                                            <span className="fs-5">₹{prodDetails.price}</span>
                                            <span className="text-success text-end">{prodDetails.discount}</span>
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
                                <div className="quantity_btn border mx-3 rounded-circle text-center" onClick={()=>{onChangeQty('-')}}>
                                    <i className="fa-solid fa-minus"></i>
                                </div>
                                <div>
                                    <div className="quantity_field text-center border"  >{values.quantity}
                                    </div>
                                </div>
                                <div className="quantity_btn border mx-3 rounded-circle text-center" onClick={()=>{onChangeQty(`+`)}}>
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                                {/* <div className="btn">
                                    Remove
                                </div> */}
                            </div>
                        </div>
                    
                    </div>
                    
                    
                    
                    <div className=" text-end mx-4 pb-4 rounded-0 d-flex justify-content-end align-items-center">
                        <button className="btn place_order_btn align-self-center fw-bold py-2"
                        onClick={checkout}>PLACE ORDER
                        </button>
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
                                <span className="">Price({values.quantity} item)</span>
                                <span className=" ">₹{(values.quantity)*(parseInt(prodDetails.price.replace(/[,]+/g, ''))+ Math.floor(parseInt(prodDetails.price.replace(/[,]+/g, ''))*parseInt(prodDetails.discount.replace(/ ^\D+/g, ''))/100))}</span>
                            </div>
                            <div className="d-flex justify-content-between px-md-2 my-3">
                                <span className="">Discount</span>
                                <span className="text-success  ">-₹{(values.quantity)*Math.floor(parseInt(prodDetails.price.replace(/[,]+/g, ''))*parseInt(prodDetails.discount.replace(/ ^\D+/g, ''))/100)}</span>
                            </div>
                            <div className="d-flex justify-content-between px-md-2 pb-3 border border-end-0 border-start-0 border-top-0">
                                <span className="">Delivery Charges</span>
                                <span className="text-success">Free</span>
                            </div>
                            <div className="fs-6 fw-bold border border-end-0 border-start-0 border-top-0">
                                <div className="d-flex justify-content-between px-md-2 my-3 ">
                                    <span className="">Total Amount</span>
                                    <span className=" ">₹{parseInt(prodDetails.price.replace(/[,]+/g, ''))*values.quantity}</span>
                                </div>
                            </div>
                            <div className="fs-6 fw-bold">
                                <div className="d-flex justify-content-between px-md-2 my-3 ">
                                    <span className="text-start text-success">You will save ₹{Math.floor(parseInt(prodDetails.price.replace(/[,]+/g, ''))*parseInt(prodDetails.discount.replace(/ ^\D+/g, ''))/100)} on this order</span>
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

 }


    return(
        
            <div className="Product_listing_section text-black">
            {RenderDetails()}
            </div>

    )
}

export default PlaceOrder