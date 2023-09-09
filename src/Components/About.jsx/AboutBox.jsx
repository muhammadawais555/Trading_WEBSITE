import React from 'react';

function AboutBox(props) {
  return (
    <div id='about'>
    <div className='about-image'>
        <img src={props.image} alt=''/>
    </div>
    <div className='about-text'>
        <h2>{props.title}</h2>
        <p>{props.alt}</p>
    </div>
    </div>
  )
}

export default AboutBox
