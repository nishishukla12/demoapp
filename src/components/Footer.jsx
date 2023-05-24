import React from 'react'
import Logo from '../assets/logo.png';
import { FiInstagram, FiLinkedin, FaRocketchat } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { MdWhatsapp } from "react-icons/md";

function Footer() {
  return (
    <div className='footer_wrapper wrapper'>
      <div className="footer_flex">
        <div className='footer_left'>
          <img src={Logo} alt="" />
          <ul>
            <li><a href="#">Followus on</a></li>
            <li><FiInstagram /></li>
            <li><FiLinkedin /></li>
          </ul>
        </div>
        <div className="footer_right">
          <ul>
            <li><a href="#">Connect with us</a></li>
            <li><a href="#"><GoMail />info@orbitjob.in</a></li>
            <li><a href='#'><MdWhatsapp />123-3434-123</a></li>
          </ul>
          <ul>
            <li><a href="#">Terms and Condition</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Faq</a></li>
          </ul>
          <ul>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">For Jobseekers</a></li>
            <li><a href="#">For Employers</a></li>
          </ul>
        </div>
      </div>
      <div className="footer_bottom">
        <p>@2022 <span>orbit job</span>All right reserved</p>
      </div>
    </div>
  )
}

export default Footer
