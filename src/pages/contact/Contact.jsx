import React from "react";
import "./contact.css";
import { FaClock, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaLocationDot, FaPhone, FaTwitter, FaX, FaYoutube } from "react-icons/fa6";
import { BiEnvelope } from "react-icons/bi";
import 'leaflet/dist/leaflet.css';
import MapComponent from "./MapComponent";
function Contact() {
  return (
    <>
      <div className="Hero-image">
        <div className="hero-content">
          <h1>Contact us</h1>
          <h4>
            Start the conversation to established good
            <br />
            relationship and business.
          </h4>
        </div>
      </div>

      <div className="body">
        <div className="boxes-container">
          <p>GET IN TOUCH</p>
          <span>
            Seamless Communication, <br />
            Global Impact.
          </span>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Assumenda
            ad accusantium aliquid eum fugiat, optio vitae eligendi saepe
          </p>
          <hr />
          <div>
            <div className="icon-box-outer1">
              <div className="flex1">
                <div className="little-box"><FaLocationDot className="icon"/></div>
                <div className="no-space">
                  <h5>Head Office</h5>
                  <p>
                    Jin Campaka Wang No 22
                    <br /> Jakarta - indonesia
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="little-box"><FaEnvelope className="icon"/></div>
                <div className="no-space">
                  <h5>Email Support</h5>
                  <p>
                    Support@youdomain.ind
                    <br />
                    hello@gmail.comyou.dll
                  </p>
                </div>
              </div>
            </div>

            <div className="icon-box-outer2">
              <div className="flex2">
                <div className="little-box"><FaPhone className="icon"/></div>
                <div className="no-space">
                  <h5>Call us</h5>
                  <p>
                    Phone +6232342343242
                    <br />
                    Fax: +2343423235342
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="little-box"><FaClock className="icon"/></div>
                <div className="no-space">
                  <h5>Office Hour</h5>
                  <p>
                    Mon - Fri: 09:00 - 17:00
                    <br /> Sat - Sun : Close
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="icon-container">
            <p>Follow our social network</p>
            <div className="icons">
              <div className="circle"><FaFacebook/></div>
              <div className="circle"><FaInstagram/></div>
              <div className="circle"><FaLinkedin/></div>
              <div className="circle"><FaTwitter/></div>
              <div className="circle"><FaYoutube/></div>
            </div>
          </div>
        </div>
        <div className="sendmessage">
          <span>Send us a message</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
            soluta quasi repellendus corrupti minus atque inventore nemo,
          </p>
          <form className="message-form">
            <div className="lab-pair1">
              <label>
                Name
                <input type="text" id="name" placeholder="Name" />
              </label>
              <div className="space"></div>
              <label>
                Company
                <input type="text" id="company" placeholder="Company" />
              </label>
            </div>

            <div className="lab-pair2">
              <label>
                Phone
                <input type="number" id="phone" placeholder="Phone" />
              </label>
              <div className="space"></div>
              <label>
                Email
                <input type="email" id="email" placeholder="Email" />
              </label>
            </div>

            <label className="sub">
              Subject
              <input type="text" id="subject" placeholder="Subject" />
            </label>

            <label className="textbox">
              Message
              <textarea rows="5" cols="9" placeholder="Message"></textarea>
            </label>

            <button className="btn">
              <div> <BiEnvelope/></div>
              <div>SEND MESSAGE</div>
            </button>
          </form>
        </div>
      </div>

        <div className="map">
          <MapComponent/>
        </div>
    </>
  );
}

export default Contact;
