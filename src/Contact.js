import './Contact.css';

function Contact() {
    return (
      <div className="Contact">
          <h2 style={{marginTop: '120px'}}>Contact Us</h2>
          <form id="contact" action="">
            <div className="email-header">
              <div className="name-container">
                <h3>Name</h3>
                <input type="text" required />
              </div>
              <div className="email-container">
                <h3>Email</h3>
                <input type="email" required />
              </div>
            </div>
            <h3>Subject</h3>
            <input type="text" required />
            <h3>Message</h3>
            <textarea name="message" id="message" rows="10"></textarea>

            <input type="submit" value="Submit" />
          </form>
      </div>
    );
  }
  
  export default Contact;
  