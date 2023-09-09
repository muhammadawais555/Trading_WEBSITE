import React from 'react';
import './Subscribe.css'

function Contact() {
  return (
    <div id='subscribe'>
    <h3>Send me Mail!</h3>
    <div className='subscribe-input'>
        <input type='email' placeholder='example@gmail.com' />
        <a href='/hg'>Subscribe</a>
    </div>
    </div>
  )
}

export default Contact