import React from "react"

function Contact(){
    return(

        <div>
 
            <section id="Contact">
                <div class="contact-container">
                    <h2>CONTACT</h2>
                    <p>Necessitatibus elus consequatur ex aliquid fuga sint consectetur velit</p>

                    <div class="contact-row">
                        <div class="contact-col">
                            
                            <h2>Location</h2>
                            <p>A108 Adam Street New York,NY 535022</p>

                            <h2>Email</h2>
                            <p>info@example.com,contact@example.com</p>
                        </div>


                        <div class="contact-col">
                            <div class="contact-form">
                                <div class="form-name">
                                    <input type="text" placeholder="Your Name" />
                                </div>

                                <div class="form-name">
                                    <input type="email" placeholder="Your Email" />
                                </div>

                                <div class="form-subject">
                                    <input type="text" placeholder="Subject" />
                                </div>

                                <div class="form-subject">
                                    <textarea name="id" cols="30" rows="10">Message</textarea>
                                </div>
 
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;