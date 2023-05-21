import React, { useEffect} from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  useEffect(()=>{
    window.scroll(0,0)
  },[])
  return (
    <>
      <div className="container-fluid home-container">
        <div className="container">
          <div className="row home-hero-sec">
            <div className="col-12">
              <h1>
                Unleash the Power of <br /> React !
              </h1>
              <h4>Building Dynamic and Immersive Web Experiences</h4>
              <p>
                Discover the limitless potential of ReactJS as we delve into the
                world of interactive web development. Join us on a journey to
                create captivating user interfaces that bring your ideas to
                life...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid project-container">
        <div className="container">
          <div className="row">
            <h1>Projects</h1>
            <div className="col-xs-12 col-sm-6 col-md-4 mt-5">
              <div className="card">
                <img src={"https://res.cloudinary.com/dzp1h3ybu/image/upload/v1684684316/projects_y5zqwt.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Instagram Clone MERN</h5>
                  <p className="card-text">
                    This project features user registration and login with JWT
                    authentication, with the main functionality allowing users
                    to follow or unfollow other users on the app. The app
                    displays a list of users on the dashboard sourced from a
                    REST API, with MongoDb database using Mongoose Atlas or
                    Compass.
                  </p>
                  <Link className="card-btn" to="https://github.com/govindrajmohan/instaclonemern" target="_blank">View on Github</Link>
                </div>
              </div>
              
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 mt-5">
              <div className="card">
                <img src={"https://res.cloudinary.com/dzp1h3ybu/image/upload/v1684684316/projects_y5zqwt.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Netflix Clone ReactJs</h5>
                  <p className="card-text">
                  I have developed a ReactJS application that utilizes the Movie DB API to showcase various movie categories such as top-rated, now playing, latest releases, and upcoming films. Users can browse through these categories and click on a movie to be redirected to its dedicated description page.
                  </p>
                  <Link className="card-btn" to="/netflix">View</Link>
                </div>
              </div>
              
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 mt-5">
              <div className="card">
                <img src={"https://res.cloudinary.com/dzp1h3ybu/image/upload/v1684684316/projects_y5zqwt.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Healthcare Management MERN</h5>
                  <p className="card-text">
                  This projects utilize Google login authentication with Passport.js and display patient records on the dashboard from a REST API, with MongoDb database using Mongoose Atlas or Compass.
                  </p>
                  <Link className="card-btn" to="https://github.com/govindrajmohan/healthcareClient" target="_blank">View on Github</Link>
                </div>
              </div>
              
            </div>
         
            <div className="col-xs-12 col-sm-6 col-md-4 mt-5">
              <div className="card">
                <img src={"https://res.cloudinary.com/dzp1h3ybu/image/upload/v1684684316/projects_y5zqwt.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">JIRA DASHBOARD MERN</h5>
                  <p className="card-text">
                  This projects utilize GitHub login authentication with Passport.js and display JIRA UI on the dashboard from a REST API, with MongoDb database using Mongoose Atlas or Compass.
                  </p>
                  <Link className="card-btn" to="https://github.com/govindrajmohan/githubJIRACLIENT" target="_blank">View on Github</Link>
                </div>
              </div>
              
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 mt-5">
              <div className="card">
                <img src={"https://res.cloudinary.com/dzp1h3ybu/image/upload/v1684684316/projects_y5zqwt.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Todo Application ReactJs</h5>
                  <p className="card-text">
                  I have created a Todo application using ReactJS, which includes basic CRUD (Create, Read, Update, Delete) functionality. Users can add new tasks, view their existing todos, update task details, and delete tasks as needed.
                  </p>
                  <Link className="card-btn" to="/todo" >View</Link>
                </div>
              </div>
              
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 mt-5">
              <div className="card">
                <img src={"https://res.cloudinary.com/dzp1h3ybu/image/upload/v1684684316/projects_y5zqwt.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">GitHub User Finder ReactJs</h5>
                  <p className="card-text">
                  As a ReactJS developer, I have built a GitHub user finder application. The application takes input as a username present on GitHub and searches for that user on GitHub using the GitHub API.
                  </p>
                  <Link className="card-btn" to="https://github-user-app-kappa.vercel.app/" target="_blank">View</Link>
                </div>
              </div>
              
            </div>
           
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default Home;
