import React from 'react'
import Title from './Title'
import { FaMap, FaPhone, FaEnvelope } from 'react-icons/fa'

import '../../scss/footer.scss'

const Footer = () => {
    return (
        <>
            <section className="contacts-info spacing">
                <div className="container">
                    <Title title="Questions?" />
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="contact-block">
                                <div className="icon-wrapp">
                                    <FaMap />
                                </div>
                                <div className="info">
                                    <h2>Our Office:</h2>
                                    <p>New York, Paris, Oslo</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="contact-block">
                                <div className="icon-wrapp">
                                    <FaPhone />
                                </div>
                                <div className="info">
                                    <h2>Contact Number:</h2>
                                    <p>+1234321321</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="contact-block">
                                <div className="icon-wrapp">
                                    <FaEnvelope />
                                </div>
                                <div className="info">
                                    <h2>Email Us:</h2>
                                    <p>websitename@mail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                            <form>
                                <div className="row">
                                    <div className="form-group col-md-4">
                                        <input type="text" name="name" className="form-control" id="first-name" placeholder="Name" required="required"></input>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="email" name="email" className="form-control" id="email" placeholder="Email" required="required"></input>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" name="subject" className="form-control" id="subject" placeholder="Subject" required="required"></input>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <textarea rows="6" name="message" className="form-control" id="description" placeholder="Your Message" required="required"></textarea>
                                    </div>
                                </div>
                                <button className="btn btn-yellow-sm">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="footer-text text-center">
                    <h6>&copy;copiright | V-travel {new Date().getFullYear()} all rights reserved</h6>
                </div>
            </footer>
        </>
    )
}

export default Footer
