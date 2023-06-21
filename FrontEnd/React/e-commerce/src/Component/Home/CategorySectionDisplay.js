import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
const base_url ="https://e-com-24a3.onrender.com"



const CatagoryDisplay=(props)=>{
    
    const [subCat, setSubCategory] =useState();
    
 const HandleSubCat=(event)=>{
    console.log(event.target.value)
        let subCatId = event.target.value;
        fetch(`${base_url}/subcategories?catId=${subCatId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setSubCategory(data)
        })
 }

 const renderSubCat = (data) => {
    if(data){
        return data.map((item) => {
            return(
                <div className="more_popover more_popover_cat ">
                                <ul className="list-group">
                                    <li className="list-group-item" key={item.subcat_id} value={item.subcat_id}>
                                        <a href="#" className="">
                                        {item.subcat_name} 
                                        </a>
                                    </li>
                                
                            </ul>
                        </div>
                
            )
        })
    }
}
// /listing/${item.category_id}

    const listCat = ({catData}) => {
        if(catData){
            return catData.map((item) => {
                return(
                    <div key={item.category_id}  value={item.category_id} className="category_item haspopover " > 

                            <Link to={``} onClick={HandleSubCat} value={item.category_id} >
                                {/* <a href=""> */}
                                    <div className="cat_img"value={item.category_id}>
                                        <img src={item.category_img} alt={item.category_name}/>
                                    </div>
                                    <div className="cat_title text-center drop_icon" value={item.category_id}>
                                        {item.category_name}
                                        <i className="fa-solid fa-angle-down " style={{color: "#080808"}}></i>
                                    </div>
                                {/* </a> */}
                            </Link>
                            {/* {renderSubCat(subCat)} */}
                            <div className="more_popover more_popover_cat ">
                                <ul className="list-group">
                                    <li className="list-group-item" >
                                        <a href="#" className="">
                                        {/* {item.subcat_name}  */}
                                        mens
                                        </a>
                                    </li>
                                
                            </ul>
                        </div>
                           
                     </div>
                )
            })
        }
    }
    
    
    
    return(
        <>
            {/* <div className="category_item haspopover " onMouseOver={HandleSubCat}> */}
                
                {listCat(props)}
               
                {/* {renderSubCat(subCat)} */}
                

            {/* </div> */}
        </>
    )
}
export default CatagoryDisplay