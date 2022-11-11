import React from "react";
import avatar from "../../assets/avatar.jpg";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={avatar} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Hi my name is Duc Dang and I am a full stack developer.
            I quit my electrical engineering program and decide to be a web developer instead I am well versed in JavaScript, jQuery, HTML5 CSS3, Node.js.
            I am based out of the Philadelphia, PA.
            If you would like to learn more or want to discuss any upcoming projectsreach outat the bottom of the page or download my resume’.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
