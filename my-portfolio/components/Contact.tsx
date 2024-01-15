import Link from "next/link";
import {motion} from "framer-motion"

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 , y:"-10%"}}
      transition={{ duration:0.5 , delay: .5 }}
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        What’s Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        I’m currently looking for any software engineering internships.
        Whether you have a question, an offer to make or just want to say hi, I’ll
        try my best to get back to you!
      </p>

      <a href="mailto:noor.jsdivs@gmail.com">
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Say Hello
        </button>
      </a>
    </motion.section>
  );
};

export default Contact;