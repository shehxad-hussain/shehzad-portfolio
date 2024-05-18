import React,{useEffect} from 'react'
import {BsArrowUpRight} from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Services() {



  useEffect(() => {
    AOS.init({
       
      easing: 'ease-in-out'
    });
  }, []);
  const services =[
    {
      name:"Front End",
      text:"I can deal with all front end templates and convert them to websites by React js and other ways and Receive Data from apis."
    },
    {
      name:"UIUX Design",
      text:"I has some Experience in making ui_ux templates and Marketing them."
    },
    {
      name:"Back End",
      text:"I can also handle backend projects, create various databases, and pass them to frontend developers to display the data."
    },
    {
      name:"Full Stack",
      text:"Fianlly Because I had the knowledge of Back-End And Front-End languages together I Now as Full Stack."
    },
  ]
  return (
    <section id='services' className='section mt-40'>
  <div className='container mx-auto p-5'>
    <div className='flex flex-col lg:flex-row'>
      <div   data-aos="zoom-in" data-aos-duration='2000' className='flex-1 bg-services bg-bottom bg-no-repeat mix-blend-lighten mb-16 lg:mb-0'>
        <h2 className='h2 text-accent mb-6 font-bold'>What I Do </h2>
        <h3 className='h3 max-w-[455px]  mb-16'>Hello everybody, my name is Shehzad Hussain. I am a Front End Developer with three years of experience, currently studying at University for Information Technology in the 4th grade</h3>
      <button className='btn btn-sm'>See my work</button>
      </div>
      <div  data-aos="flip-right" data-aos-duration='2000' className='flex-1'>
        <div>
        {services.map((service ,index)=>(
           <div className='flex border-b border-white/20 h-[146px] mb-[32px]' key={index}>
            <div className='max-w-[476px]'>
              <h4 className='text-[20px] tracking-wider font-secondary font-semibold'>{service.name}</h4>
              <p className=' font-secondary leading-tight'>{service.text}</p>
            </div>
            <div className='flex flex-col flex-1 items-end'>
              <a href="#!" className='btn w-10 h-10 mb-[40px] flex justify-center items-center'>
                <BsArrowUpRight/>
              </a>
              <a href="#!" className='text-gradient text-base'>Learn more</a>
            </div>
           </div>
        ))}
      </div>
      </div>
    </div>
  </div>
    </section>
  )
}

export default Services
