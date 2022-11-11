import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaPhone,
  FaRegEnvelope,
  FaUserAlt
} from "react-icons/fa";

const MobileWidgets = () => {
  return (
    <div className="offcanvasWidgetArea">
      <div className="offCanvasContactWidget">
        <div className="headerContactInfo">
          <ul className="headerContactInfoList">
            <li>
              <FaUserAlt />{" "}
              <Link to={process.env.PUBLIC_URL + "/login"}>
                Login / Register{" "}
              </Link>
            </li>
            <li>
              <FaPhone /> <a href="tel://12452456012">+94 7777 777 77</a>
            </li>
            <li>
              <FaRegEnvelope />{" "}
              <a href="mailto:info@yourdomain.com">crypotforeteller@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      {/*Off Canvas Widget Social Start*/}
      <div className="offCanvasWidgetSocial">
        <a
          href="//twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="//instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="//facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="//pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Pinterest"
        >
          <FaPinterestP />
        </a>
      </div>
      {/*Off Canvas Widget Social End*/}
    </div>
  );
};

export default MobileWidgets;
