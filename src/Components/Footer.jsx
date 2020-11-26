import React from "react";
import "./Footer.css";
const Footer = () => {
  let date = new Date();
  return (
    <>
      <div className="footer__component container-fluid">
        <div className="row">
          <div className="footer__component __right col col-lg-12 col-md-12 col-sm-12 col-12">
            <p>Free Classifieds in Uzbekistan. © {date.getFullYear()}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
