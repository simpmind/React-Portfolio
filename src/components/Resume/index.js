import React from "react";
import resume from "../../assets/resume.pdf";
import { BsDownload } from "react-icons/bs";

function Resume() {
  return (
    <div>
      <section id="welcome-section" className="download-intro">
        <div className="flex-row">
          <h2 className="section-title primary-border">My Resume</h2>
        </div>
        <div className="flex-row">
          <div className="download-info">
            <div className="download-text">
              <p> Click To Download My Resume</p>
              <a href={resume} className="download-logo" download>
                <BsDownload />
              </a>
              <p>
                My Humble Proficiencies!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* // This is the resume language */}
      <section id="home-page-body" className="resume-body">
        <div className="article column1">
          <p className="column-title">Font-End</p>
          <p className="column-text">
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>APIs</li>
              <li>Bootstrap</li>
              <li>GIT</li>
            </ul>
          </p>
        </div>

        <div className="article column2">
          <p className="column-title">Back-End</p>
          <p className="column-text">
            <ul>
              <li>NodeJS</li>
              <li>Jest</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>Sequelize</li>
              <li>ORM</li>
              <li>MVC</li>
            </ul>
          </p>
        </div>
        <div className="article column3">
          <p className="column-title">Performance</p>
          <p className="column-text">
            <ul>
              <li>NoSQL</li>
              <li>PWA</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>React</li>
              <li>MERN</li>
              <li>State</li>
            </ul>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Resume;
