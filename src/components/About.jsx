import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion.js";
import ServiceCard from "./canvas/SpotlightCard";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mt-20 mx-50">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}><span className='text-[#915eFF]'>Overview.</span></h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-50"
      >
        I'm a skilled Full-Stack developer with experience in JavaScript, and
        expertise in frameworks like React, Node.js, and Express.js. I'm a quick
        learner and collaborate closely with clients to create efficient,
        scalable, and user-friendly solutions that solve real-world problems.
        Besides development, i'm a DevOps engineer with strong expertise on
        CI/CD pipelines, containerizing and scaling applications. Let's work
        together to bring your ideas to life!
      </motion.p>


      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>

    </>
  );
};

//higher order component wrapping into a section wrapper: component, id 
// export default SectionWrapper(About, "about");
export default About;
