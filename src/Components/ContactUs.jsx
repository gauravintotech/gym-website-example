import React from 'react';

function ContactUs() {
    return (
        <div id='contact' className='contact-container'>
            <h1>CONTACT US</h1>
            <form className='contact-form'>
                <input type='text' placeholder='Full Name' required />
                <input type='email' placeholder='Type Your E-Mail' required />
                <textarea placeholder='Write Here......' name='message'></textarea>
                <input type='submit' value='Send' />
            </form>
        </div>
    );
}

export default ContactUs;
