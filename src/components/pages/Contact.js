import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact-container'>
            <h1>Contact Us</h1>
            <p>If you have any questions or inquiries, please feel free to get in touch
                with us.
            </p>

            <div className="contact-form">
                <div className='form'>
                    <h2>Contact Form</h2>
                    <form>
                        <div className="form-group">
                            <input type="text" id="name" name="name" placeholder='Name' required />
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" name="email" placeholder='Email' required />
                        </div>
                        <div className="form-group">
                            <textarea type="text" id="message" name="message" rows="4" placeholder='Message' required />
                        </div>
                        <a href='/' className='btn'>Submit</a>
                    </form>
                </div>

                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <p>Feel free to contact us using the information below:</p>
                    <p>Email: fithub@gmail.com</p>
                    <p>Phone: +111-222-3333</p>
                    <p>Address: 123 Fitness Street, Healthville</p>
                </div>
            </div>
        </div>
    )
}
export default Contact;