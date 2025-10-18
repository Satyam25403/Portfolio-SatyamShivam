import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { github } from "../assests/assets.js";
import { fadeIn, textVariant } from "../utils/motion.js";
import { projects } from "../constants";
import { styles } from "../styles.js";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="flex-1 h-full"
  >
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.22}
      glareColor="#a78bfa"
      glarePosition="all"
      perspective={1000}
      scale={1.03}
      transitionSpeed={450}
      className="relative from-[#7C3AED]/10 via-[#8B5CF6]/20 to-[#6D28D9]/10 border border-[#8B5CF6]/20 rounded-2xl sm:w-[360px] w-full shadow-md flex flex-col h-full bg-gradient-to-b transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(168,139,250,0.45)]"
    >
      {/* Purple Shine Overlay */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 hover:opacity-90 transition-opacity duration-500 z-10"
        style={{
          background:
            "linear-gradient(120deg, rgba(168,139,250,0.18) 0%, rgba(236,217,255,0.10) 80%)"
        }}
      />
      {/* Card Content */}
      <div className="relative z-20 flex flex-col h-full">
        {/* Project Image */}
        <div className="relative w-full h-[230px] p-4">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="w-full h-[1px] bg-white/10" />
        {/* Title, Description, Tech Stack */}
        <div className="flex flex-col flex-1 px-6 py-4">
          {/* This grows to fill empty space */}
          <div className="flex-1 flex flex-col">
            <h3 className="text-white font-bold text-[24px] mb-3">{name}</h3>
            <p className="mt-4 text-secondary text-[14px]">{description}</p>
          </div>
          {/* Tags fixed at bottom by flex layout, use mb-4 for consistent spacing from bottom */}
          <div className="mt-6 mb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${tag.name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Tilt>
  </motion.div>
);


const Works = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>My work</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>
    </motion.div>
    <div className="w-full flex">
      <motion.p
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Following projects showcase my skills and experience through
        real-world examples of my work. Each project is briefly described with
        links to code repositories and live demos in it. It reflects my
        ability to solve complex problems, work with different technologies,
        and manage projects effectively.
      </motion.p>
    </div>
    {/* This wrapper ensures all cards are equal height */}
    <div className="mt-20 flex flex-wrap gap-7 items-stretch">
      {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`} index={index} {...project} />
      ))}
    </div>
  </>
);

export default Works;

