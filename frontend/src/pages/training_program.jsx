import React from "react";
import FormButton from "../components/form_button";
import 'bootstrap/dist/css/bootstrap.min.css';
import FAQItem from '../components/FAQitems';
import "../styles/global.css";
import TabContent from '../components/tabContent'

const TrainingProgramPage = () => {
  return (
    <>
      <main>
        <FormButton/>
        {/* title head - start */}
        <div className="training-program-head-container">
          <div className="dark-background">
            <div className="top-banner">
              <i>
                <img src="src/assets/images/training_partner_img/partners.png" />
              </i>
              <span className="banner-text-style">Programs</span>
            </div>
            <h1 className="section-heading">Hi Candidate !</h1>
            <h1 className="Below-section-heading blue-text">Are you looking for Job?</h1>
            <p className="section-paragraph">
            At Talentron, we make it possible to become a software engineer, data engineer, or software tester.
            </p>
          </div>
        </div>

        {/* title head - End */}

        <TabContent />

        {/* Thriving career at Talentron - start */} 

    <div className="container py-5">
      {/*  Centered Heading Section */} 
      <div className="center-heading">
        <h2 className="headline">Thriving career at Talentron</h2>
        <h5 className="subtitle grey-text">Working on Real time projects</h5>
      </div>

      <div className="row align-items-center">
        {/*  Left Section */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h4 className="fw-bold subheading">Real Time Projects</h4>
          <p className="subtext">
          Our comprehensive courses in <b>Full Stack Development, Frontend Development, Data Engineering, Software Testing, and more open up endless possibilities.</b> Our curriculum covers everything from the basics of programming languages to the latest in Web development, API development, Database design and development, data engineering, and software testing
          </p>
          <div className="career-at-talentron-container">
        <div className="card">
          <div className="card-body">
            <img
              src="src/assets/images/training_program_img/hands-on-project.png"
              alt="Icon"
              className="ms-5 mt-3"
            />
            <h5 className="card-title">Hands on Project</h5>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <img
              src="src/assets/images/training_program_img/collab-with-peers.png"
              alt="Icon"
              className="ms-5 mt-3"
            />
            <h5 className="card-title">Collab with Peers</h5>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <img
              src="src/assets/images/training_program_img/experi-mentor.png"
              alt="Icon"
              className="ms-5 mt-3"
            />
            <h5 className="card-title">Experienced mentors</h5>
          </div>
        </div>
        </div>
        </div>

        {/*  Right Section */} 
        <div className="col-lg-6">
          <div className="career-overlay-container">
            <img src="src/assets/images/training_program_img/person-front-computer.png" alt="person-front-computer-img" />
            <img src="src/assets/images/training_program_img/165+ projects RT.png" className="bottomRight-img" alt="165+ RT Projects" />
            <img src="src/assets/images/training_program_img/Real-time-exp.png" className="topRight-img" alt="RT exp" />
          </div>
        </div>
      </div>
    </div>

   {/* Thriving career at Talentron - End */} 

         {/* showcasing-portfolio - Start */} 

         <div className="footer-bottom bg-dark bg-gradient text-white pt-2 pb-4">

    <div className="container position-relative py-5">

      <div className="row align-items-center">
        {/*  Left Section */} 
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div className="showcasing-portfolio-overlay-container">
            {/*  Main Image */} 
            <img
              src="src/assets/images/training_program_img/showcasing_portfolio.png"
              alt="showcasing_portfolio_img"
              className="main-image"
            />

            {/*  Top-right Image Overlay */} 
            <img
              src="src/assets/images/training_program_img/resume.png"
              alt="resume-png"
              className="showcasing-portfolio-overlay-top-right"
            />

          {/*  Bottom-right Text Overlay */} 
            {/* <img
              src="src/assets/images/joining.png"
              alt="Join"
              className="showcasing-portfolio-overlay-bottom-right"
            /> */}
          </div>
        </div>

        {/*  Right Section */} 
        <div className="col-lg-6">
          <h4 className="portfolio-sideheading">Showcasing Portfolio</h4>
          <p className="portfolio-context">
          At Talentron, we make it possible to become a software engineer, data engineer, or software tester.
          </p>
          <ul className="list-unstyled">
            <li className="tick-mark portfolio-points mb-2">
              <img src="src/assets/images/about_us_img/white-tick.png" /> You'll be ready to enter the job market.
            </li>
            <li className="tick-mark portfolio-points mb-2">
              <img src="src/assets/images/about_us_img/white-tick.png" /> Opportunities for networking.
            </li>
            <li className="tick-mark portfolio-points mb-2">
              <img src="src/assets/images/about_us_img/white-tick.png" /> Internships with dynamic tech startups.
            </li>
            <li className="tick-mark portfolio-points mb-2">
              <img src="src/assets/images/about_us_img/white-tick.png" /> Gain practical experience.
            </li>
            <li className="tick-mark portfolio-points mb-2">
              <img src="src/assets/images/about_us_img/white-tick.png" /> Tackle complex coding issues
            </li>
            <li className="tick-mark portfolio-points mb-2">
              <img src="src/assets/images/about_us_img/white-tick.png" /> Collaborate with seasoned developers.
            </li>
          </ul>
          <p className="portfolio-context">
          Join Talentron to transform your tech passion into a successful career. Start your journey from dreamer to skilled professional today!
          </p>
        </div>
      </div>
    </div>
    </div>

    {/*  showcasing-portfolio - End */} 

    <div className="container my-4">
      <div className="custom-blue-section">
        <img
          src="src/assets/images/training_program_img/hands-on-project.png"
          alt="Left Icon"
          className="ms-4"
        />
        <p className="below-portfolio">
        Our internships can lead to full-time positions <b>at reputable firms, offering continuous learning opportunities.</b> Over time, specialize in areas like <b>cloud computing and artificial intelligence, becoming a key player in cutting-edge projects.</b>
        </p>
        <img
          src="src/assets/images/training_program_img/collab-with-peers.png"
          alt="Right Icon"
          className="me-4"
        />
      </div>
    </div>


        <FAQItem/>
        </main>
    </>
  );
};

export default TrainingProgramPage;