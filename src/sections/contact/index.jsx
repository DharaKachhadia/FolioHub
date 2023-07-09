import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import style from "./contact.module.scss";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
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
    <div className={style.contactSection} id="contact">
      <motion.section
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants}
      >
        <h1>Welcome to Contact section</h1>
      </motion.section>
    </div>
  );
};

export default Contact;
