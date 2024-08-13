import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { FC, useState } from "react";
import icon from "src/assets/images/icon2.png";
import plane from "src/assets/images/plane.png";
import styles from "./style.module.css";

const SplashScreen: FC = () => {
  const [timeOut, setTimeOut] = useState(false);

  setTimeout(() => {
    setTimeOut(true);
  }, 6500);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 6 }}
      className={styles.splashScreen}
      style={{ display: timeOut ? "none" : "block" }}
    >
      {/* logo */}
      <Box className={styles.absoluteTopLeft} width="100%" height="100%">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ease: "easeOut",
            duration: 1,
          }}
          className={styles.fullScreenCentered}
        >
          <img src={icon} alt="logo" style={{ width: "5rem" }} />
        </motion.div>
      </Box>

      {/* background */}
      <motion.div
        initial={{ y: -650, x: 1000 }}
        animate={{ y: -20, x: -20 }}
        transition={{
          ease: "easeOut",
          duration: 1,
          delay: 1.5,
        }}
        className={styles.fullScreen}
      >
        <Box minHeight="110%" minWidth="110%" className={styles.gradientBox} />
      </motion.div>

      {/* text */}
      <Box position="absolute" top={0} left={0} width="100%" height="100%">
        <Box className={styles.fullScreenCentered}>
          <motion.div
            initial={{ x: -700, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              ease: "easeInOut",
              type: "spring",
              duration: 2,
              delay: 3,
            }}
            className={styles.travelTextContainer}
          >
            TRAVEL
          </motion.div>
        </Box>
      </Box>

      {/* text */}
      <Box position="absolute" top={0} left={0} width="100%" height="100%">
        <Box className={styles.fullScreenCentered}>
          <motion.div
            initial={{ opacity: 0, x: 700 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              ease: "easeInOut",
              type: "spring",
              duration: 2,
              delay: 3,
            }}
            className={styles.sphereTextContainer}
          >
            SPHERE
          </motion.div>
        </Box>
      </Box>

      {/* Image */}
      <Box position="absolute" top={0} left={0} width="100%" height="100%">
        <motion.div
          initial={{ scale: 4, opacity: 0, rotate: 20 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{
            ease: "easeInOut",
            type: "spring",
            duration: 2.2,
            delay: 3,
          }}
          className={styles.fullScreenCentered}
        >
          <img src={plane} alt="logo image" className={styles.planeImage} />
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default SplashScreen;
