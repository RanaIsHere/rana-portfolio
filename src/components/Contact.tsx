import './Contact.css';

function Contact() {
    return (
        <footer id="contact">
            <p className='section-title'>Contacts</p>

            <div className="contact-content">
                <div className="contact-item">
                    <p className='contact-title'>Email</p>
                    <p className='contact-value'>rana.rosihan.official@gmail.com</p>
                </div>

                <div className="contact-item">
                    <p className='contact-title'>LinkedIn</p>
                    <a target="_blank" href="https://www.linkedin.com/in/rana-rosihan-008934234/"><button>View Profile</button></a>
                </div>
            </div>
        </footer>
    );
}

export default Contact;