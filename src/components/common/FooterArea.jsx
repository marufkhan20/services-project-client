import React from "react";

const FooterArea = () => {
  return (
    <footer className="footer-area">
      <div className="container mx-auto">
        {/* <!-- footer top start --> */}
        <div className="footer-top">
          <div className="footer-about">
            <h4>About Aveit</h4>
            <p>
              Required honoured trifling eat pleasure man relation. Assurance
              yet bed was improving furniture man. Distrusts delighted Excuse
              few the remain highly feebly add people manner say. It high at my
              mind by roof.
            </p>
            <ul>
              <li>
                <img src="./img/icons/facebook.png" alt="facebook" />
              </li>
              <li>
                <img src="./img/icons/twitter.png" alt="facebook" />
              </li>
              <li>
                <img src="./img/icons/github.png" alt="facebook" />
              </li>
              <li>
                <img src="./img/icons/facebook.png" alt="facebook" />
              </li>
              <li>
                <img src="./img/icons/twitter.png" alt="facebook" />
              </li>
            </ul>
          </div>
          <div className="footer-nav">
            <div>
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#">SEO Marketing</a>
                </li>
                <li>
                  <a href="#">Pay Per Click</a>
                </li>
                <li>
                  <a href="#">Social Media</a>
                </li>
                <li>
                  <a href="#">SEO Audit</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">SEO Marketing</a>
                </li>
                <li>
                  <a href="#">Pay Per Click</a>
                </li>
                <li>
                  <a href="#">Social Media</a>
                </li>
                <li>
                  <a href="#">SEO Audit</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <a href="#">SEO Marketing</a>
                </li>
                <li>
                  <a href="#">Pay Per Click</a>
                </li>
                <li>
                  <a href="#">Social Media</a>
                </li>
                <li>
                  <a href="#">SEO Audit</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- footer top end --> */}

        {/* <!-- footer bottom start --> */}
        <div className="footer-bottom">
          <p>© Copyright 2021 aveit By WordPressRiver</p>
          <img className="logo" src="./img/logo-light.png" alt="logo" />
          <div className="send-opt">
            <input type="email" placeholder="Enter your e-mail" />
            <div className="send-img">
              <img src="./img/icons/send.png" alt="send" />
            </div>
          </div>
        </div>
        {/* <!-- footer bottom end --> */}
      </div>
    </footer>
  );
};

export default FooterArea;
