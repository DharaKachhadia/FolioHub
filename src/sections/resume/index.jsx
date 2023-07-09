import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import style from "./resume.module.scss";

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.2, // Percentage of the section visible to trigger animation
  });

  const animationVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      backgroundColor: "transparent",
    },
  };

  return (
    <div className={style.resumeSection} id="resume">
      <motion.section
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants}
      >
        <h1>Welcome to Resume</h1>
      </motion.section>
    </div>
  );
};

export default Resume;
