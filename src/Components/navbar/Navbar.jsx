import React, { useState } from 'react'
import logo from '../../assets/logo.svg';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css'

const Menu=()=>(
  <>
  <p><a href="/">Home</a></p>
              <p><a href="/">What is GPT3?</a></p>
              <p><a href="/">Open AI</a></p>
              <p><a href="/">Case Studies</a></p>
              <p><a href="/">Library</a></p>
  </>
    )
const Navbar = () => {
  const [toggle,setToggle]=useState('false');

    
  
  return (
    <div>
      <div className='gpt3__navbar'>
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <img src={logo} alt="logo" srcset="" />
          </div>
          <div className='gpt3__navbar-links-container'>
            <Menu/>
          </div>
        </div>
        <div className='gpt3__navbar_sign'>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
        </div>
        <div className='gpt3__navbar-menu'>
          {toggle?<RiCloseLine color='#fff' size={27} onClick={()=>setToggle(false)}/>
          :<RiMenu3Line color='#fff' size={27} onClick={()=>setToggle(true)}/>
          }
          {toggle && (
            <div className='gpt3__navbar-menu-links scale-up-center'>
              <div className="gpt3__navbar-menu-links_container">
              <Menu/>
              <div className='gpt3__navbar-menu_conatiner-link-sign'>
                 <p>Sign in</p>
                  <button type='button'>Sign up</button>
               </div>
              </div>
              
              </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
