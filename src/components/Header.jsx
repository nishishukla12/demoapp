import React from 'react'
import Logo from '../assets/logo.png';
import language from '../assets/language.png';
import { FiChevronRight } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
  return (
    <>
      <div class="header wrapper">
        <img src={Logo} alt="" />
        <div class="header-right">
          <a class="active" href="#home">Home</a>
          <a href="#jobs">My Jobs</a>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
          <form>
            <select name="cars" id="cars">
              <option value="volvo">For Employer</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </form>
          <form className='langform'> <img src={language} />  <select>
            <option value="0">EN</option>
            <option value="1">EN</option>
            <option value="2">FR</option>
          </select>
            < FiChevronRight />
          </form>
        </div>
        <span> <AiOutlineMenu /></span>
      </div>
    </>
  )
}

export default Header