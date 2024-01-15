
import { RiGithubLine } from "react-icons/ri";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
} from "react-icons/sl";
const LeftSide = () => {
    return (
      <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
        <div className="flex flex-col gap-4">
          <a href="https://github.com/noorjsdivs" target="_blank">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <RiGithubLine />
            </span>
          </a>
         
          <a
            href="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
            target="_blank"
          >
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <SlSocialLinkedin />
            </span>
          </a>
          <a href="https://www.facebook.com/Noorlalu143/" target="_blank">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <SlSocialFacebook />
            </span>
          </a>
          
        </div>
        <div className="w-[2px] h-32 bg-textDark"></div>
      </div>
    );
  };
  
  export default LeftSide;
