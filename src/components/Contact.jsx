import React, { useRef, useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// ------------------------------
// STATIC ANIMATION
// ------------------------------
const sentAnim = {
  scale: [1, 1.1, 1],
};

const Contact = () => {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [buttonText, setButtonText] = useState("Send");
  const [loading, setLoading] = useState(false);

  // ------------------------------
  // INPUT CHANGE HANDLER (MEMOIZED)
  // ------------------------------
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  // ------------------------------
  // SUBMIT HANDLER
  // ------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setButtonText("Sending...");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setButtonText("Sended ✅");
      setForm({ name: "", email: "", message: "" });
      setLoading(false);

      setTimeout(() => setButtonText("Send"), 1500);
    } catch (err) {
      console.error("❌ EmailJS Error:", err);
      setButtonText("Failed ❌");
      setLoading(false);

      setTimeout(() => setButtonText("Send"), 1500);
    }
  };

  // ------------------------------
  // MEMOIZED SLIDE VARIANTS
  // ------------------------------
  const leftAnim = useMemo(() => slideIn("left", "tween", 0.2, 1), []);
  const rightAnim = useMemo(() => slideIn("right", "tween", 0.2, 1), []);

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      
      {/* ---------- LEFT: FORM ---------- */}
      <motion.div
        variants={leftAnim}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            animate={
              buttonText === "Sended ✅"
                ? sentAnim
                : buttonText === "Failed ❌"
                ? { scale: [1, 0.9, 1] }
                : { scale: 1 }
            }
            transition={{ duration: 0.4 }}
            className="py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            style={{
              backgroundColor:
                buttonText === "Sended ✅"
                  ? "#22c55e"
                  : buttonText === "Failed ❌"
                  ? "#ef4444"
                  : "#1e293b",
            }}
          >
            {buttonText}
          </motion.button>
        </form>

        {/* ---------- SOCIAL LINKS ---------- */}
        <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://github.com/adarshdarokar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#6e5494] transition-colors duration-300 text-3xl"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/adarshdarokar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#0077b5] transition-colors duration-300 text-3xl"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:adarshdarokar55@gmail.com"
            className="text-white hover:text-[#ea4335] transition-colors duration-300 text-3xl"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>

      {/* ---------- RIGHT: 3D EARTH ---------- */}
      <motion.div
        variants={rightAnim}
        className="xl:flex-1 xl:h-[520px] md:h-[450px] h-[300px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
