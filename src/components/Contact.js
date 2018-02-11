import React from 'react';

const Contact = () => {

        return (
            <div>
                <h4>
                    I am currently available for full time positions.
                </h4>
                <h4>
                    Feel free to reach out to me with any job offers or if you just want to chat!
                </h4>
                <h4>
                    Just fill out the for below or find me on social media!
                </h4>
                <div className="contactForm">
                    <form action="https://formspree.io/adkins.chris1996@gmail.com" method="POST">
                        <input type="text" name="name" placeholder="Name"/>
                        <input type="email" name="_replyto" placeholder="Email"/>
                        <textarea rows="15" cols="" name="message" placeholder="Type your message here">
                        </textarea>
                        <input id="formSubmit" type="submit" value="Send" />
                    </form>
                </div>
                <div className="socialLinks">
                    <a href="www.facebook.com/chris.adkins.18659">
                        <i className="fa fa-facebook-square" id="facebook" aria-hidden="true"></i>
                    </a>
                    <a href="www.linkedin.com/in/cAdkins96">
                        <i className="fa fa-linkedin-square" id="linkedin" aria-hidden="true"></i>
                    </a>
                    <a href="https://twitter.com/CNAdkins96">
                        <i className="fa fa-twitter-square" id="twitter" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        )
}

export default Contact;