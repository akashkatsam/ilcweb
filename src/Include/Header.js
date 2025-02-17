import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import logo from './logosvg.svg'
import logoright from './logos (2).png'
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { motion } from "framer-motion";

import { Menu, X } from "lucide-react";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
    <header>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-2 col-0'></div>
                    <div className='col-md-8 col-8'>
                        <div className='highlights'>
                            <p>Join us in the Journey of <span className='highlighthastag'>#LegendsinAction</span></p>
                        </div>
                    </div>
                    <div className='col-md-2 col-4 p-0'>
                        <div className='socialheader'>
                            <ul>

                         <li>


<Link to="https://www.facebook.com/profile.php?id=61572514630239" target="_blank">
<FaFacebookF className='icon' />
</Link>

                                </li>
                                <li>
                                <Link to="https://www.instagram.com/ilct20/?hl=en" target="_blank">

                                    <FaInstagram className='icon' />
                                    </Link>
                                </li>
                                <li>
                                <Link to="https://www.instagram.com/ilct20/?hl=en" target="_blank">
                                    <FaYoutube className='icon' />
                                    </Link>
                                </li>
                                <li>
                                    <FaLinkedin className='icon' />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>




<div className='desktopmenu'>
<div className='row'>
                    <div className='col-md-2'>
                        <div className='logo'>
                            <Link to="/">
                            <img src={logo} className='img-fluid' />

                            </Link>
                        </div>
                    </div>
                    <div className='col-md-10 p-0'>
                        <div className='centernavitem'>
                            <ul>

                                <li>
                                <Link to="/" onClick={closeMenu}>
                                    Home
                                    </Link>
                                </li>

                                <li><Link to="/about" onClick={closeMenu}>
                                About 
                                </Link>
                                    
                                </li>


                                <li >
                                <Link to="/team" onClick={closeMenu}>
                                    Team
                                    </Link>
                                </li>



                            

                                <li>
                                    
                                    <Link to="/media" onClick={closeMenu}>
                                    Media
                                    </Link>
                                </li>


                                <li>
                                    
                                    <Link to="/media" onClick={closeMenu}>
                                    Matches
                                    </Link>
                                </li>


                                <li>
                                <Link to="/photos" onClick={closeMenu}>
                                    Gallery
                                    </Link>
                                </li>

                                
                                <li>
                                <Link to="/photos" onClick={closeMenu}>
                                    Contact
                                    </Link>
                                </li>

                                <img src={logoright}  className='img-fluid logoright'/>

                            </ul>
                        </div>
                    </div>

                </div>
</div>

                
            </div>
        </header>



<div className="relative Mobilembox">
      {/* Hamburger Button */}
      <div className="row">
        <div className="Mobilemeni">
            <div>
              <Link to="/">
              <img src={logo} className="img-fluid"/>

              </Link>
            </div>
            <div>
            <button onClick={toggleMenu} className="p-2 text-white bg-gray-800 rounded-md">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
            </div>

        </div>

      </div>

      {/* Menu Items */}
      <motion.div
  initial={{ x: "-100%", opacity: 0 }}
  animate={{ x: isOpen ? 0 : "-100%", opacity: isOpen ? 1 : 0 }}
  transition={{ duration: 0.3 }}
  className="absolute left-0 top-12 w-48 bg-humburger shadow-md rounded-lg p-2"
>
  <ul className="space-y-2 text-gray-800">
    <li>
      <Link to="/" onClick={closeMenu}>
        Home
      </Link>
    </li>

    <li>
      <Link to="/about" onClick={closeMenu}>
        About 
      </Link>
    </li>

    <li>
      <Link to="/team" onClick={closeMenu}>
        Team
      </Link>
    </li>

    <li>
      <Link to="/matches" onClick={closeMenu}>
        Matches
      </Link>
    </li>

    <li>
      <Link to="/media" onClick={closeMenu}>
        Media
      </Link>
    </li>

    <li>
      <Link to="/photos" onClick={closeMenu}>
        Gallery
      </Link>
    </li>
  </ul>
</motion.div>

    </div>
</>

  )
}
