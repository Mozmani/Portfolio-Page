import React from "react";
import { Link } from "react-router-dom";
import github from "../images/github.png";
import gmail from "../images/gmail.png";
import linkedin from "../images/linkedin.png";
import css from "../images/css.png";
import express from "../images/express.png";
import html from "../images/html.png";
import java from "../images/java.png";
import js from "../images/js.png";
import node from "../images/node.png";
import postgres from "../images/postgres.png";
import rails from "../images/rails.png";
import react from "../images/react.png";
import ruby from "../images/ruby.png";
import springboot from "../images/springboot.png";
import jquery from "../images/jQuery.png";

import { zoomIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
  zoomIn: {
    animation: "x 1s",
    animationName: Radium.keyframes(zoomIn, "zoomIn"),
  },
};

const Home = () => {
  return (
    <StyleRoot>
      <div className="home" style={styles.zoomIn}>
        <div className="h2-header">
          <h2>Hi, I'm Mark.</h2>
        </div>
        <div className="h1-header">
          <h1>Software Engineer. People Person. </h1>
        </div>
        <div className="home-desc">
          <p>Software Engineer who builds, designs and fixes applications.</p>
          <div className="skills-box">
            <h3>My Skills:</h3>

            <div className="skills-row">
              <img src={java} alt="Java"></img>
              <img src={js} alt="JavaScript"></img>
              <img src={ruby} alt="Ruby"></img>
            </div>

            <div className="skills-row">
              <img src={springboot} alt="Spring Boot"></img>
              <img src={node} alt="Node.js"></img>
              <img src={rails} alt="Ruby on Rails"></img>
            </div>

            <div className="skills-row">
              <img src={express} alt="Express.js"></img>
              <img src={react} alt="React.js"></img>
              <img src={postgres} alt="Postgres"></img>
            </div>

            <div className="skills-row">
              <img src={jquery} alt="jQuery"></img>
              <img src={html} alt="html"></img>
              <img src={css} alt="css"></img>
            </div>
          </div>

          <ul>
            <h3>List of services:</h3>
            <li>Custom Applications</li>
            <li>Custom Webpages</li>
            <li>Freelance Development</li>
          </ul>
          <Link to="/contact">Contact me!</Link>
        </div>
        <div className="contact-bar">
          <a href="https://github.com/Mark-The-Dev" target="Blank">
            {" "}
            <img src={github} alt="GitHub"></img>
          </a>
          <a href="mailto:SwiftTactics@gmail.com">
            <img src={gmail} alt="gmail"></img>
          </a>
          <a href="https://www.linkedin.com/in/mark-marcello/" target="Blank">
            <img src={linkedin} alt="linkedIn"></img>
          </a>
        </div>
      </div>
    </StyleRoot>
  );
};

export default Home;
