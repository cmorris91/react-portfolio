import React from "react";
import "./style.css"

function Contact() {
    return (
        <div className="card mb-3 start-project-card" id="contact-me">
    <div className="card-body card-flex">
        <h3 className="intro subtitle contact-me-subtitle" >Contact Me</h3>
        <h3 className="intro subtitle">
          <div className="social-links">
            <a href="https://www.linkedin.com/in/chelsey-morris-758590204/" className="social-icon"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/cmorris91" className="social-icon"><i className="fab fa-github"></i></a>
            <a href="mailto:chelseymorris91@yahoo.com.com" className="social-icon"><i className="fas fa-envelope"></i></a>
            <a href="tel: 848-2999778" className="social-icon"><i className="fas fa-phone"></i></a>
          </div>
        </h3>
    </div>
</div>
    )
}

export default Contact;