import React from "react";
// import GithubIcon from "@material-ui/icons/GitHub";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";


function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.github.com/simpmind/">
          {/* <GithubIcon /> */}
        </a>
        <a href="https://twitter.com/elonmusk">
          {/* <TwitterIcon /> */}
        </a>
        <a href="https://www.linkedin.com/">
          {/* <LinkedInIcon /> */}
        </a>
      </div>
      <p> &copy; 2022 DUC DANG</p>
    </div>
  );
}

export default Footer;
