import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  siteLink,
}) => {
  return (
    <motion.div variants={fadeIn("up", "string", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[200px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          {source_code_link ? (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-6 mb-6 flex ">
          <a href={siteLink} target="_blank">
            <h3 className="bg-black-200 p-4 text-white font-[500] text-[18px]  rounded-2xl">
              View
            </h3>
          </a>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 ">
          {tags.map((tag) => (
            <div className={`bg-black-100 rounded-2xl`}>
              <p key={tag.name} className={`p-4 text-[12px] ${tag.color}`}>
                {tag.name}
              </p>
            </div>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Projects I have made</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0, 1, 1)}
          className="mt-3 text-secondary 
        text-[17px] max-w-3xl leading-[30px]"
        >
          Welcome to my full stack developer portfolio! As a full stack
          developer, I have a passion for building web applications from the
          ground up. From designing user interfaces to implementing back-end
          functionality, I strive to create seamless and intuitive experiences
          for users. This portfolio showcases some of the projects I have worked
          on, highlighting my technical skills and demonstrating my ability to
          deliver high-quality products that meet client needs.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((projects, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...projects} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");
