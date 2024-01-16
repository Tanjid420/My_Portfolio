// import { profileImg } from "@/public/assets";
"use client"
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import { profileImg } from "@/public";
import {motion} from "framer-motion"




const About = () => {

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 , y:"-10%"}}
      transition={{ duration:0.5 , delay: .5 }}
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
          Hey there! 👋 I am a passionate frontend developer who thrives on bringing digital visions to life.
          My playground is the frontend of websites, where I sculpt user interfaces with creativity and 
          precision. A rapid learner at heart, I dive headfirst into the latest technologies, always 
          hungry for new challenges.
          </p>
          <p>
           Though my professional journey is just beginning, my dedication speaks volumes. I may not
           have a wealth of experience, but I make up for it with an insatiable curiosity and a 
           commitment to mastering the craft. My love for clean, intuitive design fuels my work, 
           and my analytical skills ensure I deliver not just code, but solutions.{" "}
            
          </p>
          <p>
           Ready to embark on a journey of continuous growth, I eagerly embrace every
           opportunity to enhance my skills. If you are looking for a frontend enthusiast with a knack 
           for learning and an eye for detail, you have landed on the right page. Lets build the future, 
           one line of code at a time! 🚀
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Express.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MySQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Tailwindcss
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-transparent rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;