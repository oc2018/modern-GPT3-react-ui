import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
    return (
        <div className='gpt3__footer section__padding'>
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">Do you want to step in to the future before others</h1>
            </div>
            <div className="gpt3__footer-btn">
                <p>Request Early Acceess</p>
            </div>
            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={gpt3Logo} alt="logo" />
                    <p>Nkubu - Mitunguu Rd. Nkubu Meru Kenya</p>
                </div>
                    <div className="gpt3__footer-links_div">
                        <h4>Links</h4>
                        <p>Overons</p>
                        <p>Social Media</p>
                        <p>Counters</p>
                        <p>Contacts</p>
                    </div>
                    <div className="gpt3__footer-links_div">
                        <h4>Company</h4>
                        <p>Terms & Condations</p>
                        <p>Privacy Policy</p>
                        <p>Contacts</p>
                    </div>
                    <div className="gpt3__footer-links_div">
                        <h4>Get in touch</h4>
                        <p>Nkubu - Mitunguu Rd. Nkubu Meru Kenya</p>
                        <p>0725900078</p>
                        <p>info@ontime_c.com</p>
                    </div>
            </div>
            <div className="gtp3__footer-copyright">
                <p>&#169; 2021 GPT-3, All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
