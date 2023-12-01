import React from "react";
import { Link } from "react-router-dom"

function Navbar(){
    return(
        <div>
            <header>
                
                <div className="logo">
                    <span>C</span>offee <span>S</span>hop
                </div>

                <div className="menu">
                    <Link className="bar" to="/">Home</Link>
                    <Link className="bar" to="/about">About</Link>
                    <Link className="bar" to="/product">Product</Link>
                    <Link className="bar" to="/contact">Contact</Link>
                </div>

            </header>
        </div>
    )
}
export default Navbar;