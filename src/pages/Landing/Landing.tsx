import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { FC } from "react";
import styles from "./style.module.css";
import HeroSection from "./components/HeroSection";
// import testimonial from "src/assets/testimonial-image.png";

const Landing: FC = () => {
  return (
    <Parallax pages={4}>
      <ParallaxLayer offset={0} speed={0.5} className={styles.heroSection}>
        <HeroSection />
      </ParallaxLayer>
    </Parallax>
  );
};

export default Landing;
