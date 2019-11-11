import React, { Component } from 'react'
// import Helmet from 'react-helmet'
import './Bottom.css'
export default class Bottom extends Component {
    render(){
        return(
            <div>
                {/* <Helmet title='InternShala'></Helmet> */}
                <div className='nav-block'>
                    <section className='bott-align'>
                        <h3 className='logo-imge'>For Quick inquiry</h3>
                    <ul>
                        <li><a className='contact-link phone-india' href='tel:+919413060050'>+91 9413060050</a></li>
                        <li><a className='contact-link email-link' href='mailto:info@mail.com'>info@mail.com</a></li>
                        <li><a className='Comapny-Link-Website' href='https://www.google.com'>www.google.com</a> </li>
                    </ul>
                    </section>
                    <section className='bott-align'>
                <h3 className='logo-img'>Company</h3>
                <ul>
                    <li>Contact Us</li>
                    <li>Join Us</li>
                    <li>Become our Content Partner</li>
                </ul>
                </section>
                <section className='bott-align'>
                <h3 className='logo-img'>Links</h3>
                <ul>
                    <li>Courses</li>
                    <li>Blogs & News </li>
                </ul>
                </section>
                <section className='bott-align'>
                <h3 className='logo-img'>Others</h3>
                <ul>
                <li>Terms & Conditions</li>
                <li>Sitemap</li>
                </ul>
                </section>
                <section className='bott-align'>
                <h3 className='logo-img'>Connect With Us</h3>
                    <ul className='social-links'>
                    <li><a className='facebook-link' href='https://www.facebook.com' target='_blank'>facebook</a></li>
                    <li><a className='linkedin-link' href='https://www.linkedin.com/company' target='_blank'>linkedIn</a></li>
                    <li><a className='twitter-link' href='https://twitter.com' target='_blank'>twitter</a></li>
                    <li><a className='twitter-link' href='https://Youtube.com' target='youtube'>youtube</a></li>
                    </ul>
                </section>
                </div>

            </div>
        );
    }
}