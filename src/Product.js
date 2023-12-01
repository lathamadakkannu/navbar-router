import React from "react";

function Product(){
    return(
        <div> 

            <section>
                <h2>OUR PRODUCTS</h2>

                <div className="product-container">
                    <div className="product-row">
                        <div className="product-col">
                            <div className="product-card">
                                <img src="image/img1.jpg" alt="" />
                            </div>
                        </div>

                            <div className="product-col">
                                <div className="product-card">
                                    <img src="image/img2.jpg" alt="" />
                                </div>
                            </div>

                            <div className="product-col">
                                <div className="product-card">
                                    <img src="image/img3.jpg" alt="" /> 
                                </div>
                            </div>

                            <div className="product-col">
                                <div className="product-card">
                                    <img src="image/img4.jpg" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="product-row">
                            <div className="product-col">
                                <div className="product-card">
                                    <img src="image/img5.jpg" alt="" />
                                </div>
                            </div>

                            <div className="product-col">
                                <div className="product-card">
                                    <img src="image/img6.jpg" alt="" />
                                </div>
                            </div>

                            <div className="product-col">
                                <div className="product-card">
                                    <img src="image/img7.jpg" alt="" />
                                </div>
                            </div>

                            <div className="product-col">
                                <div className="product-card">
                                    <img src="image/img8.jpg" alt="" />
                                </div>
                            </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Product;