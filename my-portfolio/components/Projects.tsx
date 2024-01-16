// import { amazonImg, cyberImg, noorShop } from "@/public/assets";
"use client"
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";
import {motion} from "framer-motion"
import { dictionary,hospital,ecommerce } from "@/public";

const Projects = () => {
  return (
    <motion.section
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 , y:"-10%"}}
     transition={{ duration:0.5 , delay: .5 }}
     id="project" className="max-w-container mx-auto lgl:px-20 py-24 ml-[3rem]">
      <SectionTitle title="Projects" titleNo="03" />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row ml-[3rem] gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/Tanjid420/Dictionary_Traversal"
            target="_blank"
          >
            <div className="h-[360px] w-[550px] pt-[4rem]">
              <Image
                className="w-full h-full object-contain"
                src={dictionary}
                alt="dictionary"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Dictionary_Traversal</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
            A platform where using a page's url one can find the words and their meaning 
            that you might not know and many more fun things.{" "}
              <span className="text-textGreen">Hovering 
              </span> those highlighted words it will show the 
              <span className="text-textGreen"> meaning of those words</span>, with <span className="text-textGreen">synonyms</span> and if possilbe
               it will use pictures for
               better understanding and also use reference of different sites for better learning those words.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Tanjid420/Dictionary_Traversal"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://youtu.be/WzMtRfzkP-Q"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://nextamazon.reactbd.com/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse ml-[3rem] mr-[2.9rem] gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/Arnob2018331024/ActionFigureBank_NextJS_E-commerce_Project"
            target="_blank"
          >
            <div className="h-[300px] w-[520px]">
              <Image
                className="w-full h-full object-contain"
                src={ecommerce}
                alt="ecommerce"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">ActionFigure Bank</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
            This is an <span className="text-textGreen">E-commerce</span> website which sells action figures. The products are supplied by the 
            supplier after its corresponding charges are transacted via the bank from the e-commerce
            organisation. A user can buy any amount of these products from the e-commerce website
            after making a successful transaction via the bank.{" "}
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Nextjs</li>
              <li>Nodejs</li>
              <li>MongoDB</li>
              <li>Tailwind CSS</li>
             
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Arnob2018331024/ActionFigureBank_NextJS_E-commerce_Project"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://youtu.be/49Fx963su1I"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://www.noormohmmad.com/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row ml-[3rem] gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/Tanjid420/Hospital-Management-System"
            target="_blank"
          >
            <div className="h-[300px] w-[520px]">
              <Image
                className="w-full h-full object-contain"
                src={hospital}
                alt="hospital"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Hospital-Management-System</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
            Hospital Management System is an online management system that is used to manage the hospital. 
            It can actually maintain any appointment between any patients and doctors.When which room or
            OT will be used, billing system and many more.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Reactjs</li>
              <li>Nodejs</li>
              <li>MySQL</li>
              
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Tanjid420/Hospital-Management-System"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://youtu.be/fi0nQc25xAw"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://noorshop.netlify.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
      </div>
    </motion.section>
  );
};

export default Projects;