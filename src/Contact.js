import './Contact.css';

import emailjs from "@emailjs/browser"

function Contact() {
    function submit(e) {
      e.preventDefault();

      const button = document.querySelector("#submit");

      button.type = "button";

      emailjs.sendForm('service_v2epud4', 'template_y8fdsst', document.getElementById("contact"), 'biSgoAeWJ_LQGYHd8')
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
         window.location.reload();
      }, function(error) {
         console.log('FAILED...', error);
      });
    }

    return (
      <div className="Contact">
          <h2 style={{marginTop: '120px'}}>Contact Us</h2>
          <form id="contact" onSubmit={submit}>
            <div className="email-header">
              <div className="name-container">
                <h3>Name</h3>
                <input type="text" name="from_name" required />
              </div>
              <div className="email-container">
                <h3>Email</h3>
                <input type="email" name="reply_to" required />
              </div>
            </div>
            <h3>Subject</h3>
            <input type="text" name="subject" required />
            <h3>Message</h3>
            <textarea name="message" id="message" rows="10"></textarea>

            <button type="submit" id="submit">Submit</button>
          </form>
      </div>
    );
  }
  
  export default Contact;
  