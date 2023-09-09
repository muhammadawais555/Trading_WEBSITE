import React, { useState } from 'react';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
import './Career.css';
import Nav2 from '../../Components/Navbar2/Nav2';
import Footer from '../../Components/Footer/Footer';

function Career() {
    const [cards] = useState([
        {
            title:'Trader'
        },
        {
            title:'Analyst'
        },
        {
            title:'Portfolio Manager'
        },
        {
            title:'Risk Manager'
        },
        {
            title:'Compliance Officer'
        },
        {
            title:'Back Office Staff'
        },
        {
            title:'Quantitative Analyst'
        },
        {
            title:'IT Specialist'
        },
        {
            title:'Sales Manager'
        },
        {
            title:'Operation Manager'
        },
        {
            title:'Compliance Officer'
        },
        {
            title:'Senior Auditor'
        },
    ])
  return (
<>
<Nav2 />
<section className="contact container section" id="">
      <div className="Contact container">
        <div className='header'>
            <h1>Career Opportunities</h1>
            <div className='cards'>
            {
                cards.map((card,i) => (
                    <div className='card'>
                    <div className='career'>
                    <h3>{card.title}</h3>
                    </div>
                    <a href="/ContactUs" className='career-btn'>More Details<HiOutlineArrowNarrowRight className="cart-icon3"/></a>
                </div>
                ))
            }
            </div>
        </div>
        </div>
        </section>
        <Footer />
</>
  )
}

export default Career