import React from "react";

function About(){
    return(
        <div> 
            <section id="About-para">
                <h2>ABOUT</h2>
                <div className="para-container">
                    <div className="para-row">

                        <div className="about-card">
                            <img src="image/about.jpg" alt="" />
                        </div>

                        <div className="para-col2">
                            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
        
        </div>
    )
}

export default About;