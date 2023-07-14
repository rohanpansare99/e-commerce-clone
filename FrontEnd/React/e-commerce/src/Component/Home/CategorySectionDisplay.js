import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
const base_url ="https://e-com-24a3.onrender.com"



const CatagoryDisplay=(props)=>{
 
 const listSubCat = (data) => {
    if(data){
        return data.map((item) => {
            return(
                                    <li className="list-group-item" key={item.subcat_id} value={item.subcat_id}>
                                        <Link to={`/listing/${item.subcat_id}`}>
                                        {/* <a href="#" className=""> */}
                                        {item.subcat_name} 
                                        {/* </a> */}
                                        </Link>
                                        

                                    </li>
                                
                
            )
        })
    }
}
// /listing/${item.category_id}





    const listCat = ({catData}) => {
        if(catData){
            return catData.map((item) => {
                return(
                        
                    <div key={item.category_id} className="category_item haspopover ">
                        {/* <a href=""> */}
                            <div className="cat_img">
                                <img src={item.category_img} alt={item.category}/>
                            </div>
                            <div className="cat_title text-center drop_icon">
                                {item.category_name}
                                <i className="fa-solid fa-angle-down " style={{color: "#080808"}}></i>
                            </div>
                        {/* </a> */}
                        <div className="more_popover more_popover_cat">
                            <ul className="list-group">
                                
                                {listSubCat(item.subcategory)}
                            </ul>
                        </div>
                  </div>    
                        
                        
                )
            })
        }
    }
    




    
    return(
        <>
            {listCat(props)}
        </>
    )
}
export default CatagoryDisplay