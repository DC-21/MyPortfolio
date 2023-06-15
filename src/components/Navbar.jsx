import React, { useState } from 'react'
import logo from '../images/logo.png'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(!open)
  }
  return (
    <div className='flex w-full px-4 md:px-8 py-4 items-center justify-between' style={{background: '#cccfb2'}}>
      <div className='flex gap-1 items-center'>
        <img src={logo} alt='Logo' className='h-[28px] w-[64px]' style={{background: '#cccfb2'}}/>
      </div>
      <ul className='md:flex hidden gap-6'>
        <li>
          <a href=''>Home</a>
        </li>
        <li>
          <a href=''>Projects</a>
        </li>
        <li>
          <a href=''>About</a>
        </li>
      </ul>
      <button class="button md:flex hidden">
        <svg class="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
        Hire Me
      </button>
      <div onClick={handleMenu}>
        {open?<svg
          viewBox="0 0 470 1000"
          fill="currentColor"
          height="1.5em"
          width="1.5em"
        >
          <path d="M452 656c12 12 18 26.333 18 43s-6 31-18 43c-12 10.667-26.333 16-43 16s-31-5.333-43-16L234 590 102 742c-12 10.667-26.333 16-43 16s-31-5.333-43-16C5.333 730 0 715.667 0 699s5.333-31 16-43l138-156L16 342C5.333 330 0 315.667 0 299s5.333-31 16-43c12-10.667 26.333-16 43-16s31 5.333 43 16l132 152 132-152c12-10.667 26.333-16 43-16s31 5.333 43 16c12 12 18 26.333 18 43s-6 31-18 43L314 500l138 156" />
        </svg> :
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1.5em"
            width="1.5em"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>}
          {open ? <ul className='absolute right-0 gap-6'>
        <li>
          <a href=''>Home</a>
        </li>
        <li>
          <a href=''>Projects</a>
        </li>
        <li>
          <a href=''>About</a>
        </li>
      </ul>:null}
      </div>
    </div>
  )
}

export default Navbar
