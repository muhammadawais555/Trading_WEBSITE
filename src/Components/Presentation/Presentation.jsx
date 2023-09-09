import React, { useState } from 'react';
import './Presentation.css';
import { Fade } from 'react-reveal';

function Presentation() {
  const [cards] = useState([
      {
          title:'Guarantee you will make lots of money'
      },
      {
          title:'Tell you that trading can change your life'
      },
      {
          title:'Make promises that are too good to be true'
      },
      {
          title:'Provide customer testimonials'
      },
      {
          title:'Call you on a mobile phone to set up an account'
      },
      {
          title:'Only highlight the potential rewards'
      },
  ])

return (
  <>
  <section className="container" id="">
          <div className='contain header'>
              <h1>Pineal will Never</h1>
              <div className='cards'>
              {
                  cards.map((card,i) => (
                    <Fade bottom>
                      <div className='card'>
                      <div className='present'>
                      <h3>{card.title}</h3>
                      
                      </div>
                  </div>
                  </Fade>
                  ))
              }
              </div>
          </div>
          </section>
  </>
    )
  }
  
  export default Presentation