import React,{useEffect} from 'react'
import img1 from '../assets/gaming.png'
import img2 from '../assets/ferrari.png'
import img3 from '../assets/portfolio.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Projects() {

  useEffect(() => {
    AOS.init({
       
      easing: 'ease-in-out'
    });
  }, []);
  return (
    <section id='projects' className='section'>
      <div className='container mx-auto p-5'>
        <div className='flex items-end flex-col lg:flex-row gap-x-10 '>
          <div  data-aos="fade-right" data-aos-duration='2000' className='flex-1 flex flex-col gap-y-12 mb-12 lg:mb-0'>
            <div className='flex flex-col'>
            <h2 className='h2 font-secondary text-accent leading-tight'>My Latest <br /> Projects</h2>
           <p className='max-w-sm mb-16'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, ipsum laboriosam. Consequuntur ex maxime ut eos aut fugiat aliquam cumque illum ipsum similique, velit esse.
           </p>
           <a href="https://portfolio-one-ecru-41.vercel.app/#Projects"><button className='btn p-4 w-1/3 h-full btn-sm'> View All Projects </button></a>
           </div>
          
         
         
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='cursor-pointer group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration 300'></div>
           
            <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt="" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
            <a href="https://gaming-lilac-kappa.vercel.app/"><span className='text-3xl uppercase text-gradient font-secondary'>Front End Website</span></a>
              </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-800 z-50'>
            <a href="https://gaming-lilac-kappa.vercel.app/"><span className='text-3xl text-white'>Gaming</span></a>
            </div>
          </div>
          </div>

          <div  data-aos="zoom-out" data-aos-duration='2000' className='flex-1 flex flex-col  gap-y-14'>
          
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='cursor-pointer group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration 300'></div>
           
            <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt="" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
            <a href="https://portfolio-one-ecru-41.vercel.app/"><span className='text-3xl uppercase text-gradient font-secondary'>Front End Website</span></a>
              </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-800 z-50'>
            <a href="https://portfolio-one-ecru-41.vercel.app/"><span className='text-3xl text-white'>Portfolio</span></a>
            </div>
          </div>
        
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='cursor-pointer group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration 300'></div>
           
            <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt="" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
            <a href="https://ferrari-eight.vercel.app/"><span className='text-3xl uppercase text-gradient font-secondary cursor-pointer'>Front End Website</span></a>
              </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-800 z-50'>
            <a href="https://ferrari-eight.vercel.app/"><span className='text-3xl text-white'>Ferrari</span></a>
            </div>
          </div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
