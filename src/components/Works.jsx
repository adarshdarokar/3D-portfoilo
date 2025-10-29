import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
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
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="transition-all duration-300 ease-in-out"
    >
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        scale={1.02}
        transitionSpeed={2000}
        className="bg-gradient-to-br from-[#1a1a1d] via-[#111] to-[#0a0a0a] p-[1px] rounded-2xl shadow-[0_0_10px_#111] hover:shadow-[0_0_18px_#00f5ff60] relative overflow-hidden group w-[310px] sm:w-[340px]"
      >
        {/* 🔹 Floating gradient aura */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00f5ff40] via-transparent to-[#ff00c840] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />

        <div className="relative z-10 bg-tertiary rounded-2xl p-4">
          {/* 🔹 Project Image */}
          <div className="relative w-full h-[180px] overflow-hidden rounded-xl">
            <motion.img
              src={image}
              alt="project_image"
              className="w-full h-full object-contain rounded-xl bg-[#0f0f0f]"
              whileHover={{ scale: 1.05 }}
            />

            {/* 🔹 Github icon */}
            <div className="absolute inset-0 flex justify-end m-2">
              <motion.div
                onClick={() => window.open(source_code_link, "_blank")}
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="bg-[#111]/60 backdrop-blur-md w-9 h-9 rounded-full flex justify-center items-center cursor-pointer hover:shadow-[0_0_10px_#00f5ff]"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </motion.div>
            </div>
          </div>

          {/* 🔹 Text Content */}
          <div className="mt-4">
            <h3 className="text-white font-bold text-[20px] tracking-wide group-hover:text-[#00f5ff] transition-all duration-300">
              {name}
            </h3>
            <p className="mt-2 text-secondary text-[13px] leading-[20px] group-hover:text-gray-300 transition-all duration-300">
              {description}
            </p>
          </div>

          {/* 🔹 Tags */}
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[12px] ${tag.color} drop-shadow-[0_0_4px_rgba(0,245,255,0.4)]`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[16px] max-w-3xl leading-[26px]"
        >
        Each project below reflects a blend of clean design and efficient development — modern, responsive, and crafted to deliver an exceptional user experience across all devices.
        </motion.p>
      </div>

      {/* 🔹 Cards Grid */}
      <div className="mt-14 flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
