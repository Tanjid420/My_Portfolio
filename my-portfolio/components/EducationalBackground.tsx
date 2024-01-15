import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Ed_School from "../Education/Ed_School";
import Ed_College from "../Education/Ed_College";
import Ed_University from "../Education/Ed_University";


const Experience = () => {
  const [School, setSchool] = useState(true);
  const [College, setCollege] = useState(false);
  const [University, setUniversity] = useState(false);


  const handleSchool = () => {
    setSchool(true);
    setCollege(false);
    setUniversity(false);
    
  };

  const handleCollege = () => {
    setSchool(false);
    setCollege(true);
    setUniversity(false);
    
  };

  const handleUniversity = () => {
    setSchool(false);
    setCollege(false);
    setUniversity(true);
    
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleSchool}
            className={`${
              School
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            School
          </li>
          <li
            onClick={handleCollege}
            className={`${
              College
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            College
          </li>
          <li
            onClick={handleUniversity}
            className={`${
              University
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            University
          </li>
        </ul>
        {School && <Ed_School />}
        {College && <Ed_College />}
        {University && <Ed_University />}
      </div>
    </section>
  );
};

export default Experience;