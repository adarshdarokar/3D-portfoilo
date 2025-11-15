import React, { useRef, useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const sentAnim = { scale: [1, 1.1, 1] };

const Contact = () => {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [buttonText, setButtonText] = useState("Send");
  const [loading, setLoading] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setButtonText("Sending...");

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      setButtonText("Sended ✅");
      setForm({ name: "", email: "", message: "" });
      setLoading(false);

      setTimeout(() => setButtonText("Send"), 1400);
    } catch (err) {
      console.error("❌ Error:", err);
      setButtonText("Failed ❌");
      setLoading(false);

      setTimeout(() => setButtonText("Send"), 1500);
    }
  };

  const leftAnim = useMemo(() => slideIn("left", "tween", 0.15, 0.9), []);
  const rightAnim = useMemo(() => slideIn("right", "tween", 0.15, 0.9), []);

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">

      {/* ---------- LEFT: FORM ---------- */}
      <motion.div
        variants={leftAnim}
        initial="hidden"
        animate="show"
        className="
          flex-[0.75] 
          bg-black-100 
          p-6               /* UPDATED: smaller padding */
          rounded-2xl 
          max-w-[600px]     /* UPDATED: wider form */
          w-full 
          mx-auto
        "
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-6"   /* UPDATED: smaller vertical gap */
        >

          {/* Name */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="
                bg-tertiary 
                py-3 px-5          /* UPDATED: smaller height */
                placeholder:text-secondary 
                text-white 
                rounded-lg 
                outline-none 
                border-none 
                font-medium
              "
              required
            />
          </label>

          {/* Email */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="
                bg-tertiary 
                py-3 px-5          /* UPDATED */
                placeholder:text-secondary 
                text-white 
                rounded-lg 
                outline-none 
                border-none 
                font-medium
              "
              required
            />
          </label>

          {/* Message */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Message</span>
            <textarea
              rows={5}             /* UPDATED: smaller height */
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="
                bg-tertiary 
                py-3 px-5            /* UPDATED */
                placeholder:text-secondary 
                text-white 
                rounded-lg 
                outline-none 
                border-none 
                font-medium
              "
              required
            />
          </label>

          {/* Button */}
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
            transition={{ duration: 0.35 }}
            className="
              py-2.5 px-7         /* UPDATED: smaller button */
              rounded-xl 
              outline-none 
              w-fit 
              text-white 
              font-bold 
              shadow-md 
              shadow-primary
            "
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

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-6 mt-8">
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

      {/* ---------- RIGHT: EARTH 3D ---------- */}
      <motion.div
        variants={rightAnim}
        initial="hidden"
        animate="show"
        className="xl:flex-1 xl:h-[520px] md:h-[450px] h-[300px]"
      >
        <EarthCanvas />
      </motion.div>

    </div>
  );
};

export default SectionWrapper(Contact, "contact");
