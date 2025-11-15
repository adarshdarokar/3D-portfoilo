import React, { memo, useMemo } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// ------------------------------
// STATIC TILT SETTINGS (prevents re-renders)
// ------------------------------
const tiltOptions = {
  max: 45,
  scale: 1,
  speed: 450,
};

// ------------------------------
// SERVICE CARD (MEMOIZED)
// ------------------------------
const ServiceCard = memo(({ index, title, icon }) => {
  const fadeAnim = useMemo(
    () => fadeIn("right", "spring", index * 0.5, 0.75),
    [index]
  );

  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeAnim}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={tiltOptions}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] 
                     flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='service-icon'
            loading='lazy'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
});

// ------------------------------
// ABOUT SECTION
// ------------------------------
const About = () => {
  const textAnim = useMemo(() => textVariant(), []);
  const fadeAnim = useMemo(() => fadeIn("", "", 0.1, 1), []);

  return (
    <>
      <motion.div variants={textAnim}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeAnim}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I’M A MERN STACK DEVELOPER SKILLED IN MONGODB, EXPRESS.JS, REACT, AND NODE.JS.
        I USE JAVASCRIPT AND TYPESCRIPT TO BUILD FAST, SCALABLE, AND USER-FRIENDLY WEB APPLICATIONS.
        I LOVE TURNING IDEAS INTO REAL PRODUCTS AND CREATING SOLUTIONS THAT MAKE AN IMPACT.
        ALWAYS EXPLORING NEW TECHNOLOGIES TO BUILD BETTER AND SMARTER DIGITAL EXPERIENCES!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
