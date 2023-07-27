import React from "react";
import './footer.css';

const Footer = ()=>{
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Muhammad Alamzeb Mahar</h1>

                <ul className="footer__list">
                    
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>

                </ul>

                <div className="footer__social">
                    <a href="https://www.facebook.com/shayankhan.mahar.1" rel="author" className="footer__social-link" target="_blank">
                     <i class="bx bxl-facebook"></i>
                     </a>
                     <a href="https://www.linkedin.com/in/muhammad-alamzeb-mahar-5bb01b233" rel="author" className="footer__social-link" target="_blank">
                    <i class="uil uil-linkedin"></i>
                    </a>
                    <a href="https://github.com/muhammadalamzeb" rel="author" className="footer__social-link" target="_blank">
                    <i class="uil uil-github"></i>
                    </a>
                    <a href="https://twitter.com/shayankhanmahar?t=mp-R0_Gg6gcd21GLN9ghzg&s=09" rel="author" className="footer__social-link" target="_blank">
                    <i class="bx bxl-twitter"></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &copy; 2023 Muhammad Alamzeb Mahar. All rights reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer;