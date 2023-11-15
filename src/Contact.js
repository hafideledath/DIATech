import './Contact.css';

import emailjs from "@emailjs/browser"

function Contact() {
    function submit(e) {
      e.preventDefault();

      const button = document.querySelector("#submit");

      button.type = "button";

      const form = document.querySelector("#contact");

      emailjs.sendForm('service_v2epud4', 'template_y8fdsst', form, 'biSgoAeWJ_LQGYHd8')
      .then(function(response) {
        form.innerHTML = "<p style='margin: 0 auto; width: fit-content;'>Your email has been sent. Please be patient as we work to get back to you.</p>";
      }, function(error) {
        form.innerHTML = "<p style='margin: 0 auto; width: fit-content;'>Your email failed to deliver. Please try again after a while.</p>";
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
            <textarea name="message" id="message" rows="5"></textarea>

            <button type="submit" id="submit">Submit</button>
          </form>

          <footer style={{marginTop: "140px"}}>©2023 DI@Tech</footer>
      </div>
    );
  }
  
  export default Contact;
  