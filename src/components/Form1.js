import "./formstyle.css"

import React from 'react'

const Form1 = () => {
  return (
    <form>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="type Your Message here"/>
        <button className="btn">Submit</button>
    </form>

    )
}

export default Form1