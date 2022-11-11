import React from "react";
import HomeDeals from "../../assets/landingpage.png";
import teamprofile from "../../assets/blog.jpg";
import petfinder from "../../assets/petfinder.jpg";
import noteEditor from "../../assets/PWA.png";
import socialNetwork from "../../assets/API.png";
import noteTaker from "../../assets/notes.png";


function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-hstack ">
          <h2 className="section-title secondary-border"> Previous Projects</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/MarioArmstrong/foreverOwnerFinder">
                {" "}
                <img
                  src={petfinder}
                  className="my-2"
                  style={{ width: "175%" }}
                  alt="Pet-Finder"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Pet Finder+</h4>
              <p>
                This application will connect owners with their future pets not strictly in their local areas. In addition, it will display directions to shelters.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/simpmind/Team-Profile-Generator">
                {" "}
                <img
                  src={teamprofile}
                  className="my-2"
                  style={{ width: "175%" }}
                  alt="Team Profile Generator"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Team Profile Generator</h4>
              <p>
                A CLI app that takes employee information and renders a web page.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/simpmind/HomeDeals">
                {" "}
                <img
                  src={HomeDeals}
                  className="my-2"
                  style={{ width: "175%" }}
                  alt="Home-Deals"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Home Deals Real Estate</h4>
              <p>
                This project provide owners to post their properties in a place where potential buyers can look for them without the need of a third party (realtor){" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/simpmind/Note-Editor">
                {" "}
                <img
                  src={noteEditor}
                  className="my-2"
                  style={{ width: "175%" }}
                  alt="Note-Editor"
                />
              </a>
            </div>
            <div className="job-text">
              <h4> Text Editor </h4>
              <p>
                This is a text editor that runs in the browser. The app will be a single-page application that meets the PWA criteria.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/simpmind/Social-Network-API">
                {" "}
                <img
                  src={socialNetwork}
                  className="my-2"
                  style={{ width: "175%" }}
                  alt="social-Network"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Social Network API</h4>
              <p>
                This application allows you to write users data, save users data and deletes that are being stored in a db.json file.
                It runs on node.js and uses express.js to route all the get, post and delete methods.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/simpmind/Note-Taker">
                {" "}
                <img
                  src={noteTaker}
                  className="my-2"
                  style={{ width: "175%" }}
                  alt="note-taker-app"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Note-Taker-App</h4>
              <p>
                A small business owner wanted to be able to write and save notes so that owner can organize his thoughts and keep track of tasks he needed to complete.
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Portfolio;
