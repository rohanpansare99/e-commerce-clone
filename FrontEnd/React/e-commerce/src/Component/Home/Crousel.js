import React from 'react'
import './Crousel.css'

const Crousel=()=>{
    return(
            
            <section className="slider">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active slider_container">
                            <img src="https://i.ibb.co/QPvQvbt/banner1.webp " className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item  slider_container">
                            <img src="https://i.ibb.co/6m0fKk2/banner2.webp" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item  slider_container">
                            <img src="https://i.ibb.co/6m0fKk2/banner2.webp" className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev carousel_btnpre" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <div className="carousel_navigator">
                            <span className="" aria-hidden="true">
                                <i className="fa-solid fa-chevron-left" style={{color: "#050505"}}></i>
                            </span>
                            <span className="visually-hidden">Previous</span>
                        </div>
                    </button>
                    <button className="carousel-control-next carousel_btnnxt " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <div className="carousel_navigator">
                            <span className="carousel-control-next-icon" aria-hidden="true">
                                <i className="fa-solid fa-chevron-right" style={{color: "#050505"}}></i>
                            </span>
                        </div>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div> 

            </section>
        
        
    )
}
export default Crousel