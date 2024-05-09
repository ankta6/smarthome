import React from "react";
import "./Aboutus.css";
// import "./Responsive.css";
import img1 from "./images/img-1.jpg";
import img2 from "./images/img-2.jpg";
import img3 from "./images/img-3.jpg";

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="left-text">
            Welcome to our smart home solutions! we believe in the power of
            innovation to simplify and enhance daily living. Our journey began
            with a simple idea: to create smart home technology that seamlessly
            integrates into your life, making it easier, safer, and more
            efficient.
          </p>
          <p className="right-text">
            At Smart Home Solutions, we are dedicated to providing innovative
            and reliable smart home products to make your life easier and more
            comfortable. Our team consists of experienced professionals who are
            passionate about creating cutting-edge technology for your home.
          </p>
          <p className="center-text">
            our mission is to make your home smarter, more comfortable, and more
            secure than ever before. Join us on our journey as we continue to
            innovate and shape the future of smart home technology. Welcome to
            the future of home automation!
          </p>
        </div>
        <div className="about-images">
          <img src={img1} alt="Team member 1" className="left-img" />
          <img src={img2} alt="Team member 2" className="right-img" />
          <img src={img3} alt="Team member 3" className="center-img" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
