import React from 'react'
import { Link } from 'react-router-dom'


const SubCatagoryDisplay=(props)=>{
    

    const listSubCat= (catDat)=>{

        if(catDat){
            return catDat.map((item) => {
                return(
                    
                    <div className="more_popover more_popover_cat">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                       <Link>
                                       <a href="#" className="">
                                       {item.subcat_name}
                                        </a>
                                        </Link>
                                    </li>
                                 </ul>
                    </div>

                )
            })
        }
        
    }



    
    
    
    return(
        <>
            {/* <div className="category_item haspopover "> */}
                {listSubCat(props)}
                

            {/* </div> */}
        </>
    )
}
export default SubCatagoryDisplay