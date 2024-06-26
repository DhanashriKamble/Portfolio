import "./Footerstyle.css"

import React  from "react"
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa"
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={25} style ={{color:"#fff",marginRight:"2rem"}}/>
                    <div>
                        <p>Hadapsar</p>
                        <p>Pune</p>
                    </div>
                </div>
                    <div className="phone">
                    <h4><FaPhone size={25} style =
                    {{color:"#fff",marginRight:"2rem"}}/>
                    9607334852</h4>
                    </div>
                <div className="email">
                    <h4><FaMailBulk size={25} style =
                    {{color:"#fff",marginRight:"2rem"}}/>
                    kdhanashri099@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About</h4>
                <p>@CopyRight</p>
                <div className="social">
                <FaFacebook size={35} style ={{color:"#fff",marginRight:"2rem"}}/>
                <FaTwitter size={35} style ={{color:"#fff",marginRight:"2rem"}}/>
                <FaLinkedin size={35} style ={{color:"#fff",marginRight:"2rem"}}/>

                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;