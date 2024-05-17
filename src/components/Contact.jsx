import React,{useEffect} from 'react';
import { useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';


function Contact() {

  useEffect(() => {
    AOS.init({
       
      easing: 'ease-in-out'
    });
  }, []);
  const form =useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_evv46ei', 'template_sgi59js', form.current, {
        publicKey: 'NFFLKetnWMG5P3qum',
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log( error.text);
        },
      );
      e.target.reset()
  };

  return (
    <section id='contact' className='lg:section py-16 '>
      <div className='container mx-auto p-5'>

        <div className='flex flex-col lg:flex-row'>


          <div data-aos="flip-up" data-aos-duration='1500' className='flex-1 flex justify-start items-center'>
            <div >
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] md:text-[60px]  lg:text-[80px]  leading-none mb-12'>Let's Work <br />together !</h2>
            </div>
          </div>
          
          <form data-aos="flip-up" data-aos-duration='2500' ref={form} onSubmit={sendEmail} className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
            <input name='user_email' className='bg-transparent   border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' placeholder=' Enter Your Mail' type="text" />
            <input name='user_name'  className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' placeholder=' Enter Your Name' type="text" />
            <textarea name='message' className='resize-none mb-12 bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' placeholder=' Enter Your message'  id="" cols="30" rows="0"></textarea>
            <button className='btn btn-lg' type='submit'>Send messages</button>
          </form>
          

      

        </div>



      </div>
    </section>
  )
}

export default Contact
