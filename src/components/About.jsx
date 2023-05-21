import React from "react";
import "./About.css"
import { Link } from "react-router-dom";
import {
  FaArrowRight,
} from "react-icons/fa";


export const About = () => {
  return (
    <div className="about">
     <div className="container-fluid about-container">
        <div className="container">
          <div className="row about-hero-sec">
            <div className="col-12 text-center">
              <h1>
                ReactJs | MERN <br /> Developer
              </h1>
              <h4>Govind Mohan</h4>
            </div>
          </div>
        </div>
      </div>

    <div className="container-fluid about-edu">
      <div className="container">
        <div className="row grad">

          <div className="col-sm-12 col-md-6 grad-img">
            <img src={"https://res.cloudinary.com/dzp1h3ybu/image/upload/v1684684391/graduation_ldxopk.jpg"} alt="graduation-cap" />
          </div>
          <div className="col-sm-12 col-md-6 grad-content" >
              <h1>Graduate From</h1>
              
              <h4>Bahria University Karachi</h4>
              <h4> Department Computer Science</h4>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid dev-content">
      <div className="container">
        <div className="row">
          <h4>Professional Work Experience </h4>
          <p> <FaArrowRight/> I worked as a WordPress Developer for 2 years at Symbiant Systems.</p>
          <p><FaArrowRight/>  I also worked as a Frontend Developer Intern at Matz Solutions Pvt.</p>
          <p> <FaArrowRight/>  Completed a 3-month Training as a MERN Stack Developer  at Contour Software
            ( Provided by P@SHA, PSEB and TechLift.pk )
</p>

        </div>
      </div>
    </div>
    <div className="container-fluid tech-container">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Technical Skills</h2>
            <h3>Web Technologies</h3>
            <p>React.js, Node.js, Express.js, HTML5, CSS3, Bootstrap, jQuery, JavaScript, WordPress.</p>
            <h3>Database</h3>
            <p>MongoDB, MySQL, Microsoft SQL Server, Firebase.</p>
            <h3>Tools:</h3>
            <p>Visual Studio, Visual Code Studio, Adobe Illustrator, Adobe Photoshop, Net Beans.</p>
          </div>
          
        </div>
      </div>
    </div>

    <div className="container-fluid dev-content">
      <div className="container">
        <div className="row">
          <h4>As a skilled ReactJS developer</h4>
          <p>I am passionate about crafting cutting-edge web experiences that captivate users. With a keen eye for detail and a strong focus on code quality, I thrive in creating elegant and efficient solutions. With a solid foundation in frontend development, I bring expertise in building dynamic user interfaces and implementing responsive designs...</p>
        </div>
      </div>
    </div>
<div className="container-fluid tech-container">
  <div className="container">
  <h3 className="mb-3">To view my Projects </h3>
  <Link to="/"><FaArrowRight/> Click Here</Link>
  </div>
</div>
   
    <br />
    </div>

  
  );
};
