import React from 'react';
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";


const Footer = () => {

    return (

        <>
            <div className="container-fluid" style={{ backgroundColor: "#cb3362" }}>
                <div className="container" >
                    <div className="row">
                        <div className="col-3 m-auto p-5">
                            <AiFillFacebook size="40px" />
                            <AiFillInstagram size="40px" />
                            <AiFillFacebook size="40px" />
                            <AiFillInstagram size="40px" />
                        </div>
                        <div className="col-12">
                            <p style={{ textAlign:"center" }}>@copywrite2020</p>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );


}


export default Footer;