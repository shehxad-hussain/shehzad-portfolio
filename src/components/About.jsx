import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import myAbout from '../assets/Untitled design.png';

function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section id="about" className="section lg:mb-0 mb-40" ref={ref}>
      <div className="container mx-auto p-5">
        <div className="flex flex-col lg:flex-row gap-y-10 lg:items-center lg:gap-x-20 lg:gap-y-0 min-h-screen">
          <div data-aos="fade-right" data-aos-duration="2000" className="flex-1 flex items-center justify-center">
            <img
              src={myAbout}
              alt="About"
              className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-md"
            />
          </div>
          <div data-aos="fade-down" data-aos-duration="2000" className="flex-1">
            <h2 className="h2 text-4xl text-accent font-bold">About Me</h2>
            <h3 className="text-xl lg:text-2xl mb-5">
              Hello everybody, my name is Shehzad Hussain. I am a Front End
              Developer with three years of experience, currently studying at
              University for Information Technology in the 4th grade.
            </h3>
            <p className="text-sm lg:text-base mb-8">
              Throughout my journey, I have completed numerous projects using
              front-end languages, showcasing my skills and dedication. You can
              explore these projects in the portfolio section. Feel free to
              reach out to me through the contact section, where I have provided
              links to my social media accounts. If you need a developer, I'd
              love to connect!
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12 mt-5">
              <div>
                <div className="text-[40px] font-secondary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={8} /> : null}
                </div>
                <div className="font-secondary text-md tracking-[1px]">
                  years of <br /> Learning
                </div>
              </div>
              <div>
                <div className="text-[40px] font-secondary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={20} duration={8} /> : null} +
                </div>
                <div className="font-secondary text-md tracking-[1px]">
                  Projects <br /> completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-secondary text-gradient mb-2">
                  {inView ? <CountUp start={100} end={1} duration={5} /> : null} 5 +
                </div>
                <div className="font-secondary text-md tracking-[1px]">
                  Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <a href="#contact">
                <button className="btn btn-lg h-full p-4 text-xl">
                  Contact With Me
                </button>
              </a>
              <a
                href="https://react-portfolio-seven-pink.vercel.app/"
                className="text-gradient btn-link text-2xl"
              >
                My portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
