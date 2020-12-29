import React from 'react';
import './Contact.css';

function Contact() {
    return(
        <div className="contact">
            
            <img src="https://randomuser.me/api/portraits/men/28.jpg" alt="avatar" />
            <div>
                <h1>Eduardo Stephens</h1>
                <div className="status">
                    <img src="" alt="" />
                    <p className="status-online">Online</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;