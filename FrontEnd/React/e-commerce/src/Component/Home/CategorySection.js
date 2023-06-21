import React,{useState, useEffect} from 'react';
import './CategorySection.css'
import CatagoryDisplay from './CategorySectionDisplay'

const base_url ="https://e-com-24a3.onrender.com"
const Category=()=>{

    const [cat, setCategory] =useState();
    const [sunCat, setSubCategory] =useState();

    useEffect( () => {
        fetch(`${base_url}/categories`, {method:'GET'})
        .then((cate) => cate.json())
        .then((data)=>{
            setCategory(data)
        } )
    },[])

    return(
        <>
        
            <div className="categories_container shadow-sm">
                <div className="categories shadow-sm  d-flex justify-content-md-evenly justify-content-sm-start ">
                    {/* <div className="category_item  d-md-none">
                            <a href="#">
                                <div className="cat_img">
                                    <img src="https://i.ibb.co/2sT9qCN/allcat.png" alt="mobile"/>
                                </div>
                                <div className="cat_title text-center">
                                    categories
                                </div>
                            </a>
                    </div> */}
                    
                        <CatagoryDisplay  catData={cat}/>
                        

                        
                            
                    {/* </CatagoryDisplay> */}
                    {/* </div> */}
                    
                    
                   

                {/* <div className="category_item haspopover ">
                    <a href="">
                        <div className="cat_img">
                            <img src="https://i.ibb.co/C6RfZ9D/fashion.webp" alt="fashion"/>
                        </div>
                        <div className="cat_title text-center drop_icon">
                            Fashion
                            <i className="fa-solid fa-angle-down " style={{color: "#080808"}}></i>
                        </div>
                    </a>
                    <div className="more_popover more_popover_cat">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <a href="#" className="">
                                    Mens
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                </div> */}
                
                </div>
            </div>
        
        </>
    )
}


export default Category