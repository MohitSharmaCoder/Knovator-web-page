import React from 'react'
import './css/Footer.css';
import { AiOutlineInstagram,AiOutlineWhatsApp } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { CiMail} from 'react-icons/ci';
import logo from './img/logo.png'


const Footer = () => {
    return (
        <>
            <section className='footer'>
                <div className="footer-sections">
                    <div className='item-one footer-box'>
                        <img src={logo} alt="" />
                        <div className="social-medea">
                            <div>Follow us on</div>
                            <a className='anco' href="/"><AiOutlineInstagram /></a>
                            <a href="/"><FaLinkedinIn /></a>
                        </div>
                    </div>
                    <div className='item-two footer-box'>
                        <h4>Connect with us</h4>
                        <div className='mail'>
                            <div className='email'><CiMail /></div>
                            <a href="/">ramaninfo@gmail.com</a>
                        </div>
                        <div className='mail'>
                            <div className='email'><AiOutlineWhatsApp /></div>
                            <a href="/">+9134-4343-4334</a>
                        </div>
                    </div>
                    <div className='item-three footer-box'>
                        <h4>Terms & Condition</h4>
                        <a href='/'>Privacy Policy</a>
                        <a href='/'>About Us</a>
                        <a href='/'>FAQ</a>
                    </div>
                    <div className='item-four footer-box'>
                        <h4>Blogs</h4>
                        <a href="/">fOR Jobseekers</a>
                        <a href="/">fOR Employee</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
