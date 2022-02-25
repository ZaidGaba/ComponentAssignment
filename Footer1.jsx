import React from 'react';
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const Footer1 = () => {

    return (
        
        <>
            <div className="container-fluid" style={{ backgroundColor:"#c8c10d" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-3 p-5">
                                <MdOutlineProductionQuantityLimits size="50px" style={{ marginLeft: "20px" }} />
                                <h3>Products</h3>
                            </div>
                            <div className="col-3 p-5">
                                <MdOutlineProductionQuantityLimits size="50px" style={{ marginLeft: "20px" }} />
                                <h3>Our Story</h3>
                            </div>
                            <div className="col-3 p-5">
                                <MdOutlineProductionQuantityLimits size="50px" style={{ marginLeft: "20px" }} />
                                <h3>Flavours</h3>
                            </div>
                            <div className="col-3 p-5">
                                <MdOutlineProductionQuantityLimits size="50px" style={{ marginLeft: "20px" }} />
                                <h3>Our Loaction</h3>
                            </div>
                        </div>
                </div>
            </div>
        </>

    );


}


export default Footer1;