import React from "react";
import './home.css';
import '../../App.css';
const Social = ()=>{
    return(
        <div className="home__social">
            <a href="https://instagram.com/shayan_khan_mahar?igshid=MzNlNGNkZWQ4Mg==" rel="author" className="home__social-icon" target="_blank">
            <i class="uil uil-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/muhammad-alamzeb-mahar-5bb01b233" rel="auhor" className="home__social-icon" target="_blank">
            <i class="uil uil-linkedin"></i>
            </a>
            <a href="https://github.com/muhammadalamzeb" rel="author" className="home__social-icon" target="_blank">
            <i class="uil uil-github"></i>
            </a>
        </div>
    )
}

export default Social;