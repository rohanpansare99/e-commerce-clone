import React, {useState, useEffect} from 'react'
import './Listing.css'
import { useParams} from 'react-router-dom';
import axios from 'axios';
import ListingDispl from './Listing Display'
import BrandFilter from '../Filter/BrandFilter'
import OfferFilter from'../Filter/OfferesFilter'
const base_url ="https://e-com-24a3.onrender.com"



const Listing=()=>{

    let params = useParams();

    const [prodList,setProdList] = useState();
    let subcatid = params.subCatId;
    useEffect(() => {
       //here storing value so that can used to come back after back button
        // sessionStorage.setItem('subCatId',subcatid)
        axios.get(`${base_url}/products/${subcatid}`)
        .then((res) => {
            setProdList(res.data)
        })
    },[])

    const setDataForFilter =(data)=>{
        setProdList(data)
    }

    return (
       
            <div className="Product_listing_section text-black">
                <div className=" container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-sm-3 col-12 ">
                            <div className="filter_main_container">
                                <div className=" filter_heading  border border-end-0 border-start-0 border-top-0">
                                    <div className="filter_container m-3 d-flex justify-content-between">
                                        <div className="filter_title">
                                            <span className="filter_name filter_1">Filters</span>
                                        </div>
                                        <div className="filter_btn ">
                                            <button className="text-primary" >Clear All</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- price --> */}
                                {/* <div className="border border-end-0 border-start-0 border-top-0">
                                    <div className="filter_container m-3 justify-content-between">
                                        <div className="filter_top">
                                            <span className="filter_name">Price</span>
                                        </div>
                                        <div className="filter_item_container d-flex justify-content-evenly ">
                                            <div className="">
                                                <select name="min_price" id="Price">
                                                    <option value="Min">Min</option>
                                                    <option value="₹10000">₹10000</option>
                                                    <option value="₹15000">₹15000</option>
                                                    <option value="₹20000">₹20000</option>
                                                </select>
                                            </div>
                                            <div className="">
                                                <select name="max_price" id="Price">
                                                    <option value="₹10000">₹10000</option>
                                                    <option value="₹15000">₹15000</option>
                                                    <option value="₹20000">₹25000</option>
                                                    <option value="₹30000+">₹30000+</option>

                                                </select>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div> */}
                                {/* <!-- Brand --> */}
                                <BrandFilter subCatId={subcatid}
                                prodPerBrand={(data)=> {setDataForFilter(data)}}/>
                                {/* <!-- Offers --> */}
                                {/* <div className="border border-end-0 border-start-0 border-top-0">
                                    <div className="filter_container m-3 justify-content-between">
                                        <div className="filter_top">
                                            <span className="filter_name">Offers</span>
                                        </div>
                                        <div className="filter_item_container d-flex flex-column">
                                            <label className=" my-2">
                                                <input className="me-2" type="checkbox" checked=""/>No Cost EMI
                                            </label>
                                            <label className="my-2">
                                                <input className="me-2" type="checkbox" checked=""/>Special Price
                                            </label>
                                            
                                        </div>
                                        
                                    </div>
                                </div> */}
                                <OfferFilter subCatId={subcatid}
                                prodPerOffer={(data)=> {setDataForFilter(data)}}/>

                            </div>
                        </div>
                        <div className="col-md-9 col-sm-9 col-12">
                            <div className="products_main_container">
                               <ListingDispl listData={prodList}/>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
    )
}

export default Listing