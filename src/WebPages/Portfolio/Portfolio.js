import React from 'react'

import './Portfolio'

// import Project1 from '../../Assets/Images/Project1.png'
// import Project2 from '../../Assets/Images/Project2.png'
// import Project3 from '../../Assets/Images/Project3.png'
// import Project4 from '../../Assets/Images/Project4.png'
import './portfolio.css'
function Portfolio() {
  return (
    <section className="cover-image">
      <h1 id="portfolio"></h1>
      <div className="imageContainer">
        <img
          src={require('../../Assets/Images/Project1.png')}
          className="cover-image"
          // style={{ width: '30%' }}
          alt="cover-image"
        />
        <img
          src={require('../../Assets/Images/Project2.png')}
          className="cover-image"
          // style={{ width: '30%' }}
          alt="cover-image"
        />
        <img
          src={require('../../Assets/Images/Project3.png')}
          className="cover-image"
          // style={{ width: '30%' }}
          alt="cover-image"
        />

        <img
          src={require('../../Assets/Images/Project4.png')}
          className="cover-image"
          // style={{ width: '30%' }}
          alt="cover-image"
        />
        <img
          src={require('../../Assets/Images/Project5.png')}
          className="cover-image"
          // style={{ width: '30%' }}
          alt="cover-image"
        />
        <img
          src={require('../../Assets/Images/Project6.png')}
          className="cover-image"
          // style={{ width: '30%' }}
          alt="cover-image"
        />
      </div>
    </section>
  )
}

export default Portfolio
