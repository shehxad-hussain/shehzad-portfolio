import React from 'react'
import { BiUser , BiHomeAlt } from 'react-icons/bi';
import { BsClipboard ,BsBriefcase ,BsChatSquare } from 'react-icons/bs';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className="container mx-auto">
        <div className='bg-black/20 w-full h-[100px] backdrop-blur-2xl mx-auto rounded-full max-w-[500px] px-5 flex justify-between text-white/50 text-2xl items-center'>
          <Link  to='home' activeClass='active' smooth={true} spy={true} className= ' cursor-pointer w-[60px] h-[60px] flex justify-center items-center'>
          <BiHomeAlt/>
          </Link>
          <Link  to='about' activeClass='active' smooth={true} spy={true} className= ' cursor-pointer w-[60px] h-[60px] flex justify-center items-center'>
          <BiUser/>
          </Link>
          <Link  to='services' activeClass='active' smooth={true} spy={true} className= ' cursor-pointer w-[60px] h-[60px] flex justify-center items-center'>
          <BsClipboard/>
          </Link>
          <Link  to='projects' activeClass='active' smooth={true} spy={true} className= ' cursor-pointer w-[60px] h-[60px] flex justify-center items-center'>
          <BsBriefcase/>
          </Link>
          <Link  to='contact' activeClass='active' smooth={true} spy={true} className= ' cursor-pointer w-[60px] h-[60px] flex justify-center items-center'>
          <BsChatSquare/>
          </Link>
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar
