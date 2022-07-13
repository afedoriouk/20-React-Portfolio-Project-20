import React from 'react'
// import Project1 from '../../Assets/Images/Project1.png'
// import Project2 from '../../Assets/Images/Project2.png'
// import Project3 from '../../Assets/Images/Project3.png'
// import Project4 from '../../Assets/Images/Project4.png'
import './about.css'
function About() {
  return (
    <section className="cover-image">
      <div className="my-bio">
        <p>Alexander Fedoriouk</p>
        <div>
          <p>
            <strong>
              Graphic/Web Designer and Web Developer and Video/Audio Editor.
            </strong>
            As a Graphic/Web Designer and Web Developer and Video/Audio Editor I
            create dynamic, attention-grabbing websites, brochures, ads that
            bring increased exposure and revenue to my clients. I have a proven
            track record coordinating and directing marketing campaigns,
            managing marketing databases, producing creative materials, creating
            HTML custom email templates. I have provided support for many
            clients with the development and branding of their products and
            coordinating their projects.
          </p>
        </div>
      </div>
      <h1 id="about"></h1>
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

export default About
