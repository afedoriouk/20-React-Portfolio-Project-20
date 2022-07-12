import React from 'react'

function About() {
  return (
    <section>
      <div className="center" id="about">
        <h1 className="page-header">Alexander Fedoriouk</h1>
      </div>
      <div className="center">
        <img
          className="main-image"
          src={require('../../assets/images/Webdevelop-IMG-5.jpg')}
          alt="Webdevelop"
        />
      </div>

      <div>
        <h2>Graphic/Web Designer, Web Developer, Video/Audio Editor</h2>
        <p>
          As a Graphic/Web Designer and Web Developer and Video/Audio Editor, I
          create dynamic, attention-grabbing websites, brochures, ads that bring
          increased exposure and revenue to my clients. I have a proven track
          record coordinating and directing marketing campaigns, managing
          marketing databases, producing creative materials, creating HTML
          custom email templates. I have provided support for many clients with
          the development and branding of their products and coordinating their
          projects.
        </p>
      </div>
    </section>
  )
}

export default About
