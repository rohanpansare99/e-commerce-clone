import React, { useEffect, useState } from "react";
import axios from "axios";
const base_url ="https://e-com-24a3.onrender.com"

const OfferFilter =( props)=>{

    let [brandItem, setBrandItem] = useState([])
    let all=[]
    useEffect(()=>{
        axios.get(`${base_url}/products/${props.subCatId}`)
        .then((res)=>{setBrandItem(res.data)})
      
    },[])
    
    const uniqItems=(data)=>{
      if(data){
        if(all.indexOf(data.offer_name)===-1){
            all.push(data.offer_name)
            return(
                <>
                    <input className="me-2" type="checkbox" value={data.offer_id} />{data.offer_name}
    
                </>
            )
        }
    }
    }

    const BrandItems =(data)=>{
      if(data){
        return data.map((item)=>{
            return(
                <label className=" my-2" key={item._id}>
                  {uniqItems(item.offer[0])}  
            </label>)
        })
      }
        

    }
    const handleFilter=(event)=>{
        let subcatid=props.subCatId
        //?offerId=2
        let offerId=event.target.value
        let newUrl=""
        if(offerId===""){
            newUrl=`${base_url}/filter/${subcatid}`
        }
        else{
            newUrl=`${base_url}/filter/${subcatid}?offerId=${offerId}`
        }
        axios.get(newUrl)
        .then((res)=>{props.prodPerOffer(res.data)})
    }
    return(
        <div className="border border-end-0 border-start-0 border-top-0">
                                    <div className="filter_container m-3 justify-content-between">
                                        <div className="filter_top">
                                            <span className="filter_name">OFFER</span>
                                        </div>
                                        <div className="filter_item_container d-flex flex-column" onChange={handleFilter}>
                                            {BrandItems(brandItem)}
                                            
                                        </div>
                                        
                                    </div>
                                </div>
    )
}

export default OfferFilter