import React from "react";
import aboutImage from "./assets/undraw_about_me_re_82bv.svg";

function About() {
  return (
    <div className="container mt-5">
      <h1>About </h1>
      <div className="row">
        <div className="col-sm mt-5">
          <p style={{ textAlign: "justify" }}>
            I, Rezzak Ali am a graphic and web designer living in India. I have
            a degree in Computer Application Studies from Gauhaty University.
            Currently, I'm working as a freelancer.I specially in creating
            beatiful, useable, professional website using best practise
            accessibility and the latest W3C web standards guidlines, resulting
            in semantic and ceo friendly HTML and CSS All any sites are loving
            hand coded.
          </p>
          <p style={{ textAlign: "justify" }}>
            For building websites any weapons of choice are Photoshop and
            Illustrator for creating layouts ,then Coding.
          </p>
        </div>
        <div className="col-sm">
          <img src={aboutImage} alt="aboutImage" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default About;
