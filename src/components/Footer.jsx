import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import {
    FaWhatsapp,
    FaEnvelope,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='container-fluid footer-main'>
        <div className="container">
            <footer>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 footer-content-menu mt-4">
                            <ul className='menu-links'>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/todo">Todo App</Link>
                                </li>
                                <li>
                                    <Link to="/netflix">Netflix App</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                            </ul>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 footer-content-links mt-4">
                            <ul className='social-links'>
                                <li>
                                    <Link to="https://pk.linkedin.com/in/govindrajmohan" target="_blank" ><FaLinkedin/></Link>
                                </li>
                                <li>
                                    <Link to="https://github.com/govindrajmohan?tab=repositories" target="_blank"><FaGithub/></Link>
                                </li>
                                <li >
                                    <Link to="https://api.whatsapp.com/send?phone=923350040022" target="_blank" ><FaWhatsapp/></Link>
                                </li>
                                <li>
                                    <Link  to="mailto:govindmohan144@gmail.com" target='_blank'><FaEnvelope/></Link>
                                </li>
                               
                            </ul>
                    </div>
                </div>
            </footer>
        </div>
    </div>
  )
}

export default Footer