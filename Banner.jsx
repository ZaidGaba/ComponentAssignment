import React from 'react';

const Banner = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12" style={{backgroundImage: 
                        `url("http://fmtemplate.net/demo/2020/FrozenYogurtShop/images/bg-home.jpg")`,
                        backgroundRepeat:"no-repeat"}}>
                        <img src='http://fmtemplate.net/demo/2020/FrozenYogurtShop/images/bg-home.jpg' style={{ width: "100%",height:"500px" }} />
                        
                    </div>
                </div>
            </div>
        </>
    );
}


export default Banner;