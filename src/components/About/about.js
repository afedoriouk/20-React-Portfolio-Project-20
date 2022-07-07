import React from "react";

function About() {
  return (
    <section>
      <div class="center" id="about">
        <h1 class="page-header">Alexander Fedoriouk</h1>
      </div>
      <div class="center">
        <img
          src={require("../../assets/images/")}
          alt="Alexander-Fedoriouk"
          class="photo"
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
  );
}

export default About;
