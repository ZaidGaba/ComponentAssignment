import React from 'react';


const Body = () => {
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: "#eae7e8" }}>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 " style={{ marginTop:"100px" }}>
                                    <h1>NEW PRODUCT</h1>
                                    <h2 style={{color:"red"}}>The Twist of Healthy Yogurt</h2>
                                    <p>This website template has been designed
                                        by freewebsitetemplates.com for you,
                                        for free. You can replace all this
                                        text with your own text.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <img src='http://fmtemplate.net/demo/2020/FrozenYogurtShop/images/yogurt.jpg' style={{ width: "330px", height: "260px" }} />
                    </div>
                </div>
            </div>
        </>
    );
}


export default Body;