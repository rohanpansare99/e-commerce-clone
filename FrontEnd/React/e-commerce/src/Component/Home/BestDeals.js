import React,{useEffect, useState} from 'react'
import './BestDeals.css'
const base_url ="https://e-com-24a3.onrender.com"




const BestDeals=()=>{


    const [cat, setCategory] =useState();
    const [sunCat, setSubCategory] =useState();

    useEffect( () => {
        fetch(`${base_url}/categories`, {method:'GET'})
        .then((cate) => cate.json())
        .then((data)=>{
            setCategory(data)
        } )
    },[])


  function leftScroll() {
    const left = document.querySelector(".best_of_main_container");
    left.scrollBy(400, 0);
  }
  function rightScroll() {
    const right = document.querySelector(".best_of_main_container");
    right.scrollBy(-400, 0);
  }

  const DealItems=(data)=>{
    if(data){
        return data.map((item)=>{
            return(
                <div className="subcat_option" >
                    <a href="#" className=" ">
                        <div className="sub_cat_img text-center">
                        <img src={item.subcat_img} alt="{item.subcat_name}"/>
                        </div>
                        <div className="sub_cat_title text-black text-center">
                        {item.subcat_name}
                        </div>
                    </a>
                </div>
            )
        })
    }
  }

    const BestDealCat=(data)=>{
        if(data){
            return cat.map((item)=>{
            return(
                <section className="BestOfSection container-fluid sub_cat_Section">
  
                    <div className="row">
                        <div className="col-md-3 col-sm-3 col-0 d-flex justify-content-center align-items-center section_desc_container1">
                            <div className="desc">
                                <div className="section_desc text-center">
                                <div className="Best_of_Tile text-black fs-3 py-2">
                                    Best of {item.category_name}
                                </div>
                                <div className="button btn btn-primary  mx-auto">
                                    View All
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-9 col-12 best_of_container  d-flex justify-content-between" id="carouselExampleControls1">
                        <button className=" carousel_btnpre" type="button" onclick="rightScroll()">
                            <div className="arrow_navigator fs-2">
                            <span className="">
                                <i className="fa-solid fa-chevron-left" style={{color: "#050505"}}></i>
                            </span>
                            <span className="visually-hidden">Previous</span>
                            </div>
                        </button>
                        <div className="best_of_main_container d-flex justify-content-evenly">
                            
                            
                            {DealItems(item.subcategory)}
                            

                        </div>
                        <button className=" carousel_btnnxt " type="button" onclick="leftScroll()">
                            <div className="arrow_navigator fs-2">
                            <span className="" aria-hidden="true">
                                <i className="fa-solid fa-chevron-right" style={{color: "#050505"}}></i>
                            </span>
                            </div>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                    </div>
                    

                </section>
            )
        })
    }
    }
    
    
    
    return(
            <>
            {BestDealCat(cat)}

            </>

    )
}

export default BestDeals