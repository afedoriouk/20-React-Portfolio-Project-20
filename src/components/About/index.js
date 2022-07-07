import React from 'react'
import coverImage from '../../Assets/cover/cover-image.jpg'

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: '100%' }}
        alt="cover"
      />
      <div className="my-2">
        <p>Alexander Fedoriouk</p>
      </div>
    </section>
  )
}

export default About
