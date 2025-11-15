import React, { useMemo } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

// ------------------------------
// STATIC ANIMATION (Stabilized animation object)
// ------------------------------
const scrollAnimation = {
  y: [0, 24, 0],
};

const scrollTransition = {
  duration: 1.5,
  repeat: Infinity,
  repeatType: "loop",
};

const Hero = () => {
  const memoizedAnim = useMemo(() => scrollAnimation, []);
  const memoizedTransition = useMemo(() => scrollTransition, []);

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div
        className={`absolute inset-0 top-[90px] max-w-8xl mx-auto ${styles.paddingX} flex flex-row items-start gap-6`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Adarsh</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I craft user interfaces, server{" "}
            <br className="sm:block hidden" />
            logics and web applications.
          </p>
        </div>
      </div>

      {/* 3D Canvas */}
      <ComputersCanvas />

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={memoizedAnim}
              transition={memoizedTransition}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
