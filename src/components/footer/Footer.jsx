import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Atik...</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://www.instagram.com/mazumdaratik/" className="home__social-icon" target='_blank'>
                    <i className="uil uil-instagram footer__social-link"></i> 
                </a>
                <a href="https://www.linkedin.com/in/atik-mazumdar-9aa5181bb/" className="home__social-icon" target='_blank'>
                    <i className="uil uil-linkedin footer__social-link"></i>
                </a>
                <a href="https://github.com/mazumdaratik" className="home__social-icon" target='_blank'>
                    <i className="uil uil-github-alt footer__social-link"></i>
                </a>
            </div>
            <span className='footer__copy'>&#169; Atik. All rights reserved.</span>
        </div>
    </footer>
  )
}

export default Footer