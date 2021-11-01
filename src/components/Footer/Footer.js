import React from "react";
import "../../assets/scss/Footer.scss";
import Address from "../../assets/images/address.png";
import Contact from "../../assets/images/contact.png";
import Mail from "../../assets/images/mail.png";
import youtube from "../../assets/images/youtube.png";
import twittter from "../../assets/images/twitter.png";
import chat from "../../assets/images/chat.png";
import pinterest from "../../assets/images/pinterest.png";
import facebook from "../../assets/images/facebook.png";
import location from "../../assets/images/location.png";

const Footer = () => {

  return (
    <>
      <div className="footer blue">
        <ul className="footer-menu">
          <li>
            <h6>Reach Us</h6>
            <ul className="address">
              <li>
                <img src={Address} alt="" />
                <div>
                  <p>JD Academy of Excellence</p>
                  <p> Santhome High Road </p>Chennai - 600 004
                </div>
              </li>
              <li>
                <img src={Contact} alt="" />
                <div>
                  <p>+91 9750565175</p>
                  <p>+91 9629456868</p>
                </div>
              </li>
              <li>
                <img src={Mail} alt="" />
                <div>
                  <a href="#">jdacademy2021@gmail.com</a>
                </div>
              </li>
            </ul>
          </li>
          <li className="map">
            <h6>Locate Us</h6>
            <ul>
              <li>
                <img src={location} alt="location" />
              </li>
              <li>
              </li>
            </ul>
          </li>
          <li>
            <h6>Join with Us</h6>
            <form>
              <div>
                <label>Name</label>
                <input type="text" />
              </div>
              <div>
                <label>Phone</label>
                <input type="text" />
              </div>
              <div>
                <label>Email</label>
                <input type="text" />
              </div>
              <div>
                <label>Course</label>
                <input type="text" />
              </div>
              <div className="button">
                <button>Join Now</button>
              </div>
            </form>
          </li>
          <li>
            <h6>Connect Us</h6>
            <ul className="socialIcons">
              <li>
                <a href="#">
                  <img src={facebook} alt="" />
                </a>
                <a href="#">
                  <img src={pinterest} alt="" />
                </a>
                <a href="#">
                  <img src={youtube} alt="" />
                </a>
                <a href="#" className="reshtml">
                  <img src={twittter} alt="" />
                </a>
                <a href="#" className="reshtml">
                  <img src={chat} alt="" />
                </a>
              </li>
              <li className="reshtml">
                <a href="#">
                  <img src={twittter} alt="" />
                </a>
                <a href="#">
                  <img src={chat} alt="" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <p className="copyright">
          <p>Copyright (c) JD Academy of Excellence</p>
          <p> 2021 All Rights Reserved</p>
          <p>
            {" "}
            :: with <span className="heart"> &hearts; </span> developed by{" "}
            <a href="#">JDAE Tech Wing</a>
          </p>
        </p>
      </div>
    </>
  );
};

export default Footer;
