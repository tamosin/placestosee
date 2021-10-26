import React from "react";
import AboutImg from "../images/about-img.jpg";
import "./About.css";

function About() {
  return (
    <section className="about-section">
      <img src={AboutImg} alt="Abandomed water park" className="about-img" />
      <article className="about-article">
        <h2 className="about-h2">Our mission</h2>
        <p className="about-p">
          Collect all interesting locations on one site.
        </p>
        <h2 className="about-h2">What you can do on this site?</h2>
        <p className="about-p">You can: </p>
        <ul className="about-ul">
          <li className="about-li">search locations (near or far)</li>
          <li className="about-li">
            visit it and leave your opinion to help other people
          </li>
          <li className="about-li">
            add your own locations, share it with others
          </li>
        </ul>
      </article>
    </section>
  );
}

export default About;
