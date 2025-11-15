import React, { memo, useMemo } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// ------------------------------
// STATIC STYLES (prevents re-renders)
// ------------------------------
const contentStyle = {
  background: "#1d1836",
  color: "#fff",
};

const arrowStyle = {
  borderRight: "7px solid  #232631",
};

// ------------------------------
// EXPERIENCE CARD (MEMOIZED)
// ------------------------------
const ExperienceCard = memo(({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={contentStyle}
      contentArrowStyle={arrowStyle}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            loading="lazy"
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold m-0">
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, idx) => (
          <li
            key={`xp-point-${idx}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
});

// ------------------------------
// EXPERIENCE SECTION
// ------------------------------
const Experience = () => {
  const memoTextAnim = useMemo(() => textVariant(), []);

  return (
    <>
      <motion.div variants={memoTextAnim}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((exp) => (
            <ExperienceCard key={exp.title} experience={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
