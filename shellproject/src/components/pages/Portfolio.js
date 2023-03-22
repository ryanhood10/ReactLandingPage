import React from "react";
import "./assets/index.css";

function Portfolio() {
  return (
    <div className="projects-div">
      <h1 id="Portfolio">Portfolio</h1>

      <div className="projects">
        <div className="project-container">
          <h4>Horiseon Project</h4>
          <a href="https://ryanhood10.github.io/Challenge1Horiseon/">
            <img
              src="website-top-screen-shot.png"
              alt="Webpage Example 1"
              height="400"
              href="#"
            />
            <br />
          </a>
          <a href="https://ryanhood10.github.io/Challenge1Horiseon/">
            <img
              src="website-bottom-screen-shot.png"
              alt="Webpage Example 2"
              height="300"
              href="#"
            />
            <br />
          </a>
        </div>

        <div className="project-container">
          <h4>Flexbox Project</h4>
          <a href="https://google.com">
            <img
              src="Screenshot slack.png"
              alt="Project 2g"
              height="300"
              href="#"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
