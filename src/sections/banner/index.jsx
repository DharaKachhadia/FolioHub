import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import style from "./banner.module.scss";
import Circle from '../../assets/images/banner-circle.svg';
import Image from "next/image";

const BannerSection = () => {
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
    },
  };

  return (
    <section className={style.bannerSection}>
      <div className={style.middleShadow}></div>
      <Image src={Circle} className={style.circleImage}/>
      <motion.section
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants}
      >
        <div className={style.infoContent}>
          <h1>Hello, I'm Dhara</h1>
          <h1>Frontend Developer</h1>
          <p>I'm a passionate and dedicated frontend developer with 2 years of experience.</p>
        </div>
      </motion.section>
    </section>
  );
};

export default BannerSection;
