import React from 'react';

const heading = {

}


const Header = () => {



    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#eeebec"}}>
                <a className="navbar-brand" ><img style={{ width: "100px",marginLeft:"30px" }} src='	http://fmtemplate.net/demo/2020/FrozenYogurtShop/images/logo.png' /></a>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav ">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>

    );


}


export default Header;