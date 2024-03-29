import "./Herostyle.css";

import React from 'react'
import Introimg from "../assets/backgi.jpg"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
        <div className="mask">
          <img className="into-img" src={Introimg} alt="Introimg"/>
        </div>
        <div className="content">
          <p>Hi, I'm Web Developer.</p>
          <h1>React Developer</h1>
          <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn-light">Contact</Link>
          </div>
        </div>
    </div>
  )
}

export default Hero
