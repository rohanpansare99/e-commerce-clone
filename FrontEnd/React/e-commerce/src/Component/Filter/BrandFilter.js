import React, { useEffect, useState } from "react";
import axios from "axios";
const base_url ="https://e-com-24a3.onrender.com"

const BrandFilter =( props)=>{

    let [brandItem, setBrandItem] = useState([])
    let all=[]
    useEffect(()=>{
        axios.get(`${base_url}/products/${props.subCatId}`)
        .then((res)=>{setBrandItem(res.data)})
      
    },[])
    
    const uniqItems=(data)=>{
      if(data){
        if(all.indexOf(data.brand_name)===-1){
            all.push(data.brand_name)
            return(
                <>
                    <input className="me-2 " type="checkbox" name={data.brand_name}  value={data.brand_id} />{data.brand_name}
    
                </>
            )
        }
    }
    }

    const BrandItems =(data)=>{
      if(data){
        return data.map((item)=>{
            return(
                <label className=" my-2 radio " key={item._id}>
                  {uniqItems(item.brand[0])}  

            </label>)
        })
      }
        

    }


    const handleFilter=(event)=>{
        let subcatid=props.subCatId
        //?brandId=7
        let brandId=event.target.value
        let newUrl=""
        if(brandId===""){
            newUrl=`${base_url}/filter/${subcatid}`
        }
        else{
            newUrl=`${base_url}/filter/${subcatid}?brandId=${brandId}`
        }
        axios.get(newUrl)
        .then((res)=>{props.prodPerBrand(res.data)})
    }
    return(
        <div className="border border-end-0 border-start-0 border-top-0">
                                    <div className="filter_container m-3 justify-content-between">
                                        <div className="filter_top">
                                            <span className="filter_name">BRAND</span>
                                        </div>
                                        <form className="filter_item_container d-flex flex-column " onChange={handleFilter}>
                                            {BrandItems(brandItem)}
                                            
                                        </form>
                                        
                                    </div>
                                </div>
    )
}

export default BrandFilter