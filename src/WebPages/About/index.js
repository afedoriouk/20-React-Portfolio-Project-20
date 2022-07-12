import React from 'react'
import backgroundImage from '../../Assets/Images/Webdevelop-IMG-5.jpg'

function About() {
  return (
    <section className="cover-image">
      <h1 id="about">About</h1>
      <img
        src={backgroundImage}
        className="cover-image"
        style={{ width: '100%' }}
        alt="cover-image"
      />
      <div className="my-bio">
        <p>Alexander Fedoriouk</p>
        <div>
          <h2>Graphic/Web Designer, Web Developer, Video/Audio Editor</h2>
          <p>
            As a Graphic/Web Designer and Web Developer and Video/Audio Editor,
            I create dynamic, attention-grabbing websites, brochures, ads that
            bring increased exposure and revenue to my clients. I have a proven
            track record coordinating and directing marketing campaigns,
            managing marketing databases, producing creative materials, creating
            HTML custom email templates. I have provided support for many
            clients with the development and branding of their products and
            coordinating their projects.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
