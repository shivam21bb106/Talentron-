import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";
import FooterForm from "./FooterForm";
import FooterForm2 from "./FooterForm2";
import ScrollToTopButton from "./ScrollToTopButton";

const Footer = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo(0, 0); 
    }, 100);
  };
  const goToTrainingPrograms = () => {
    navigate("/training-program");
    setTimeout(() => {
      window.scrollTo(0, 0); 
    }, 100);
  };
  const goToTrainingPartners = () => {
    navigate("/training-partner");
    setTimeout(() => {
      window.scrollTo(0, 0); 
    }, 100);
  };
  const goToAboutUs = () => {
    navigate("/about-us");
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };
  const goToContactUs = () => {
    navigate("/contact-us");
    setTimeout(() => {
      window.scrollTo(0, 0); 
    }, 100);
  };

  return (
    <footer>
      
      <FooterForm2 />
      <div className="footer-bottom bg-dark bg-gradient text-white pt-4 pb-4">
        <div className="container">
          <div className="row">
             {/* Left Section */}
            <div className="col-md-4 text-center text-md-start">
              <h4 className="fw-bold">
                <img
                  src="src/assets/images\Rectangle 2.png"
                  alt="square_color"
                  className="img-fluid me-1"
                />Talentron
              </h4>
              <p className="footer-text">
                Founded by Solomon, whose extensive 20-year career spanned
                various domains, Talentron was born out of a passion for
                building high-performing teams and unlocking their full
                potential.
              </p>
              <p className="footer-tele-email">
              <img
                  src="src/assets/images/location.png"
                  alt="location"
                  className="img-fluid ms-1 me-2"
                />
                Level 5, Tamarai Tech Park, <br/>
                <span className="indent">S.P.Plot, No. 16-19, Inner Ring Rd, Guindy,</span><br/>
                <span className="indent">Chennai, 600032, India</span><br/>
                <img
                  src="src/assets/images/ic_baseline-phone.png"
                  alt="phone"
                  className="img-fluid me-1"
                />
                +91-1234567890 / 9087654321<br />
                <img
                  src="src/assets/images/fluent_mail-20-filled.png"
                  alt="mail"
                  className="img-fluid me-1"
                />
                talentron2024@gmail.com
              </p>
            </div>

            {/*  Right Section */} 
            <div className="col-md-8">
              <div className="row text-center text-md-start">
                {/*  Column 1 */}
                <div className="col-6 col-md-3 mb-3">
                  <ul className="list-unstyled">
                    <li>
                    <button onClick={goToHome} className="nav-link text-white footer-text pb-3"
                        >Home</button>
                    </li>
                    <li>
                    <button onClick={goToTrainingPrograms} className="nav-link text-white footer-text pb-3"
                        >Training Programs</button>
                    </li>
                    <li>
                    <button onClick={goToTrainingPartners} className="nav-link text-white footer-text pb-3"
                        >Training Partners</button>
                    </li>
                    <li>
                    <button onClick={goToAboutUs} className="nav-link text-white footer-text pb-3"
                        >About Us</button>
                    </li>
                    <li>
                    <button onClick={goToContactUs} className="nav-link text-white footer-text pb-3"
                        >Contact Us</button>
                    </li>
                  </ul>
                </div>
                {/*  Column 2 */} 
                <div className="col-6 col-md-3 mb-3">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="nav-link text-white footer-text pb-3"
                        >Software Developer</a
                      >
                    </li>
                    <li>
                      <a href="#" className="nav-link text-white footer-text pb-3"
                        >Full Stack Developer</a
                      >
                    </li>
                    <li>
                      <a href="#" className="nav-link text-white footer-text pb-3"
                        >Frontend Developer</a
                      >
                    </li>
                    <li>
                      <a href="#" className="nav-link text-white footer-text pb-3"
                        >Automation Tester</a
                      >
                    </li>
                    <li>
                      <a href="#" className="nav-link text-white footer-text pb-3"
                        >Manual Tester</a
                      >
                    </li>
                  </ul>
                </div>
                {/*  Column 3 */} 
                <div className="col-6 col-md-3 mb-3">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="nav-link text-white footer-text pb-3"
                        >Features</a
                      >
                    </li>
                    <li>
                      <a href="#" className="nav-link text-white footer-text pb-3"
                        >Clients</a
                      >
                    </li>
                    <li>
                      <a href="#" className="nav-link text-white footer-text pb-3"
                        >Training & Support</a
                      >
                    </li>
                    <li>
                      <a href="#" className="nav-link text-white footer-text pb-3"
                        >Help Center</a
                      >
                    </li>
                    <li>
                      <a href="#" className="nav-link text-white footer-text pb-3"
                        >Contact us for Help</a
                      >
                    </li>
                  </ul>
                </div>
                {/*  Column 4 */} 
                <div className="col-6 col-md-3 mb-3">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="nav-link text-white footer-text pb-3"
                        >Company</a
                      >
                    </li>
                    <li>
                      <a href="#" className="nav-link text-white footer-text pb-3"
                        >Pricing</a
                      >
                    </li>
                    <li>
                      <a href="#" className="nav-link text-white footer-text pb-3"
                        >Meet the Team</a
                      >
                    </li>
                    <li>
                      <a href="#" className="nav-link text-white footer-text pb-3"
                        >Contact Us</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-secondary" />

         {/*  Footer Bottom Section */} 
          <div
            className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start"
          >
            {/*  Follow Us Section */}
            <div className="d-flex align-items-center mb-3 mb-md-0">
              <h6 className="m-0 me-2 d-none d-md-block">Follow Us</h6>
              <div className="social-icons d-flex">
                <a href="#" className="me-2"
                  ><img
                    className="social follow"
                    src="src/assets/images/ri_instagram-fill.png"
                    alt="instagram"
                /></a>
                <a href="#" className="me-2"
                  ><img
                    className="social follow"
                    src="src/assets/images/ic_baseline-facebook.png"
                    alt="facebook"
                /></a>
                <a href="#" className="me-2"
                  ><img
                    className="social follow"
                    src="src/assets/images/Symbol.png"
                    alt="youtube"
                /></a>
                <a href="#" className="me-2"
                  ><img
                    className="social follow"
                    src="src/assets/images/linkedin.png"
                    alt="linkedin"
                /></a>
                <a href="#" className="me-2"
                  ><img
                    className="social follow"
                    src="src/assets/images/mdi_twitter.png"
                    alt="twitter"
                /></a>
              </div>
            </div>

            <p className="m-0">© 2024 Talentron. All rights reserved</p>

            <a href="#" className="text-decoration-none text-white"
              >Privacy Policy</a
            >
          </div>
        </div>

        <ScrollToTopButton />
      </div>
    </footer>
  );
};

export default Footer;