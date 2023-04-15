import React from "react";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="left">
        <h1>REDUX store</h1>
        <p>ALL rights reserved to abhishek's & Compony,2023-2026</p>
      </div>

      <div className="right">
        <h5>Our social links:-</h5>
        <div className="socialLinks">
          <a
            href="https://www.linkedin.com/in/abhishek-bharti-3322b1189/"
            target={"_blank"}
          >
            Linkedin
          </a>
          <a href="https://github.com/abhibharti21" target={"_blank"}>
            Github
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100041314941490"
            target={"_blank"}
          >
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
