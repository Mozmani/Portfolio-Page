import React from 'react';
import emailjs from 'emailjs-com';

import './ContactUs.css';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    const {user_email, user_name, message} = e.target

    if(!user_email.value){
      console.log('you need an email')
      return
    }

    emailjs.sendForm('service_4f5bbgh', 'template_xdvy7qi', e.target, 'user_xnneCovaq96u7AsPVqCH7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      user_email.value = '';
      user_name.value ='';
      message.value='';
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <h3>Contact Form:</h3>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" required/>
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message"  required/>
      <input type="submit" value="Send" />
    </form>
  );
}