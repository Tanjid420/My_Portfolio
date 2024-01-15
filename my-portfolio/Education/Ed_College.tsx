import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Ed_College = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        
        <span className="text-textGreen tracking-wide">NotreDame College</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        2016 to 2018
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          HSC: <span className="text-textGreen">GPA-5.00</span>
        </li>
        
      </ul>
    </motion.div>
  );
};

export default Ed_College;