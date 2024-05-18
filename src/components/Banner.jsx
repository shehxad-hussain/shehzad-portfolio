import React, { useEffect } from "react";
import avatar from "../assets/avatar.png";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

import AOS from "aos";
import "aos/dist/aos.css";
import { FaDev } from "react-icons/fa6";

function Banner() {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
    });
  }, []);
  return (
    <section
      id="home"
      className="min-h-[85vh] lg:min-h-[75vh] flex items-center"
    >
      <div className="container mx-auto p-5 ">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div
            data-aos="fade-right"
            data-aos-duration="1400"
            className="flex-1 text-center lg:text-start font-secondary"
          >
            <h1 className="text-3xl font-bold leading-[0.8] lg:text-5xl ">
              Shehzad <span>Hussain </span>
            </h1>

            <div className="text-2xl  mb-8 lg:text-4xl font-secondary font-semibold uppercase leading-[1]">
              <span className="mr-4 text-white">I am a </span>
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "Front-End Developer",
                  2000,
                  "Full-Stack Developer",
                  2000,
                ]}
                speed={50}
                className="text-gradient"
                wrapper="span"
                repeat={Infinity}
              />
            </div>

            <p className="mb-12 max-w-lg mx-auto lg:mx-0">
              Experienced frontend developer skilled in crafting engaging and
              user-friendly web experiences. Proficient in Javascript,Typescript
              and React Js to create seamless interfaces.
            </p>

            <div className="flex max-w-max lg:mx-0 mx-auto  gap-x-6 items-center mb-16">
              <a
                href="/Shehzad-Hussain cv.pdf"  
                target="_blank"
              >
                <button className="btn btn-lg ">Download CV</button>
              </a>
            </div>

            <div className="flex text-2xl max-w-max gap-x-6 mx-auto mb-10 lg:mx-0">
              <a href="https://github.com/shehxad-hussain">
                <FaGithub className="text-white" />
              </a>

              <a href="https://www.linkedin.com/in/shehxadhussain/">
                <FaLinkedin className="text-white" />
              </a>

              <a href="https://dev.to/shehzadhussain">
                <FaDev className="text-white" />
              </a>

              <a href="https://twitter.com/shehxadshehzu">
                <FaTwitter className="text-white" />
              </a>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1400"
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[500px]"
          >
            <img src={avatar} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
