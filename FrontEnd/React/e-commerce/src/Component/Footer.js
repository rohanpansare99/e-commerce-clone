import React from 'react'
import './Footer.css'

const Footer = () =>{
    return(
        <>
        
            <footer className="footer_section_container">
                <div className="footer_section">
                    <div className="row">
                        <div className="col-md-7 col-sm-7 col-12 ">
                            <div className="d-flex justify-content-evenly">
                                <div className="footer_item">
                                    <div className="footer_item_title ">
                                        ABOUT
                                    </div>
                                    <div className="footer_item_content text-white">
                                        <ul>
                                            <li>
                                            Contact Us
                                            </li>
                                            <li>
                                            About Us
                                            </li>
                                            <li>
                                            Careers
                                            </li>
                                            <li>
                                            Flipkart Stories
                                            </li>
                                        </ul>
                                </div>
                            </div>
                            <div className="footer_item">
                                <div className="footer_item_title">
                                HELP
                                </div>
                                <div className="footer_item_content text-white">
                                <ul>
                                    <li>
                                    Payments
                                    </li>
                                    <li>
                                    Shipping
                                    </li>
                                    <li>
                                    Cancellation
                                    </li>
                                    <li>
                                    FAQ
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div className="footer_item">
                                <div className="footer_item_title">
                                CONSUMER POLICY
                                </div>
                                <div className="footer_item_content text-white">
                                <ul>
                                    <li>
                                    Return Policy
                                    </li>
                                    <li>
                                    Term Of Use
                                    </li>
                                    <li>
                                    Security
                                    </li>
                                    <li>
                                    Privacy
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div className="footer_item ">
                                <div className="footer_item_title">
                                SOCIAL
                                </div>
                                <div className="footer_item_content text-white">
                                <ul>
                                    <li>
                                    Facebook
                                    </li>
                                    <li>
                                    Twitter
                                    </li>
                                    <li>
                                    YouTube
                                    </li>
                                    
                                </ul>
                                </div>
                            </div>
                            <div className="vr text-white"></div>
                            
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-5 col-12">
                            <div className="d-flex justify-content-evenly">
                            
                                <div className="footer_item ">
                                    <div className="footer_item_title">
                                        Mail Us
                                    </div>
                                    <div className="footer_item_content text-white">
                                        <p>Flipkart Internet Private Limited,

                                            Buildings Alyssa, Begonia &
                                            
                                            Clove Embassy Tech Village,
                                            
                                            Outer Ring Road, Devarabeesanahalli Village,
                                            
                                            Bengaluru, 560103,
                                            
                                            Karnataka, India
                                        </p>
                                    </div>
                                </div>
                                <div className="footer_item">
                                    <div className="footer_item_title">
                                        Registered Office Address:
                                    </div>
                                    <div className="footer_item_content text-white">
                                        <p>Flipkart Internet Private Limited,

                                            Buildings Alyssa, Begonia &
                                            
                                            Clove Embassy Tech Village,
                                            
                                            Outer Ring Road, Devarabeesanahalli Village,
                                            
                                            Bengaluru, 560103,
                                            
                                            Karnataka, India
                                            
                                            CIN : U51109KA2012PTC066107
                                            
                                            Telephone: 044-45614700
                                        </p>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    <hr className='text-white'/>
                    <div className="text-center text-white fs-6">
                        &copy; Rohan
                    </div>
                </div>
            </footer>
        
        </>
    )
}

export default Footer