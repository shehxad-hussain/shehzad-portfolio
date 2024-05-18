import React from 'react'

function Header() {
  return (
    <div className=' py-5'>
      <div className="container mx-auto">
        <div className='flex gap-2 p-2 justify-between items-center'>
          <div className='flex flex-col gap-0 '>
            <h1 className='text-gradient text-2xl md:text-4xl font-bold font-secondary'>Shehzad</h1>
          </div>
          <a href="https://www.upwork.com/freelancers/~01bb1fa6c6d2c290c8?mp_source=share">
            <button className='btn btn-lg '>Work With Me</button>
           </a>
        </div>
      </div>
    </div>
  )
}

export default Header
